import { GuestLink } from "./GuestLink"
import { Logo } from "./Logo"

export const Header = () => {
  return (
    <header className="px-3 lg:px-20 py-4 flex justify-between items-center ">
        <Logo/>
        <GuestLink/>
    </header>
  )
}