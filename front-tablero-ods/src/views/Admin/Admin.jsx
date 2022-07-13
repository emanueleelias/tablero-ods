import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./admin.scss";

const Admin = () => {
  return (
    <>
      <div className="wrapper">
         <Sidebar />
    
       </div>


      <Footer />

    </>
  )
}

export default Admin;