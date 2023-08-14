import Navbar from "@/scenes/Navbar";
import {useEffect, useState} from "react";
import { Selectedpage } from "./shared/types";
import Home from "@/scenes/Home";

function App() {
const [selectedpage , setselectedpage]= useState<Selectedpage>
(Selectedpage.Home);
const [istopofpage , setistopofpage] =useState<boolean>(true);
    useEffect(() => {
      const handleScroll =() => {
        if (window.scrollY === 0)
          {setistopofpage(true);
            setselectedpage(Selectedpage.Home);
      }
      if (window.scrollY !== 0) setistopofpage(false);
      }
      window.addEventListener("scroll",handleScroll);
      return () => window.removeEventListener("scroll",handleScroll);
    },[]);
    return (

      <div className='app bg-gray-20'>
      <Navbar 
      istopodpage={istopofpage}
       selectedpage={selectedpage}
       setselectedpage={setselectedpage}/>
       <br></br>
<br></br>     <Home  
                 />
    </div>
  )
}

export default App;
