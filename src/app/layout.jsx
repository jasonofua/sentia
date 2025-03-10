import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Sentia - Crypto Trading Platform',
  description: 'Automated crypto trading platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus_Jakarta_Sans.className}>{children}</body>
    </html>
  );
} 