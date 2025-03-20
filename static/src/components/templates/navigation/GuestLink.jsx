import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const GuestLink = () => {

    return (
      <Link to="/profile" className="flex items-center gap-2 lg:gap-4">
        <div className="text-right text-white">
          <h2 className="text-sm lg:text-base leading-[1.5] font-semibold">
            {userData.first_name} {userData.last_name}
          </h2>
          <p className="text-[11px] lg:text-xs text-white/80">
            {userData.email}
          </p>
        </div>
        <div className="p-3 text-lg lg:text-xl bg-dark-100 text-white rounded-full">
          <FaUserAlt />
        </div>
      </Link>
    );
  }

  // return (
  //   <div className="flex items-center gap-2 lg:gap-4">
  //     <Link
  //       className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-semibold"
  //       to="/login"
  //     >
  //       Login
  //     </Link>
  //     <Link
  //       className="px-4 py-2 border border-primary text-dark-300 rounded-lg text-sm font-semibold bg-primary"
  //       to="/register"
  //     >
  //       Register
  //     </Link>
  //   </div>
  // );
};
