export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import LandingPage from './landing-page';

export default async function Home() {
  const { userId } = await auth();
  
  if (userId) {
    redirect('/dashboard');
  }
  
  // Show landing page for logged-out users
  return <LandingPage />;
}
