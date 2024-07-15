import AnchorLink from "react-anchor-link-smooth-scroll"

type NavItemProps = {
    page: string
    selectedPage: string
    setSelectedPage: (value: string) => void

}

const NavItem = ({page, selectedPage, setSelectedPage}: NavItemProps) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300 `} href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >{page}</AnchorLink>
  )
}

export default NavItem