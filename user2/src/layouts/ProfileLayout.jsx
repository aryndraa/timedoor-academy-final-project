import {Sidebar} from "../components/profile/Sidebar.jsx";

export const ProfileLayout = ({children}) => {
  return (
    <div className="mx-20 mt-12">
      <Sidebar />
      {children}
    </div>
  )
}