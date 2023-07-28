"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const SignIn = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex flex-col gap-4 items-center mb-8">
        <Image
          alt="user profile picture"
          src={session.user.image}
          width={40}
          height={40}
          className="rounded-full"
        />
        <button
          className=" text-white bg-sky-600 rounded-2xl p-1"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </button>
      </div>
    );
  }
};

export default SignIn;
