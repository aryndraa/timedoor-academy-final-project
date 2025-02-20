import {DiscoverSelect} from "@/app/components/DiscoverSelect";
import { DiscoverLocationSelect } from "./DiscoverLocationSelect";
import { DiscoverDateSelect } from "./DiscoverDateSelect";

export const DiscoverMovieForm = () => {
 return (
   <form action="" className="flex flex-col lg:flex-row w-full gap-3 bg-dark-200 p-4 lg:p-6 py-6 rounded-lg ">
    <div className="flex flex-col lg:flex-row flex-1 gap-3">
      <DiscoverLocationSelect/>
      <DiscoverDateSelect/>
    </div>
     <div className="flex gap-3 flex-1">
      {/* <DiscoverSelect name={"cinema"} defaultValue={"IMAX"}/> */}
      {/* <DiscoverSelect name={"genre"} defaultValue={"horror"}/> */}
     </div>
     <button type="submit" className="bg-primary text-dark-300 font-extrabold p-3 rounded-lg mt-4 lg:mt-0 min-h-full ">Search Ticket</button>
   </form>
 )
}