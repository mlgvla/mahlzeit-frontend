import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.css'

const MainHeader = () => {
    return (
     
           <header>
<nav className="navbar navbar-expand-md navbar-dark bg-sage" aria-label="Fourth navbar example">
    <div className="container-fluid">

        {/* CHANGE TO NAVLINK */}
      {/* <a className="navbar-brand" href="/">Mahlzeit</a> */}
      <NavLink className="navbar-brand" activeClassName="active" exact to="/">Mahlzeit</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center"  id="navbarsExample04">
        <ul className="navbar-nav mb-2 mb-md-0">
          <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink> 
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/search">Find Recipes</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to='/myrecipes'>MyRecipes</NavLink>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown04">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
        </ul>
        
      </div>
    </div>
  </nav>

           </header>
       
    )
}

export default MainHeader;

/* <br />
        <nav>
       
            <Link to="/">Home</Link> 
                &nbsp;&nbsp;&nbsp;
            <Link to="/search">Find Recipes</Link>
                &nbsp;&nbsp;&nbsp;
            <Link to='/myrecipes'>MyRecipes</Link>
        </nav>
        <br />
        <hr /> */
             /* can change to NavLink if necessary - will be using Bootstrap Navbar and will use those classes */
