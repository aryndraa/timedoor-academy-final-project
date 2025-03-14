import { FaUser } from "react-icons/fa";
import {RoraTier} from "./RoraTier.jsx";
import {RoraPoint} from "./RoraPoint.jsx";

export const ProfileWidget = () => {
  return (
    <div className="bg-dark-250 py-6 px-6 flex flex-col  rounded-lg">
      <div className="flex justify-center items-center gap-4 mb-4 pb-4 border-b border-border/20  ">
        <div className="p-4 bg-dark-100 text-3xl rounded-full">
          <FaUser/>
        </div>
        <div>
          <h1 className="text-lg mb-1 font-medium leading-[1.5]">I Putu Mahendra Arya Valentino</h1>
          <p className="text-xs text-text-400">andramahendra445@gmail.co...</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <RoraTier/>
        <RoraPoint/>
      </div>
    </div>
  )
}