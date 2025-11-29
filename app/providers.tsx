'use client';

import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { useEffect, useState } from 'react';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || '';

let wagmiAdapter: WagmiAdapter;
let appKit: any;

if (typeof window !== 'undefined') {
  // 2. Create wagmiConfig
  wagmiAdapter = new WagmiAdapter({
    networks: [mainnet, base],
    projectId,
    ssr: false, // Disable SSR for client-side only
  });

  // 3. Create modal
  appKit = createAppKit({
    adapters: [wagmiAdapter],
    networks: [mainnet, base],
    projectId,
    features: {
      analytics: true,
    },
    themeMode: 'light',
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }

  if (!wagmiAdapter) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}