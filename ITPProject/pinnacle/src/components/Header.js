import React from 'react';
import './styles/header.css';
import Pinnaclelogo from '../assets/header/pinnaclelogo.png';
import { Link } from 'react-router-dom';
import Rounded_corner_btn from './Rounded_corner_btn';
import { useState } from 'react';

export default function Header(props) {
  const activeNavItem = props.navid;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
    <div className='header'>
      
      <div className="navlogo">
        <img src={Pinnaclelogo} className="pinnaclelogo" alt="logo"/>
        <Link to="/" style={{ textDecoration: 'none' }}><span>PINNACLE</span></Link>
      </div>

      <div className="navigation">
        <Link to="/stream" style={{ textDecoration: 'none' }}><span className={activeNavItem === "streams" ? "active" : ""}>STREAMS</span></Link>
        <Link to="/game" style={{ textDecoration: 'none' }}><span className={activeNavItem === "games" ? "active" : ""}>GAMES</span></Link>
        <Link to="/community" style={{ textDecoration: 'none' }}><span className={activeNavItem === "community" ? "active" : ""}>COMMUNITY</span></Link>
        <Link to="/support" style={{ textDecoration: 'none' }}><span className={activeNavItem === "support" ? "active" : ""}>SUPPORT</span></Link>
        {activeNavItem !== "home" && <div className='nav_under_bar' style={{ marginLeft: `${["streams", "games", "community", "support"].indexOf(activeNavItem) * 25}%` }}></div>}
      </div>

      <div className='navicon'>
        <Link to="/leaderboard"><img src="https://img.icons8.com/glyph-neue/64/FD7E14/trophy.png" alt="trophy"/></Link>
        <Link to="/cart"><img src="https://img.icons8.com/pastel-glyph/64/FD7E14/shopping-cart--v1.png" alt="shopping-cart--v1"/></Link>
        <Link to="/premiumplanes"><Rounded_corner_btn value='Go Premium'/></Link>
        <Link to="/account" style={{ textDecoration: 'none' }}>
          <div className='user_profile'>
            <div className='user_dtails'>
              <span className='user_name'>New User</span><br/>
              <span className='user_settings'>Settings</span>
            </div>
            <img src="https://img.icons8.com/ios-filled/50/FD7E14/user-male-circle.png" alt="user-male-circle"/>
          </div>
        </Link>
      </div>
    
      </div>
        <label htmlFor='navcheck'><img className='menubtn' src="https://img.icons8.com/glyph-neue/64/FD7E14/menu--v1.png" alt="menu--v1"/></label>
      <input
        type='checkbox'
        id='navcheck'
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      
      {isChecked && (<div className='mobile_navbar'>
      <ul className='navigationlist'>
        <li><Link to="/stream" style={{ textDecoration: 'none' }}><span>STREAMS</span></Link></li>
        <li><Link to="/game" style={{ textDecoration: 'none' }}><span>GAMES</span></Link></li>
        <li><Link to="/community" style={{ textDecoration: 'none' }}><span>COMMUNITY</span></Link></li>
        <li><Link to="/support" style={{ textDecoration: 'none' }}><span>SUPPORT</span></Link></li>
        <li><Link to="/leaderboard" style={{ textDecoration: 'none' }}><span>LEADERBOARD</span></Link></li>
        <li><Link to="/cart" style={{ textDecoration: 'none' }}><span>CART</span></Link></li>
        <li><Link to="/premiumplanes" style={{ textDecoration: 'none' }}><Rounded_corner_btn value='Go Premium'/></Link></li>
        <li><Link to="/account" style={{ textDecoration: 'none' }}><span>ACCOUNT</span></Link></li>
      </ul>
      </div>)}

    </div>
  );
}

