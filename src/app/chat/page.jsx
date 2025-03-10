'use client';

import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Chat() {
  return (
    <Layout>
      <div className="h-full flex flex-col gap-y-[16px]">
        <div className="bg-white rounded-[18px] py-[4px] px-[12px] mb-4 inline-block border w-4/12 text-[12px]">
          <div className="flex gap-x-[6px] items-center">
            <span className="font-medium">Buy 200</span>
            <div className="mx-1 flex items-center my-[4px]">
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

        <div className="bg-gray-100 rounded-[18px] py-[4px] px-[12px] inline-block border w-4/12 text-gray-600 text-[12px]">
          Opening browser and navigating to Raydium...
        </div>

        <div className="inline-block rounded-[18px] py-[4px] px-[12px] border w-4/12">
          <button className="bg-[#A99FEC] border-0 text-[#fff] text-[12px] px-[16px] py-[8px] rounded-[10px] flex items-center">
            <Image src="/phantom-logo.svg" alt="Phantom" width={20} height={20} className="mr-2" />
            Connect Wallet
          </button>
        </div>
      </div>
    </Layout>
  );
} 