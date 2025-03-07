import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === '/browser' ? 'browser' : 'chat');

  return (
    <div className="flex h-screen bg-light-gray">
      {/* Sidebar */}
      <div className="w-20 bg-white flex flex-col items-center py-6 border-r border-light-gray">
        <div className="mb-10">
          <Link href="/">
            <Image src="/logo.svg" alt="Sentia Logo" width={36} height={36} />
          </Link>
        </div>

        <nav className="flex flex-col items-center space-y-8 flex-grow">
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
        <div className="h-16 bg-white border-b border-light-gray flex items-center justify-between px-4">
          <div className="flex space-x-2">
            <Link href="/chat">
              <button
                className={`px-4 py-2 ${activeTab === 'chat'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-white text-gray-500'
                  } rounded-full flex items-center`}
                onClick={() => setActiveTab('chat')}
              >
                <span className="mr-2">💬</span>
                Chat
              </button>
            </Link>
            <Link href="/browser">
              <button
                className={`px-4 py-2 ${activeTab === 'browser'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-white text-gray-500'
                  } rounded-full flex items-center`}
                onClick={() => setActiveTab('browser')}
              >
                <span className="mr-2">🌐</span>
                Browser
              </button>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="flex items-center bg-white border border-light-gray rounded-lg px-3 py-1">
              <span className="text-gray-600">0xA4...F5D2</span>
              <button className="ml-2 text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8V5L21 10L16 15V12H8V15L3 10L8 5V8H16Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>

        {/* Bottom Action Bar */}
        <div className="h-20 bg-light-gray border-t border-light-gray flex items-center justify-center space-x-4 px-4">
          <ActionButton text="Buy 200 USDC worth of WIF on Raydium." />
          <ActionButton text="Swap 150 USDC for SOL on Jupiter." />
          <ActionButton text="Send 0.5 SOL to 0xA4...F5D2." />
          <ActionButton text="Place a limit order to buy 0.5 SOL at $85." />

          <div className="absolute bottom-5 right-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Describe a trade action"
                className="w-64 px-4 py-2 rounded-full border border-light-gray"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-gradient-to-r from-primary to-secondary rounded-r-full text-white">
                ↑
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
    chat: "💬",
    tasks: "✓",
    flows: "⟳",
    billing: "💰",
    settings: "⚙️",
  };

  return (
    <Link href={`/${label.toLowerCase()}`} className="flex flex-col items-center">
      <div className={`p-3 rounded-lg ${active ? 'bg-light-gray' : 'hover:bg-light-gray'}`}>
        <span className="text-xl">{iconMap[icon]}</span>
      </div>
      <span className={`text-xs mt-1 ${active ? 'text-primary' : 'text-gray-500'}`}>{label}</span>
    </Link>
  );
};

const ActionButton = ({ text }) => {
  return (
    <button className="px-4 py-2 bg-white rounded-lg text-sm text-gray-700 hover:bg-light-gray transition-colors">
      {text}
    </button>
  );
};

export default Layout; 