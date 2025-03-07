'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to chat page by default
    router.push('/chat');
  }, [router]);

  return <Layout />;
} 