import {Sidebar} from "../components/profile/Sidebar.jsx";

export const ProfileLayout = ({children}) => {
  return (
    <div className="mx-3 lg:mx-20 mt-6 lg:mt-12 flex flex-col lg:flex-row gap-6 ">
      <Sidebar />
      <div className="p-4 w-full">
        {children}
      </div>
    </div>
  )
}