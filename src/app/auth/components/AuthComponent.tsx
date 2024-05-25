"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Supabase Anon Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function AuthComponent() {
  
    const supabase =createClientComponentClient();
    const handleLoginWithGithub=()=>{
        supabase.auth.signInWithOAuth({
            provider:"github",
            options:{
                redirectTo:location.origin+"/auth/callback",
            }
        })
      
    }
    return (
    <div className ="w-full h-screen flex justify-center items-center">
        <div className="w-96 border shadow-sm p-5 rounded-sm space-y-3">
            <h1 className='font-bold text-lg'>
              {"  Welcome to Chatgpt"}
            </h1>
            <p>
               
               { "It is a platform that build  using vector db and Chatgpt's  API to  create a ChatGPT like that can answer with our own knowledge base please don't ask something unrelated."}
               

            </p>
            <Button className="w-full bg-indigo-500" onClick={handleLoginWithGithub}>Login from github</Button>
        </div>
   
    </div>
  )
}
