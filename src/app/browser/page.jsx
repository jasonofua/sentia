'use client';

import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Browser() {
  return (
    <Layout>
      <div className="h-full bg-dark p-4">
        <div className="h-full rounded-lg overflow-hidden flex flex-col">
          {/* Trading Platform Header */}
          <div className="bg-dark-lighter p-3 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Image src="/raydium-logo.svg" alt="Raydium" width={24} height={24} />
              <div className="flex space-x-4 text-gray-400">
                <button className="text-white">Swap</button>
                <button>Liquidity</button>
                <button>Portfolio</button>
                <button>Perpetuals</button>
                <button>More ▾</button>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-400">Priority: Turbo</span>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md">Connect Wallet</button>
            </div>
          </div>
          
          {/* Trading Interface */}
          <div className="flex-1 p-4 flex">
            {/* Chart Area */}
            <div className="flex-1 bg-dark-lighter rounded-lg p-3 mr-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <Image src="/ray-logo.svg" alt="RAY" width={20} height={20} />
                  <span className="mx-1 text-white">/</span>
                  <Image src="/sol-logo.svg" alt="SOL" width={20} height={20} />
                  <span className="ml-2 text-gray-400">25/03/04 18:03</span>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs">15m</button>
                  <button className="text-gray-400 px-2 py-1 text-xs">1h</button>
                  <button className="text-gray-400 px-2 py-1 text-xs">4h</button>
                  <button className="text-gray-400 px-2 py-1 text-xs">1D</button>
                  <button className="text-gray-400 px-2 py-1 text-xs">1W</button>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="text-white text-2xl">0.015278</div>
                <div className="text-red-500 text-sm">-0.01%</div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 w-full bg-dark-lighter relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Price chart would be displayed here
                </div>
              </div>
            </div>
            
            {/* Trading Panel */}
            <div className="w-80 bg-dark-lighter rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Buy</button>
                <div className="flex items-center text-gray-400 text-sm">
                  <span>0.5%</span>
                  <button className="ml-2">⚙️</button>
                </div>
              </div>
              
              {/* From */}
              <div className="mb-4">
                <div className="text-gray-400 mb-1">From</div>
                <div className="bg-dark p-3 rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <Image src="/sol-logo.svg" alt="SOL" width={24} height={24} />
                    <span className="ml-2 text-white">SOL</span>
                    <span className="ml-1 text-gray-400">▾</span>
                  </div>
                  <div className="text-gray-400">~$0</div>
                </div>
              </div>
              
              {/* Swap Icon */}
              <div className="flex justify-center mb-4">
                <button className="bg-gray-700 p-2 rounded-full">
                  <span className="text-white">↓</span>
                </button>
              </div>
              
              {/* To */}
              <div className="mb-6">
                <div className="text-gray-400 mb-1">To</div>
                <div className="bg-dark p-3 rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <Image src="/ray-logo.svg" alt="RAY" width={24} height={24} />
                    <span className="ml-2 text-white">RAY</span>
                    <span className="ml-1 text-gray-400">▾</span>
                  </div>
                  <div className="text-gray-400">~$0</div>
                </div>
              </div>
              
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 