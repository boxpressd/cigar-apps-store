import React from "react";
import { isIOS } from "mobile-device-detect";

const Header = () => {
  return (
    <header id="header">
      <div id="sticky-header">
        <div>
          <span style={{ float: 'left', margin: isIOS ? '10px 16px' : '14px 16px' }}>Apps Store</span>
          <button
            style={isIOS ? {
              float: 'right',
              border: 'none',
              backgroundColor: '#0070c9',
              color: 'white',
              padding: '2px 24px',
              borderRadius: 14,
              fontWeight: 700,
              height: 28,
              margin: '10px 16px',
            } : {
              float: 'right',
              backgroundColor: '#01875f',
              color: '#fff',
              fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
              fontWeight: 700,
              height: 36,
              padding: '8px 16px',
              border: 'none',
              borderRadius: '8px',
              margin: '10px 16px',
            }}
          >
            {'Submit App'}
          </button>
          <div className="clearfix" />
        </div>
      </div>
    </header>
  );
};

export default Header;
