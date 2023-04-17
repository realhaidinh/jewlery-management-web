import Footer from "../Footer/Footer";
import Navigator from "../Navigator/Navigator";
import Router from "../Router/Router";
import './layout.css'

const Layout = () => {
  return (
    <>
      {/* Form selector */}
      <section>
        <Navigator />
        {/* This render component based on the path */}
        <div className="main-section">
          <Router />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Layout