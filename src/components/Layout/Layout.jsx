import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home";
import { Routes, Route } from 'react-router-dom'
import SellForm from "../../pages/SellForm";
import BuyForm from "../../pages/BuyForm";
import ServiceForm from "../../pages/ServiceForm";
import StockReport from "../../pages/StockReport";
import './layout.css'

const Layout = () => {

  return (
    <>
      {/* This has no header */}
      {/* Form selector */}
      <Navigator />
      {/* This render component based on the path */}
      <div className="main-section">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sell" Component={SellForm} />
          <Route path="/buy" Component={BuyForm} />
          <Route path="/service" Component={ServiceForm} />
          <Route path="/stock" Component={StockReport} />
        </Routes>
      </div>
    
      <Footer />
    </>
  )
}

export default Layout