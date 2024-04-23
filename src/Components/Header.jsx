import React from 'react';
import "./Styles/Header.css";

const Header = () => {
  return (

    <div id = "header">
        <div className="left">
        사이트명
        </div>
        <div className="right">
            <button>로그인</button>
        </div>
    </div>
    
  )
}

export default Header;
