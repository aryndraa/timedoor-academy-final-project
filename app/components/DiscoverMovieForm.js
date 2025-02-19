import {DiscoverSelect} from "@/app/components/DiscoverSelect";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";

export const DiscoverMovieForm = () => {
 return (
   <form action="" className="flex flex-col gap-3 bg-dark-200 p-4 rounded-lg">
     <DiscoverSelect name={"location"} defaultValue={"bali, denpasar"} icon={<IoLocationSharp/>}/>
     <DiscoverSelect name={"date"} defaultValue={"08/12/2025"} icon={<IoCalendarClear/>}/>
     <div className="flex gap-3">
      <DiscoverSelect name={"cinema"} defaultValue={"IMAX"}/>
      <DiscoverSelect name={"genre"} defaultValue={"horror"}/>
     </div>
     <button type="submit" className="bg-primary text-dark-300 font-extrabold p-3 rounded-lg mt-4">Search Ticket</button>
   </form>
 )
}