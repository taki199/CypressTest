"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page on component mount
    router.push('/login');
  }, [router]);

  return null; // Optionally, return null or a loading spinner while redirecting
};

export default Home;