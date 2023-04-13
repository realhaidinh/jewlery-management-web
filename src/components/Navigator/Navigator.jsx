import { Link } from "react-router-dom"
import './navigator.css';

const Navigator = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/sell">Bán</Link>
        </li>
        <li className="nav-item">
          <Link to="/buy">Mua</Link>
        </li>
        <li className="nav-item">
          <Link to="/service">Dịch vụ</Link>
        </li>
        <li className="nav-item">
          <Link to="/stock">Báo cáo kho</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigator