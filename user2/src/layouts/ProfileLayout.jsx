import {Sidebar} from "../components/profile/Sidebar.jsx";

export const ProfileLayout = ({children}) => {
  return (
    <div className="mx-20 mt-12 flex gap-6">
      <Sidebar />
      <div className="p-4 w-full">
        {children}
      </div>
    </div>
  )
}