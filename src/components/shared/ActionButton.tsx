import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    setSelectedPage : (value: SelectedPage) => void
    children: React.ReactNode
}

function ActionButton({setSelectedPage, children}: Props) {
  return (
    <AnchorLink className="rounded-md bg-secondary-500 py-2 px-6 text-sm hover:bg-primary-500 transition duration-500" onClick={()=>setSelectedPage(SelectedPage.Contactus)} href={`#${SelectedPage.Contactus}`}>{children}</AnchorLink>
  )
}

export default ActionButton