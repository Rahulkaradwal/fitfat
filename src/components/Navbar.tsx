// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "../assets/Logo.png"
import NavItem from "./NavItem"
import { SelectedPage } from "./shared/types"

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void

}


const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
  return (
    <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
    <div className={`${flexBetween} mx-auto w-5/6 gap-16` }>
    <img src={Logo} alt="logo" />
    <div className={`${flexBetween} w-full`}>
    <div className={`${flexBetween} gap-8 text-sm`}>

    <NavItem page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <NavItem page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <NavItem page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <NavItem page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  
    </div>
    <div className={`${flexBetween} gap-8`}>
    <p>Sign In</p>
    <button>Become a Member</button>
</div>

  
</div>

</div>

    </nav>
  )
}
export default Navbar;