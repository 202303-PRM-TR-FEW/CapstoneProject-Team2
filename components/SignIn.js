'use client'

import React, { use } from 'react'
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

import { useEffect } from 'react';

const SignIn = () => {
    const { data: session, status } = useSession();


 if (status === "authenticated") {

  return (
   
    <div>

    <Image
     alt='user profile picture'
      src={session.user.image}
      width={40}
      height={40}
      className="rounded-full"
    />
    <button className=' bg-orange-900' onClick={() => signOut( { callbackUrl : '/' })}>Sign Out</button>
  </div>
  )
  }

  
 

  
}

export default SignIn