import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return <header>
        <br />
        <nav>
            {/* can change to NavLink if necessary - will be using Bootstrap Navbar and will use those classes */}
            <Link to="/">Home</Link> 
                &nbsp;&nbsp;&nbsp;
            <Link to="/search">Find Recipes</Link>
        </nav>
        <br />
        <hr />
    </header>
}

export default MainHeader;
