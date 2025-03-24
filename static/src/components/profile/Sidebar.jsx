import {ProfileWidget} from "./ProfileWidget.jsx";
import {Link} from "react-router-dom";
import shopping from "./../../assets/shopping.svg"
import discount from "./../../assets/discount.svg"

export const Sidebar = () => {
  return (
    <div className="w-full lg:max-w-[340px] flex flex-col gap-4 ">
      <ProfileWidget/>
      <Link to={'/profile/shopping-history'} className="flex items-center gap-4 p-4 lg:p-6 lg:py-5 bg-dark-250 hover:bg-dark-200 transition ease-in-out rounded-lg ">
        <img src={shopping} alt="" className="p-3 w-[52px] bg-dark-100 rounded-full"/>
        <div>
          <p className="text-xs lg:text-sm text-text-400 mb-1 lg:mb-0.5 ">Shopping History</p>
          <h4 className=" lg:text-lg font-medium">All Shopping Records</h4>
        </div>
      </Link>
      <Link to={'/profile'} className="flex items-center gap-4 p-4 lg:p-6 lg:py-5 bg-dark-250 hover:bg-dark-200 transition ease-in-out rounded-lg ">
        <img src={discount} alt="" className="p-3 w-[52px] bg-dark-100 rounded-full"/>
        <div>
          <p className="text-xs lg:text-sm text-text-400 mb-ss1 lg:mb-0.5 ">Discount Voucher</p>
          <h4 className=" lg:text-lg font-medium">Check My Vouchers</h4>
        </div>
      </Link>

    </div>
  )
}