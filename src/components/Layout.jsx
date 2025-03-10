import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoChatbubbleEllipsesOutline, IoCompassOutline } from "react-icons/io5";
import { FaArrowUpLong } from "react-icons/fa6";
import { FcBrokenLink } from "react-icons/fc";
import { BiWallet } from "react-icons/bi";
import { BsFileCheck } from "react-icons/bs";
import { TbBrandUbuntu } from "react-icons/tb";
import { PiCoinsThin } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";






const Layout = ({ children }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === '/browser' ? 'browser' : 'chat');

  return (
    <div className="flex gap-x-[25px] h-screen bg-gradient-to-b from-[#ffffff] from-60% to-[#E6E6E6] to-95%">
      {/* Sidebar */}
      <div className="w-20 bg-white flex flex-col items-center py-6 pt-[30px]">
        <div className="mb-[30px]">
          <Link href="/">
            <Image src="/logo-15.svg" alt="Sentia Logo" width={36} height={36} />
          </Link>
        </div>

        <nav className="flex flex-col items-center gap-y-[20px] flex-grow">
          <SidebarItem icon="chat" label="Chat" active={pathname === '/chat'} />
          <SidebarItem icon="tasks" label="Tasks" active={pathname === '/tasks'} />
          <SidebarItem icon="flows" label="Flows" active={pathname === '/flows'} />
          <SidebarItem icon="billing" label="Billing" active={pathname === '/billing'} />
          <SidebarItem icon="settings" label="Settings" active={pathname === '/settings'} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="h-16 bg-white flex items-center justify-between px-[20px] py-[15px]">
          <div className="flex mx-auto border p-[4px] rounded-[20px]">
            <Link href="/chat" className=' no-underline text-[14px] font-semibold'>
              <button
                className={`px-[24px] py-[8px] border-0 no-underline text-[12px] font-semibold ${activeTab === 'chat'
                  ? 'bg-gradient-to-r from-[#0E5DFA] to-[#EC560A] text-[#fff]'
                  : 'bg-[#fff] text-[#AAA7A3]'
                  } rounded-[16px] w-[128px] flex justiify-center items-center cursor-pointer`}
                onClick={() => setActiveTab('chat')}
              >
                <span className="mr-[4px] text-[18px]"><IoChatbubbleEllipsesOutline /></span>
                Chat
              </button>
            </Link>
            <Link href="/browser" className=' no-underline text-[14px] font-semibold'>
              <button
                className={`px-[24px] py-[8px] border-0 no-underline text-[12px] font-semibold ${activeTab === 'browser'
                  ? 'bg-gradient-to-r from-[#0E5DFA] to-[#EC560A] text-[#fff]'
                    : 'bg-[#fff] text-[#AAA7A3]'
                  } rounded-[16px] w-[128px] flex justiify-center items-center cursor-pointer`}
                onClick={() => setActiveTab('browser')}
              >
                <span className="mr-[4px] text-[20px]"><IoCompassOutline /></span>
                Browser
              </button>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="flex items-center bg-white border border-light-gray rounded-[16px] p-[5px]">
              <button className="mr-[8px] h-[32px] w-[32px] rounded-[10px] text-[24px] text-[#EC560A] cursor-pointer flex justify-center items-center border-0 bg-[#EC560A26]">
                <BiWallet />
              </button>
              <span className="text-gray-600 text-[12px]">0xA4...F5D2</span>
              <button className="ml-[8px] h-[32px] w-[32px] rounded-[10px] text-[24px] text-[#EC560A] cursor-pointer bg-transparent flex justify-center items-center border-0">
                <FcBrokenLink />
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-scroll scrollbar-hidden border border-[#E6E6E6] rounded-[30px] h-[50%] bg-main p-[30px]">
          {children}
        </div>

        {/* Bottom Action Bar */}
        <div className="bg-light-gray flex flex-col gap-y-[20px] px-4 mt-[20px] pb-[4px]">
          <div className="flex items-center justify-between gap-x-[10px] w-9/12 mx-auto">
            <ActionButton text="Buy 200 USDC worth of WIF on Raydium." />
            <ActionButton text="Swap 150 USDC for SOL on Jupiter." />
            <ActionButton text="Send 0.5 SOL to 0xA4...F5D2." />
            <ActionButton text="Place a limit order to buy 0.5 SOL at $85." />
          </div>

          <div className="w-6/12 mx-auto flex flex-row justify-center">
            <div className="relative px-[10px] py-[6px] rounded-full w-full flex bg-[#fff]">
              <input
                type="text"
                placeholder="Describe a trade action"
                className="flex flex-1 text-[12px] border-0 outline-0 mr-[10px]"
              />
              <button type='button' className="w-[58px] h-[36px] px-3 cursor-pointer flex justify-center items-center bg-gradient-to-r from-[#0E5DFA] to-[#EC560A] rounded-full text-[#fff] text-[12px] border-0">
                <FaArrowUpLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  const iconMap = {
    chat: <IoChatbubbleEllipsesOutline />,
    tasks: <BsFileCheck />,
    flows: <TbBrandUbuntu />,
    billing: <PiCoinsThin />,
    settings: <FiSettings />,
  };

  return (
    <Link href={`/${label.toLowerCase()}`} className="flex flex-col items-center gap-[4px] no-underline">
      <div className={`w-[40px] h-[40px] flex justify-center items-center rounded-lg ${active ? 'bg-[#F6F6F6]' : 'hover:bg-light-gray bg-[#F6F6F6]'}`}>
        <span className={`text-[20px] ${active ? 'active-text-gradient' : 'text-[#AAA7A3]'}`}>{iconMap[icon]}</span>
      </div>
      <span className={`text-[12px] font-medium mt-1 ${active ? 'active-text-gradient' : 'text-[#AAA7A3]'}`}>{label}</span>
    </Link>
  );
};

const ActionButton = ({ text }) => {
  return (
    <button type='button' className="p-[10px] cursor-pointer bg-[#fff] border-0 rounded-full text-[10px] font-medium text-[#4D4C4A] transition-colors">
      {text}
    </button>
  );
};

export default Layout; 