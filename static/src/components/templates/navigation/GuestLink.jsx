import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useState, useEffect } from "react";

export const GuestLink = () => {

  const {isAuth, user, userProfile} = useAuth()

  const [profile, setProfile] = useState();

  useEffect(() => {
      const foundProfile = userProfile.find((p) => p.userId === 1);
      setProfile(foundProfile || null);
  }, [user, userProfile]);
  
  console.log(profile)

  if(!isAuth) {
    return (
      <div className="flex items-center gap-2 lg:gap-4">
        <Link
          className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-semibold"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="px-4 py-2 border border-primary text-dark-300 rounded-lg text-sm font-semibold bg-primary"
          to="/register"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <Link to="/profile" className="flex items-center gap-2 lg:gap-4">
      <div className="text-right text-white">
        <h2 className="text-sm lg:text-base leading-[1.5] font-semibold">
          {profile?.firstName} {profile?.lastName}
        </h2>
        <p className="text-[11px] lg:text-xs text-white/80">
          arycoder1102@gmail.com
        </p>
      </div>
      <div className="p-3 text-lg lg:text-xl bg-dark-100 text-white rounded-full">
        <FaUserAlt />
      </div>
    </Link>
  );
  
  

};
