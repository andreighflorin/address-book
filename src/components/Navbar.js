import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/list">List</Link>
        </li>
        <li className="nav-item">
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  )
}