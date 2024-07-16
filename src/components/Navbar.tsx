import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "../assets/Logo.png"
import useMediaQuery from "../hooks/useMediaQuery"
import NavItem from "./NavItem"
import { SelectedPage } from "./shared/types"
import { useState } from "react"
import ActionButton from "./shared/ActionButton"

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void

}




const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const flexBetween = "flex items-center justify-between"
   const  isAboveMediumScreens = useMediaQuery('( min-width: 1060px )');
  return (
    <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
    <div className={`${flexBetween} mx-auto w-5/6 gap-16` }>
    <img src={Logo} alt="logo" />
{isAboveMediumScreens ? (
        <div className={`${flexBetween} w-full`}>
    <div className={`${flexBetween} gap-8 text-sm`}>

    <NavItem page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <NavItem page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <NavItem page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <NavItem page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  
    </div>
    <div className={`${flexBetween} gap-8`}>
    <p>Sign In</p>
    <ActionButton setSelectedPage={setSelectedPage}  >Become a Member</ActionButton>
</div>

  
</div>
) : (
    <button className="rounded-full bg-secondary-500 p-2" onClick={()=> setIsMenuToggled(!isMenuToggled)} >
        <Bars3Icon className="h-6 w-6 text-white" />
    </button>

)}

</div>

    </nav>
  )
}
export default Navbar;