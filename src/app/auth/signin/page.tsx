'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { User, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      router.replace('/');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleSignIn = async (signInEmail: string) => {
    const toastId = toast.loading('Signing in...');
    try {
        const res = await fetch(`/api/user?email=${signInEmail}`);
        if (res.ok) {
            const userData = await res.json();
            localStorage.setItem('userSession', JSON.stringify({ user: userData }));
            toast.success('Signed in successfully!', { id: toastId });
            router.push('/');
        } else {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Email not found.');
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        toast.error(`Sign-in failed: ${errorMessage}`, { id: toastId });
    }
  };

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email.");
      return;
    }
    await handleSignIn(email);
  };
  
  if (loading) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="flex items-center space-x-3 p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
            <Loader2 className="h-8 w-8 animate-spin text-[#2596EB]" />
            <div className="text-center">
                <p className="text-lg font-semibold text-gray-700">Loading...</p>
                <p className="text-sm text-gray-500">Checking session status, please wait.</p>
            </div>
            </div>
        </div>
    );
  }
  
  return (
    <>
      <div className="w-full min-h-screen flex flex-col p-4 relative overflow-hidden bg-[#E0F3FF]">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-[10%] left-[10%] w-48 h-48 bg-white/50 rounded-full"></div>
          <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-white/40 rounded-lg"></div>
          <div className="absolute bottom-[25%] left-[20%] w-36 h-36 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-[10%] right-[10%] w-24 h-24 bg-white/50 rounded-lg"></div>
        </div>
        
        <main className="flex-grow flex flex-col items-center justify-center z-10 w-full">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-5xl text-[#2596EB] font-bold">
                Leave Portal
                </h1>
                <p className="text-[#2596EB]/90 text-lg">
                ระบบจัดการวันลา
                </p>
                 <img 
                    id="login-logo" 
                    alt="Busisoft Logo" 
                    data-ai-hint="company logo" 
                    loading="lazy" 
                    width="200" 
                    height="100" 
                    decoding="async" 
                    data-nimg="1" 
                    className="object-contain mx-auto pt-4" 
                    src="https://firebasestorage.googleapis.com/v0/b/bsportal.appspot.com/o/busisoft-logo-login.png?alt=media&token=8d899539-3665-4818-8f35-4383188d839e" 
                    style={{color: 'transparent'}} 
                 />
            </div>
            <div className="w-full max-w-sm flex flex-col items-center">
                    <button
                        onClick={() => handleSignIn('wasan@busisoft.co.th')}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium h-12 px-4 py-2 w-full bg-white text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-md border border-gray-200"
                    >
                        <FcGoogle className="mr-2 h-5 w-5" />
                        Sign in with Google
                    </button>

                    <div className="relative flex py-5 items-center w-full">
                        <div className="flex-grow border-t border-gray-300/50"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300/50"></div>
                    </div>

                    <form onSubmit={handleCredentialsSignIn} className="grid gap-4 w-full">
                       <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                className="flex h-12 w-full rounded-lg border border-gray-200 bg-white px-12 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2596EB] shadow-sm"
                                id="email"
                                placeholder="Email or Username"
                                required
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                             <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                className="flex h-12 w-full rounded-lg border border-gray-200 bg-white px-12 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2596EB] shadow-sm"
                                id="password"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base h-12 px-4 py-2 w-full bg-[#2596EB] text-white hover:bg-[#2596EB]/90 transition-all duration-300 shadow-lg mt-2 font-semibold"
                        type="submit"
                        >
                        Sign In
                        <ArrowRight className="ml-2 h-5 w-5"/>
                        </button>
                    </form>
            </div>
        </main>
        <footer className="text-center text-sm text-black/40 py-4 z-10 font-light">
          © Copyright {new Date().getFullYear()} Busisoft (Thailand) Company Limited. All rights reserved.
        </footer>
      </div>
    </>
  );
}
