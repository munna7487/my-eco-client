import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Authcontex } from '../../Provider/Authprovider';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/green.jpg";

const Header = () => {
  const { user, logout } = useContext(Authcontex);
  // console.log(user?.photoURL || user?.reloadUserInfo?.photoUrl);
  console.log(user)
  const handleLogout = () => {
    logout()
      .then(() => toast.success('Logged out successfully!'))
      .catch((error) => {
        console.error('Logout error:', error);
        toast.error('Failed to logout');
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* Left: Logo + Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allmodels">Challenge</Link></li>
            <li><Link to="/add">My Activities</Link></li>
          </ul>
        </div>
        <div className='flex gap-0.5'>
          <Link to="/"><img className='h-10' src={logo} alt="Logo" /></Link>
          <p><Link to="/" className="btn btn-ghost text-xl font-bold text-primary">EcoTrack</Link></p>
        </div>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/allmodels" className="hover:text-primary">Challenge</Link></li>
          <li><Link to="/myactivities" className="hover:text-primary">My Activities</Link></li>
        </ul>
      </div>

      {/* Right: Auth Section */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost avatar flex items-center gap-2">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden bg-blue-500 flex justify-center items-center text-white text-lg font-bold">
                <img
                  src={user?.photoURL || user?.reloadUserInfo?.photoUrl || ""}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName || user?.email?.split('@')[0]}&background=007bff&color=fff`;
                  }}
                />
              </div>
              <span className="hidden md:block text-sm font-medium">
                {user.displayName || user.email?.split('@')[0]}
              </span>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge badge-sm">View</span>
                </Link>
              </li>
              <li><Link to="/my-activities">My Activities</Link></li>
              <li>
                <button onClick={handleLogout} className="text-error hover:bg-error hover:text-white">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-outline btn-primary btn-sm">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
