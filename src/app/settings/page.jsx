'use client';

import Layout from '@/components/Layout';

export default function Settings() {
  return (
    <Layout>
      <div className="h-full flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-[600px]">
          <h2 className="text-lg text-gray-500 mb-4">Wallet</h2>
          
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <div className="font-medium">Connected Wallets</div>
            <div className="flex items-center">
              <span className="mr-2">Phantom (0xA4...F5D2)</span>
              <button className="text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8V5L21 10L16 15V12H8V15L3 10L8 5V8H16Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
          
          <h2 className="text-lg text-gray-500 mb-4">Trading Preferences</h2>
          
          <div className="flex justify-between items-center mb-4">
            <div>Notifications</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gray-700"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <div>Design Theme</div>
            <div className="flex items-center">
              <span className="mr-2">Light</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer"></div>
              </label>
            </div>
          </div>
          
          <h2 className="text-lg text-gray-500 mb-4">Trading Preferences</h2>
          
          <div className="flex justify-between items-center mb-4">
            <div>Slippage</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600">0.1%</button>
              <button className="px-3 py-1 rounded-lg bg-gray-700 text-white">0.5%</button>
              <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600">1%</button>
              <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600">Custom</button>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div>Gas Limit</div>
            <input 
              type="text" 
              value="0.00" 
              className="w-24 px-3 py-1 border border-gray-200 rounded-lg text-right"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>Auto-Retry on Failure</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer"></div>
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
} 