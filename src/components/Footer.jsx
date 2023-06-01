import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from 'mobile-device-detect';

const Footer = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-top">
            <div style={{maxWidth: 800, margin: 'auto'}}>
              <div className="alert alert-dark">
                Due to restrictions imposed by major app stores, cigar apps face challenges when it comes to getting published on these platforms. Recognizing the unique needs of cigar enthusiasts, we have taken the initiative to create our own platform dedicated exclusively to cigar apps. Our platform offers a solution for developers and users alike, providing a centralized hub where cigar-related apps can be discovered, accessed, and enjoyed. By circumventing the limitations imposed by traditional app stores, we have created an inclusive space where cigar enthusiasts can find and explore a diverse range of cigar apps, tailored to their specific interests and preferences. With our platform, we aim to provide a seamless and convenient experience for both developers and users, ensuring that cigar apps have a dedicated space to thrive and flourish.
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', textAlign: isMobile ? 'center' : '' }}>
              <div style={!isMobile ? { flex: 1 } : {}}>
                <p>Made by the team at <a href="https://app.boxpressd.com">Boxpressd</a>.{isMobile && <br/>} All Rights Reserved.</p>
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
                      <Link to="/submit">Submit App</Link>
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
