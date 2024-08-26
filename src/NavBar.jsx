import React from 'react'
import { Link , useLocation} from 'react-router-dom'

function NavBar() {

    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';
  
    
  return (
    <div>
           <nav className="navbar navbar-expand-lg">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link  className={isActive('/')} aria-current="page" to="/">All</Link>
        </li>
        <li className="nav-item">
          <Link className={isActive('/full-stack-development')}  to="/full-stack-development">Full Stack Development</Link>
        </li>
        <li className="nav-item">
          <Link className={isActive('/data-science')}  to="/data-science">Data Science</Link>
        </li>
        <li className="nav-item">
          <Link className={isActive('/cyber-security')}  to="/cyber-security">Cyber Security</Link>
        </li>
        <li className="nav-item">
          <Link className={isActive('/career')}  to="/career">Career</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
