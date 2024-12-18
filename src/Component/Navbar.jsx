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
          <a href="/" onClick={() => handleRedirect('/')}>Home</a>
          <a  href="/Aboutus" onClick ={() => handleRedirect('/Aboutus')}>About</a>
          <a href ="/Contact" onClick={() => handleRedirect('/contact')}>Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
