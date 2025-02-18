import { GuestLink } from "./GuestLink"
import { Logo } from "./Logo"
import { Navigation } from "./Navigation"

export const Header = () => {
  return (
    <header className=" flex flex-col ">
      <div className="flex justify-between items-center py-4 px-3 lg:px-20">
        <Logo/>
        <GuestLink/>
      </div>
      <Navigation/>
    </header>
  )
}