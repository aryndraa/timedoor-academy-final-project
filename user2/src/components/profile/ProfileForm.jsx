import {FaUser} from "react-icons/fa";

export const ProfileForm = () => {
  return (
    <div className="mb-10 pb-10 border-b border-border/20">
      <h2 className="text-2xl text-text-100 font-medium mb-4">Profile</h2>
      <div className="grid grid-cols-3 gap-y-6 items-center max-w-[80%] ">
        <h3 className="text-text-400">Photo Profile</h3>
        <div className="col-span-2 flex items-center gap-4">
          <div className="p-6 w-fit bg-dark-100 text-4xl rounded-full">
            <FaUser/>
          </div>
          <button className="px-4 py-3 font-medium  h-fit bg-dark-100 rounded-lg">Update Photo Profile</button>
        </div>

        <h3 className="text-text-400">First Name</h3>
        <input type="text"
               className="w-[70%] col-span-2 px-4 p-3  bg-transparent border border-border/20 rounded-lg focus:outline-none"
               required/>

        <h3 className="text-text-400">Last Name</h3>
        <input type="text"
               className="w-[70%] col-span-2 px-4 p-3  bg-transparent border border-border/20 rounded-lg focus:outline-none"/>
      </div>
    </div>
  )
}