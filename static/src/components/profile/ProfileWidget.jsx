import {Link} from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {FaUser} from "react-icons/fa";
import {RoraTier} from "./RoraTier.jsx";
import {RoraPoint} from "./RoraPoint.jsx";

export const ProfileWidget = () => {

  return (
    <div className="bg-dark-250 p-4 lg:p-6 flex flex-col relative rounded-lg">
      <Link
        to="/profile/edit"
        className="text-2xl lg:hidden absolute right-0 top-0 transform translate-x-1 -translate-y-1 p-2 rounded-full bg-primary text-white"
      >
        <MdEdit />
      </Link>
      <Link
        to="/profile"
        className="flex justify-start items-center gap-4 mb-4 pb-4 border-b border-border/20"
      >
        <div className="p-4 bg-dark-100 text-3xl rounded-full">
          <FaUser />
        </div>
        <div>
          <h1 className="lg:text-lg mb-0.5 font-medium leading-[1.5]">
            Mahendra Arya
          </h1>
          <p className="text-xs text-text-400">aryacoder1102@gmail.com</p>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-4 lg:flex flex-col lg:gap-8">
        <RoraTier />
        <RoraPoint />
      </div>
    </div>
  );
};
