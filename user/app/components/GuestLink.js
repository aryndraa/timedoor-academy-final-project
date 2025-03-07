"use client"

import { FaUserAlt } from "react-icons/fa";
import {checkLoginStatus} from "../_lib/auth";
import Link from "next/link";
import {hasInStorage} from "@/app/_utils/storage";
import {useAuthorize} from "@/app/_contexts/AuthorizeProvider";

export const GuestLink = () => {

  const { authorized } = useAuthorize()


  if(authorized) {
    return (
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="text-right text-white">
          <h2 className="text-sm lg:text-base leading-[1.5] font-semibold">Mahendra Arya</h2>
          <p className="text-[11px] lg:text-xs text-white/80">aryacoder1102@gma...</p>
        </div>
        <div className="p-3 text-lg lg:text-xl  bg-dark-100 text-white rounded-full">
          <FaUserAlt/>
        </div>
      </div>
    )
  }

  return  (
    <div className="flex items-center gap-2 lg:gap-4 ">
      <Link className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-bold"
            href={'/profile/login'}>Login</Link>
      <Link className="px-4 py-2 border border-primary text-dark-300 rounded-lg text-sm font-bold bg-primary"
            href={'/profile/register'}>Register</Link>
    </div>
  )
}