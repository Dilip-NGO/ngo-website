import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger and close icons

const Header = ({ isAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Title */}
        <div className="flex items-center gap-x-2">
          <Link to="/">
            <img src={logo} alt="Saraswati Vidya Foundation Logo" className="h-12 w-auto object-contain" />
          </Link>
          <div className="font-bold text-gray-800">Saraswati Vidya Foundation</div>
        </div>

        {/* Hamburger Icon on small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-gray-800 focus:outline-none">
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Horizontal Menu for md+ */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="font-bold">Home</Link>
          <Link to="/test" className="font-bold">Tests</Link>
          <Link to="/about" className="font-bold">About</Link>
          <Link to="/achievements" className="font-bold">Achievements</Link>
          {isAuth ? (
            <Link to="/account" className="font-bold">Account</Link>
          ) : (
            <Link to="/login" className="font-bold">Login</Link>
          )}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-bold">Home</Link>
            <Link to="/test" onClick={() => setIsMenuOpen(false)} className="font-bold">Tests</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="font-bold">About</Link>
            <Link to="/achievements" onClick={() => setIsMenuOpen(false)} className="font-bold">Achievements</Link>
            {isAuth ? (
              <Link to="/account" onClick={() => setIsMenuOpen(false)} className="font-bold">Account</Link>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="font-bold">Login</Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
