import React, { useState } from 'react';
import Navbar from './Navbar';
import Ram from "./Ram"

import Home from './Home';
function Main() {
  const [menu,setMenu]=useState("")
  const [search,setSearch]=useState("")
  return (
    <div className='grid grid-rows-3'>
    <Navbar setMenu={setMenu} setSearch={setSearch}/>
    <div className='ml-10 mt-20 mr-10'>
    
    <Home menu={menu} search={search} />
    </div>
    </div>
  );
}

export default Main;

