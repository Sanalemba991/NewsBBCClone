import SignIn from "./component/SignIn";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import NewsDetails from "./component/NewsDetails";

export default function App() {
  return (
    
      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/" element={<Main />}></Route>
         <Route path ="/details" element={<NewsDetails/>}></Route>
      </Routes>
   
  );
}
