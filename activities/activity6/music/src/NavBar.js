import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (

    <nav className='navbar navbar-expand-lg navbar-light bg-light'>

      <span className='navbar-brand'>My Music</span>

      <div className='navbar-nav'>

        <span className='nav-item nav-link'>
          <Link to='/'>Main</Link>
        </span>

        <span className='nav-item nav-link'>
          <Link to='/new'>New</Link>
        </span>

      </div>

    </nav>

  );

};

export default NavBar;