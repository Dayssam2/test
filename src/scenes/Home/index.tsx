//import { Selectedpage } from "@/shared/types";
import image from "@/assets/pr.jpg";

const Home = () => {
  return (
    <section id="Home" className="gap-16 bg-gray-20 py-20 ">
      
      
       <div
      className="flex justify-end  
       md:justify-items-end py-20 " 
    >
         <img alt="home" width="800"  src={image}  /> 

         <div className="py-10 text-center text-xl  text-blue-700 justify-start     ">
          <br></br>
          <br></br>
          <br></br>

      <h1 > <b> <em> People pay the doctor for his trouble , for his kindness , 
    they still remain in his debt </em> </b>
  </h1>
  </div>
  
  </div>
    </section>
  
  
  );
};

export default Home;