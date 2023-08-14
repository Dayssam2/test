import { Selectedpage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string;
    selectedpage:Selectedpage;
    setselectedpage:(value :Selectedpage)=> void;
}

const link = ({
    page,
    selectedpage,
    setselectedpage,
}:Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g,"") as Selectedpage
  return (
   <AnchorLink
    className={`${selectedpage === lowerCasePage ? "text-gray-20" :"" }
    transition duration-500 hover:text-blue-300`}
    href={`#${lowerCasePage}`}
    onClick={() => setselectedpage(lowerCasePage)}
    >
{page}
    </AnchorLink>
  )
}
export default link;  