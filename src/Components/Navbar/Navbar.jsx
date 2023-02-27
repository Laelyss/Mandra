import React from 'react';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/Bs';
import { AiOutlineGlobal } from 'react-icons/Ai';
import { CgMenuGridO } from 'react-icons/Cg';

// ajout du logo avec le bon chemin une fois créer
// import logo from '../../assets/logo.png';


function Navbar(){
  return(
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div><SiConsul /></div> 
        <div className='none flex'>
          <li className='flex'> <BsPhoneVibrate className='icon'/> Support</li>
          <li className='flex'> <AiOutlineGlobal className='icon'/> Languages</li>
        </div>
        <div className="atb flex">
          <span>Sing In</span>
          <span>Sign Out</span>
        </div>

        <div className="navBarMenu">
          <ul className="menu flex">
            <li className='listItem'>Home</li>
            <li className='listItem'>Home</li>
            <li className='listItem'>Home</li>
            <li className='listItem'>Home</li>
            <li className='listItem'>test</li>
          </ul>
         
          <button className='btn flex btnOne'>Contact</button>
          <button className='btn flex btnTwo'>Contact</button> 

          {/* LOGO */}
          {/* <div className="logoDiv">
            <img src={logo} className='Logo />
          </div> */}
             
          <div className="toggleIcon"><CgMenuGridO /></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

