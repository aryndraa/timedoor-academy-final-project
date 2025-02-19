import {DiscoverSelect} from "@/app/components/DiscoverSelect";

export const DiscoverMovieForm = () => {
 return (
   <form action="" className="flex flex-col gap-3 bg-dark-200 p-4">
     <DiscoverSelect/>
     <DiscoverSelect/>
     <div className="flex gap-3">
      <DiscoverSelect/>
      <DiscoverSelect/>

     </div>
   </form>
 )
}