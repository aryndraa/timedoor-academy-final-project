import {FaUser} from "react-icons/fa";

export const ProfileForm = () => {
  return (
    <div className="mb-5 lg:mb-10 pb-5 lg:pb-10 border-b border-border/20">
      <h2 className="text-xl lg:text-2xl text-text-100 font-medium mb-4">Profile</h2>
      <div className="grid lg:grid-cols-3 gap-y-4 lg:gap-y-6 items-center w-full lg:max-w-[80%] ">
        <h3 className="text-text-400 text-sm lg:text-base">Photo Profile</h3>
        <div className="col-span-2 flex items-center gap-4">
          <div className="p-6 w-fit bg-dark-100 text-4xl rounded-full">
            <FaUser/>
          </div>
        </div>

        <h3 className="text-text-400 text-sm lg:text-base">First Name</h3>
        <input type="text"
               className="w-full lg:w-[70%]  col-span-2 px-4 p-3  bg-transparent border border-border/20 rounded-lg focus:outline-none"
               value={"Mahendra"}
               required/>

        <h3 className="text-text-400 text-sm lg:text-base">Last Name</h3>
        <input type="text"
               className="w-full lg:w-[70%]  col-span-2 px-4 p-3  bg-transparent border border-border/20 rounded-lg focus:outline-none"
                value={"Arya"}
        />
      </div>
    </div>
  )
}