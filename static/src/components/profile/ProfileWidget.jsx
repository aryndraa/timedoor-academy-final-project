import {useEffect, useState} from "react";
import auth from "../../api/auth.js";
import profile from "../../api/profile.js";
import {Link} from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {FaUser} from "react-icons/fa";
import {RoraTier} from "./RoraTier.jsx";
import {RoraPoint} from "./RoraPoint.jsx";

export const ProfileWidget = () => {
  const [userData, setUserData] = useState(null);
  const authorized = auth.checkLoginStatus();

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profile.guestProfile();
      console.log(data);
      if (data) {
        setUserData(data);
      }
    };

    fetchProfile();
  }, []);

  // Pastikan userData sudah ada sebelum merender bagian yang membutuhkannya
  if (!userData) {
    return <div className="text-center text-text-400">Loading...</div>;
  }

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
            {userData.first_name} {userData.last_name}
          </h1>
          <p className="text-xs text-text-400">{userData.email}</p>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-4 lg:flex flex-col lg:gap-8">
        <RoraTier />
        <RoraPoint />
      </div>
    </div>
  );
};
