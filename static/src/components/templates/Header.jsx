import { GuestLink } from "./navigation/GuestLink.jsx"
import { Logo } from "./Logo"
import { Navbar } from "./navigation/Navbar"

export const Header = () => {
  return (
    <header className=" flex flex-col lg:bg-dark-200">
      <div className="flex justify-between items-center py-4 px-3 lg:px-20 ">
        <div className="flex items-center gap-12">
          <Logo/>
          <div className="hidden lg:flex">
            <Navbar/>
          </div>
        </div>
        <GuestLink/>
      </div>
    </header>
  )
}