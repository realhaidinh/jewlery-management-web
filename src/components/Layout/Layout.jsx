import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home";
import { Routes, Route } from 'react-router-dom'
import SellForm from "../../pages/SellForm";

const Layout = () => {

  return (
    <>

      {/* Form selector */}
      <Navigator />
      
      {/* This render component based on the path */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sell" Component={SellForm} />
      </Routes>

      <Footer />
    </>
  )
}

export default Layout