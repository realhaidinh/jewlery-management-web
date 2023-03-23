import { Link } from "react-router-dom"


const Navigator = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sell">Sell</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigator