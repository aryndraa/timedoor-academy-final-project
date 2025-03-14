import { FaUser } from "react-icons/fa";
import {RoraTier} from "./RoraTier.jsx";
import {RoraPoint} from "./RoraPoint.jsx";
import { MdEdit } from "react-icons/md";
import {Link} from "react-router-dom";

export const ProfileWidget = () => {
  return (
    <div className="bg-dark-250 p-4 lg:p-6 flex flex-col relative  rounded-lg">
      <Link to="/profile/edit" className="text-2xl lg:hidden absolute right-0 top-0 transform translate-x-1 -translate-y-1 p-2 rounded-full bg-primary text-white">
        <MdEdit />
      </Link>
      <div className="flex justify-center items-center gap-4 mb-4 pb-4 border-b border-border/20  ">
        <div className="p-4 bg-dark-100 text-3xl rounded-full">
          <FaUser/>
        </div>
        <div>
          <h1 className=" lg:text-lg mb-1 font-medium leading-[1.5]">I Putu Mahendra Arya Valentino</h1>
          <p className="text-xs text-text-400">andramahendra445@gmail.co...</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:flex flex-col  lg:gap-8">
        <RoraTier/>
        <RoraPoint/>
      </div>
    </div>
  )
}