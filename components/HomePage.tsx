'use client';

import { useState, useEffect } from 'react';
import { Zap, Brain, Trophy, Users, Wallet } from 'lucide-react';
import { AppKitButton } from '@reown/appkit/react';
import { sdk } from '@farcaster/miniapp-sdk';

interface HomePageProps {
  onStartQuiz: (name: string) => void;
}

export default function HomePage({ onStartQuiz }: HomePageProps) {
  const [name, setName] = useState('');
  const [isMiniApp, setIsMiniApp] = useState(false);

  useEffect(() => {
    // Check if we're in a MiniApp context
    const checkMiniAppContext = async () => {
      try {
        if (typeof sdk !== 'undefined' && sdk.context) {
          const context = await sdk.context;
          setIsMiniApp(!!context);
        }
      } catch (error) {
        // Not in MiniApp context
        setIsMiniApp(false);
      }
    };

    checkMiniAppContext();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStartQuiz(name.trim());
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-500 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-600">BlockchainIQ</h2>
          </div>
          {!isMiniApp && (
            <AppKitButton
              label="Connect"
              balance="hide"
              size="sm"
              className="!bg-orange-500 !text-white !px-4 !py-2 !rounded-lg !font-medium hover:!bg-orange-600 transition-colors"
            />
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary-500 rounded-2xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-600">
                BlockchainIQ
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Test your blockchain and cryptocurrency knowledge with our daily quiz challenge
            </p>
          </div>

          {/* Quiz Start Form - Prominent */}
          <div className="max-w-md mx-auto mb-12 animate-bounce-in">
            <div className="bg-white p-8 rounded-2xl border border-primary-100 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-3">
                    Enter your name to start
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-colors"
                    placeholder="Your name"
                    required
                    maxLength={50}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="w-full bg-primary-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Start Quiz 🚀
                </button>
              </form>
            </div>
          </div>

          {/* Features Grid - Below */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 animate-slide-in">
            <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-primary-100 rounded-xl w-fit mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Randomized Questions</h3>
              <p className="text-gray-600">10 unique randomized questions from our pool of 100+ blockchain topics</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-accent-100 rounded-xl w-fit mb-4">
                <Trophy className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Earn Certificate</h3>
              <p className="text-gray-600">Score 80%+ to earn your downloadable BlockchainIQ certificate</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-primary-100 rounded-xl w-fit mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Share Results</h3>
              <p className="text-gray-600">Show off your blockchain expertise on social media</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-400 text-xs py-1 border-t border-gray-100 mt-8">
            <p>© 2025 BlockchainIQ • Built on Base</p>
          </div>
        </div>
      </div>
    </div>
  );
}