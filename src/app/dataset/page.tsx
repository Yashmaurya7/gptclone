import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { BsDatabase } from 'react-icons/bs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Form from './component/Form';
export default async function page() {
    const supabase=createServerComponentClient({cookies});
    const {data}=await supabase.auth.getSession();
    if(!data.session){
      return redirect("/auth");
    }
   console.log("role",data.session.user.id)
    const {data:user}=await supabase.from("users").select("role").eq("id",data.session.user.id).single()
   if(user?.role!="admin"){
   return redirect("/");
   }
    return (
<div className="max-w-4xl mx-auto h-screen flex justify-center items-center">
<div className="w-full p-5 space-y-3">
<div className='flex items-center gap-2'>
    <BsDatabase className='w-5 h-5'/>
    Yash AI dataset
</div>
<Form/>
</div>
</div>
    
  )
}
