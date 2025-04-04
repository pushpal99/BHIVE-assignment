import React from 'react';
import Logo from '../../data/static_assets/logo.svg';
import Call from '../../data/static_assets/call.svg';
import './navbar.scss'

export function Navbar() {
  // The `state` arg is correctly typed as `RootState` already

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <img src={Logo} alt="logo"/>
      </div>
      <div className='call-container'>
        <img src={Call} alt="logo"/>
      </div>
    </div>
  )
}

