import React from "react";
import { isIOS } from "mobile-device-detect";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header id="header">
      <div id="sticky-header">
        <div>
          <Link
            href="/"
            style={{ float: 'left', margin: isIOS ? '10px 16px' : '14px 16px', cursor: 'pointer' }}
          >
            <Image src="https://appstore.boxpressd.com/logo.png" alt="Cigar App Store" height={isIOS ? 22 : 30} width={isIOS ? 131 : 179} />
          </Link>
          <Link
            href="/submit"
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
              lineHeight: '36px',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '8px',
              margin: '10px 16px',
              cursor: 'pointer',
            }}
          >
            {'Submit App'}
          </Link>
          <div className="clearfix" />
        </div>
      </div>
    </header>
  );
};

export default Header;
