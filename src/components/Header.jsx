import React from "react";
import { useNavigate } from "react-router-dom";
import { isIOS } from "mobile-device-detect";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header id="header">
      <div id="sticky-header">
        <div>
          <span
            style={{ float: 'left', margin: isIOS ? '10px 16px' : '14px 16px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <img src="/logo.png" alt="Cigar App Store" style={{ height: isIOS ? 22 : 30 }} />
          </span>
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
              cursor: 'pointer',
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
              cursor: 'pointer',
            }}
            onClick={() => {
              navigate('/submit');
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
