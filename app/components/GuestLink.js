import { FaUserAlt } from "react-icons/fa";

export const GuestLink = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-right text-white">
        <h2 className="text-sm leading-[1.5] font-semibold">Mahendra Arya</h2>
        <p className="text-[11px] text-white/80">aryacoder1102@gma...</p>
      </div>
      <div className="p-3 text-lg bg-dark-100 text-white rounded-full">
        <FaUserAlt/>
      </div>
    </div>
  )
}