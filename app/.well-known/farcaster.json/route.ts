function withValidProperties(properties: Record<string, undefined | string | string[]>) {
return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
);
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL;
  
  return Response.json({
  "accountAssociation": {
    "header": "eyJmaWQiOjExNDY1MDMsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhjMTc5ZEM2NzBBMjc1NjRjOThlZWI3YzljQmYzMEExNjAwYmRBMTM3In0",
    "payload": "eyJkb21haW4iOiJibG9ja2NoYWluLWlxLnZlcmNlbC5hcHAifQ",
    "signature": "jS6uOCiXvEckapgcpruC4H4YoYX9dB8KXYQOG6Q6BIUT8vruHPcCxvypQYaN2sl6hARSfB6tpY8s20NESPu/oxw="
  },
    "baseBuilder": {
      "allowedAddresses": ["0x5f32eEfD9d8cb924e865706CA221af0B6fEeeADB"] // Add your Base Account address here
    },
    "miniapp": {
      "version": "1",
      "name": "BlockchainIQ",
      "homeUrl": URL,
      "iconUrl": `${URL}/icon.png`,
      "splashImageUrl": `${URL}/splash.png`,
      "splashBackgroundColor": "#22c55e",
      "webhookUrl": `${URL}/api/webhook`,
      "subtitle": "Master crypto knowledge",
      "description": "Ultimate blockchain and cryptocurrency quiz platform. Test your knowledge with 10 randomized questions from 100 plus topics and earn your exclusive certificate",
      "screenshotUrls": [
        `${URL}/screenshot1.png`,
        `${URL}/screenshot2.png`,
        `${URL}/screenshot3.png`
      ],
      "primaryCategory": "education",
      "tags": ["blockchain", "cryptocurrency", "quiz", "education", "nft"],
      "heroImageUrl": `${URL}/hero.png`,
      "tagline": "Test your blockchain expertise",
      "ogTitle": "BlockchainIQ Quiz Platform",
      "ogDescription": "Challenge yourself with randomized blockchain questions and earn your certificate",
      "ogImageUrl": `${URL}/og-image.png`,
      "noindex": false
    }
  });
}