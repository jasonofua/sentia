'use client';

import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Chat() {
  return (
    <Layout>
      <div className="h-full p-6">
        <div className="bg-white rounded-lg p-4 mb-4 inline-block">
          <div className="flex items-center">
            <span className="font-medium">Buy 200</span>
            <div className="mx-1 flex items-center">
              <Image src="/usdc-logo.svg" alt="USDC" width={20} height={20} />
              <span className="ml-1">USDC</span>
            </div>
            <span className="font-medium">worth of</span>
            <div className="mx-1 flex items-center">
              <Image src="/wif-logo.svg" alt="WIF" width={20} height={20} />
              <span className="ml-1">$WIF</span>
            </div>
          </div>
          <div className="text-gray-600 text-sm">on Raydium</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-3 mb-4 inline-block text-gray-600">
          Opening browser and navigating to Raydium...
        </div>

        <div className="inline-block mb-4">
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full flex items-center">
            <Image src="/phantom-logo.svg" alt="Phantom" width={20} height={20} className="mr-2" />
            Connect Wallet
          </button>
        </div>
      </div>
    </Layout>
  );
} 