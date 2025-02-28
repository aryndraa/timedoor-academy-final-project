import Link from "next/link"
import { IoArrowBack } from "react-icons/io5";

export const BackBar = () => {
  return (
    <div>
      <Link href={"/movies"} className="absolute left-0 right-0 top-0  text-3xl p-4 py-8  flex bg-dark-300 text-white  w-full ">
        <IoArrowBack/>
      </Link>
    </div>
  )
}
