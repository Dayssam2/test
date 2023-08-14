import { useState } from "react";
import logo from "@/assets/img.png";
import Link from "./link";
import { Selectedpage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Actionbutton from "@/shared/Actionbutton";

type Props = {
  istopodpage: boolean;
    selectedpage:Selectedpage;
    setselectedpage:(value :Selectedpage)=> void;
};
const Navbar = (   {
  istopodpage,
    selectedpage,
    setselectedpage}: Props) => {
    const flexBetween ="flex items-center justify-between";
    const isAboveMeduimScreens=useMediaQuery ("(min-width:1060px");
    const [isMenuToggled,setIsMenuToggled] =useState <boolean>(false);
    const navbarBackground=istopodpage ? "" :"bg-primary-100 drop-shadow";
    return (
  <nav>
      <div
      className={`${navbarBackground}${flexBetween} fixed top-0 z-30 w-full py-6 `}>
          <div className={`${flexBetween}  mx-auto w-5/9`}>
              <div className={`${flexBetween}  w-full gap-16 `}>
                 <img alt="logo" src={logo}/>
                 { isAboveMeduimScreens ? (
                  <div    className={`${flexBetween} w-full  `}>
                      <div    className={`${flexBetween} gap-8  text-xl`}>
                          <Link page="Home" 
                          selectedpage={selectedpage}
                         setselectedpage={setselectedpage}/>
                          <Link  page="Espace Client"
                           selectedpage={selectedpage}
                           setselectedpage={setselectedpage}
                           /> 
                          <Link  page="Espace Medecin"
                           selectedpage={selectedpage}
                           setselectedpage={setselectedpage}
                          />  
                          <Link  page="Contact Us"
                           selectedpage={selectedpage}
                           setselectedpage={setselectedpage}
                          /> 
                         <Actionbutton setselectedpage={setselectedpage}>Sign up </Actionbutton>

                        <Actionbutton setselectedpage={setselectedpage}>Become a Member</Actionbutton>


                      </div>
                      </div>
                    )
                                        : (
                                            <button
                                            className="rounded-full bg-blue-400 p-2"
                                            onClick ={()=>setIsMenuToggled(!isMenuToggled)}>
                                                <Bars3Icon className="h-6 w-6 text-white /"></Bars3Icon>
                                            </button>
                                        )
                                }
                      </div>
                      </div>
                   </div> 
                 {/*Mobile menu modal*/}
                   {!isAboveMeduimScreens && isMenuToggled &&(
                  <div 
                     className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-20  drop-shadow-xl">
                       {/*CLOSE ICON*/}
<div className=" flex justify-end p-12">
                         <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                       <XMarkIcon className="h-6 w-6 text-gray-400"/>
                         </button>
                         </div>
                         {/*Menu items*/}
                           <div className="  text-2xl">

                           <div className={`${flexBetween}  flex-col gap-10 `}>
                           <Link page="Home" 
                           selectedpage={selectedpage}
                          setselectedpage={setselectedpage}/>
                            <Link  page="Espace Client"
                         selectedpage={selectedpage}
                                setselectedpage={setselectedpage} />              
                           <Link  page="Espace Medecin"
                               selectedpage={selectedpage}
                            setselectedpage={setselectedpage} />           
                         <Link  page="Contact Us"
                        selectedpage={selectedpage}
                          setselectedpage={setselectedpage} />  
                          </div>
                          </div>
                    </div>
      )}
  </nav>  )
  }
   export default Navbar ;