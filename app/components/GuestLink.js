import { FaUserAlt } from "react-icons/fa";

export const GuestLink = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-right text-white">
        <h2 className="text-sm lg:text-lg leading-[1.5] font-semibold">Mahendra Arya</h2>
        <p className="text-[11px] lg:text-sm text-white/80">aryacoder1102@gma...</p>
      </div>
      <div className="p-3 text-lg lg:text-xl bg-dark-100 text-white rounded-full">
        <FaUserAlt/>
      </div>
    </div>
  )
}