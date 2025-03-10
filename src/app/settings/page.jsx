'use client';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { FcBrokenLink } from "react-icons/fc";
import { Switch } from "@/components/ui/switch"


export default function Settings() {
  const [notSwitch, setNotSwitch] = useState(false);
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="bg-white flex flex-col gap-y-[10px] rounded-[24px] p-[24px] w-[600px] border">
          <h2 className="text-[#AAA7A3] font-[600] text-[14px] text-gray-500 pb-[10px] mb-4 border-b border-gray-100">Wallet</h2>
          
          <div className="flex justify-between items-center mb-6 pb-4 text-[#4D4C4A]">
              <div className="font-[600] text-[14px]">Connected Wallets</div>
            <div className="flex items-center">
              <span className="mr-2 text-[15px]">Phantom (0xA4...F5D2)</span>
              <button className="ml-[8px] h-[32px] w-[32px] rounded-[10px] text-[24px] text-[#F15053] cursor-pointer bg-transparent flex justify-center items-center border-0">
                <FcBrokenLink />
              </button>
            </div>
          </div>
          
          <h2 className="text-[#AAA7A3] font-[600] text-[14px] text-gray-500 pb-[10px] mb-4 border-b border-gray-100">Trading Preferences</h2>
          
          <div className="flex justify-between items-center mb-4">
            <div className='text-[#4D4C4A] text-[14px] font-[600]'>Notifications</div>
            <form className='border'><label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value={notSwitch} class="sr-only peer"/>
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
            </label></form>
            
          </div>
          
          <div className="flex justify-between items-center mb-6 pb-4">
            <div className='text-[#4D4C4A] text-[14px] font-[600]'>Design Theme</div>
            <div className="flex items-center">
              <span className="mr-2">Light</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer"></div>
              </label>
            </div>
          </div>
          
          <h2 className="text-[#AAA7A3] font-[600] text-[14px] text-gray-500 pb-[10px] mb-4 border-b border-gray-100">Trading Preferences</h2>
          
          <div className="flex justify-between items-center mb-4">
            <div className='text-[#4D4C4A] text-[14px] font-[600]'>Slippage</div>
            <div className="flex gap-x-[2px] border border-[#E6E6E6] rounded-[16px]">
              <button className="px-[20px] py-[8px] rounded-lg text-gray-600 border-0 bg-transparent">0.1%</button>
              <button className="px-[20px] py-[8px] rounded-lg bg-[#4D4C4A] text-[#fff] border-0">0.5%</button>
              <button className="px-[20px] py-[8px] rounded-lg text-gray-600 border-0 bg-transparent">1%</button>
                <button className="px-[20px] py-[8px] rounded-lg text-gray-600 border border-[#E6E6E6] bg-transparent">Custom</button>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className='text-[#4D4C4A] text-[14px] font-[600]'>Gas Limit</div>
            <input 
              type="text" 
              value="10.00" 
              className="px-[41px] py-[9.5px] border border-gray-200 rounded-lg text-center"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className='text-[#4D4C4A] text-[14px] font-[600]'>Auto-Retry on Failure</div>
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