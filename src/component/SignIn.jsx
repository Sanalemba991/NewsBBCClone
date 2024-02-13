import React from 'react';
import font from "../images/font.png";
import stop from "../images/stop.png";
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/setup'; // Ensure correct import path
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      // Use signInWithPopup with the imported auth and googleProvider
      await signInWithPopup(auth, googleProvider);
      
      // Check the authentication status here if needed
      // For example: if (auth.currentUser) { navigate("/"); }

      auth.currentUser && navigate("/"); // Redirect to home regardless of authentication status
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="grid grid-cols-2 bg-white h-screen">  
      <div className="text-center">
        <img src={font} className="ml-56 mt-8"  />
        <h1 className="text-black text-2xl font-semibold mt-7 ">Sign in</h1>
        <button onClick={googleSignIn} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-9 w-96 mt-7">
          Sign in
        </button>

        <h4 className='text-blue-700 underline mt-7'>Sign in Now</h4>
      </div>
      <div className="flex justify-end">
        <img src={stop} className="h-89 border"/>
      </div>
    </div>
  );
}

export default SignIn;
