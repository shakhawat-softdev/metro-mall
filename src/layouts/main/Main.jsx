import { Outlet } from "react-router-dom";
import '../../index.css'
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";




const Main = () => {
   return (
      <>
         <Navbar />
         <div className="customizeContainer">
            <Outlet />
         </div>
         <Footer />
      </>
   );
};

export default Main;