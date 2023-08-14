import AnchorLink from "react-anchor-link-smooth-scroll"
import { Selectedpage } from "./types";
Selectedpage
type Props = {
    children:React.ReactNode;
    setselectedpage : (value : Selectedpage)=> void;

}
const Actionbutton =({children , setselectedpage}: Props) => {
  return (
<AnchorLink 
className="rounded-md bg-blue-400 px-5 py-2 hover:bg-blue-300 hover:text white"
onClick={()=> setselectedpage(Selectedpage.ContactUs)}
href ={`${Selectedpage.ContactUs}`}>
    {children}
</AnchorLink>
  )
}
export default Actionbutton ;