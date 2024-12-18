import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // Redirect to a specified route
  const handleRedirect = (route) => {
    navigate(route);
  };

  return (
    <div>
      <header className="header">
        <a href='/' className='logo'>Logo</a>
        <nav className='navbar'>
          {/* Correctly passing route to the handleRedirect function */}
          <button onClick={() => handleRedirect('/')}>Home</button>
          <button onClick={() => handleRedirect('/Aboutus')}>About</button>
          <button onClick={() => handleRedirect('/contact')}>Contact</button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
