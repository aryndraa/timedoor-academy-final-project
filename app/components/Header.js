import { GuestLink } from "./GuestLink"
import { Logo } from "./Logo"

export const Header = () => {
  return (
    <header className="px-4 py-5 flex justify-between items-center">
      <div className="flex items-center">
        <Logo/>
      </div>
        <GuestLink/>
    </header>
  )
}