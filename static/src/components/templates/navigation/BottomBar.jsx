import {Navbar} from "./Navbar.jsx";

export const BottomBar = () => {
  return (
    <div className="fixed lg:hidden bottom-0 right-0 left-0 px-5 py-4 bg-dark-200  z-50">
      <Navbar/>
    </div>
  )
}