import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth');
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              SkillDev
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/learn" currentPath={location.pathname}>Learn</NavLink>
            <NavLink to="/challenges" currentPath={location.pathname}>Challenges</NavLink>
            <NavLink to="/leaderboard" currentPath={location.pathname}>Leaderboard</NavLink>
            <NavLink to="/hackathons" currentPath={location.pathname}>Hackathons</NavLink>
            
            {user ? (
              <>
                <NavLink to="/profile" currentPath={location.pathname}>Profile</NavLink>
                <button onClick={handleLogout} className="text-gray-700 hover:text-indigo-600">
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/auth" currentPath={location.pathname}>Login</NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 text-gray-400 hover:text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3">
          <div className="px-2 pt-2 space-y-1">
            <MobileNavLink to="/learn" currentPath={location.pathname} onClick={closeMenu}>
              Learn
            </MobileNavLink>
            <MobileNavLink to="/challenges" currentPath={location.pathname} onClick={closeMenu}>
              Challenges
            </MobileNavLink>
            <MobileNavLink to="/leaderboard" currentPath={location.pathname} onClick={closeMenu}>
              Leaderboard
            </MobileNavLink>
            <MobileNavLink to="/hackathons" currentPath={location.pathname} onClick={closeMenu}>
              Hackathons
            </MobileNavLink>
            
            {user ? (
              <>
                <MobileNavLink to="/profile" currentPath={location.pathname} onClick={closeMenu}>
                  Profile
                </MobileNavLink>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <MobileNavLink to="/auth" currentPath={location.pathname} onClick={closeMenu}>
                Login
              </MobileNavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

// Helper components
const NavLink = ({ to, currentPath, children }) => (
  <Link
    to={to}
    className={`text-gray-700 hover:text-indigo-600 ${currentPath === to ? 'font-bold' : ''}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, currentPath, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 ${currentPath === to ? 'font-bold text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
  >
    {children}
  </Link>
);

export default Navbar;