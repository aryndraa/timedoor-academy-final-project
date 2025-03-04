import Image from "next/image"
import logo from "@/public/logo.svg"
import Link from "next/link"

export const Logo = () => { 
  return (
    <Link href={"/"} className="flex items-center gap-2 lg:gap-3 ">
      <Image
        src={logo}
        quality={100}
        alt="logo"
        className="w-9 lg:w-11"
      />
      <div className="text-white">
        <h1 className="text-xl lg:text-2xl font-semibold leading-[1.3]">Aurora</h1>
        <p className="text-[10px] lg:text-sm text-white/80">Cinema Asia</p>
      </div>
    </Link>
  )
}