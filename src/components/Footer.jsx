import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from 'mobile-device-detect';

const Footer = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-bottom">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={!isMobile ? { flex: 1 } : {}}>
                <p>Copyright &copy; {new Date().getFullYear()} Boxpressd Ltd. All Rights Reserved.</p>
              </div>
              <div style={!isMobile ? { flex: 1 } : {}}>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="#" onClick={() => window.open('https://boxpressd.com/legal/terms', '_blank')}>Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={() => window.open('https://boxpressd.com/legal/privacy', '_blank')}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={() => window.open('#', '_blank')}>Submit App</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
