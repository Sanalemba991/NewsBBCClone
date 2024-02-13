import React from 'react';
import mani from "../images/mani.png";
import user from "../images/user.png";
import search from "../images/search.png";
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/setup';


function Navbar(props) {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='grid grid-cols-3 bg-black    fixed '>
      <div className='flex'>
        <img src={mani} className="h-16" />
        {auth.currentUser ? (
          <button onClick={logout} className="bg-black flex hover:border border-blue-500 p-4">
            <div className="text-white p-2">LogOut</div>
          </button>
        ) : (
          <Link to="/signin">
            <button className="bg-black flex hover:border border-blue-500 p-4">
              <img src={user} className='h-10' />
              <div className="text-white p-2">Sign in</div>
            </button>
          </Link>
        )}
      </div>
      <div className='flex '>
        <button onClick={()=>props.setMenu("All")}>
          <div className="text-white p-2 ml-20 font-semibold">Home</div>
        </button>
        <button onClick={()=>props.setMenu("Science")}>
          <div className="text-white p-2 ml-20 font-semibold">Science</div>
        </button>
        <button onClick={()=>props.setMenu("Movies")}>
          <div className="text-white p-2 ml-20 font-semibold">Movies</div>
        </button>
      </div>
      <div className='flex p-6 ml-2'>
      <img src={search} className='h-6' />
      <input
  onChange={(e) => props.setSearch(e.target.value)}
  className="ml-60 flex"
  placeholder="Search"
  value={props.searchValue} // Add this line to set a default value
/>

      </div>
    </div>
  );
}

export default Navbar;
