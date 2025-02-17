import { FaUserAlt } from "react-icons/fa";

export const GuestLink = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-right text-white">
        <h2 className="text-sm font-semibold mb-0.5">Mahendra Arya</h2>
        <p className="text-[10px] text-white/80">aryacoder1102@gmail...</p>
      </div>
      <div className="p-3 text-lg bg-dark-100 text-white rounded-full">
        <FaUserAlt/>
      </div>
    </div>
  )
}