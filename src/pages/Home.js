import React, {useEffect, useState} from 'react';
import { isMobileOnly, isMobile, isIOS } from'mobile-device-detect';
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Tooltip } from 'react-tooltip';
import Header from "../components/Header";
import Footer from "../components/Footer";

import 'react-spring-bottom-sheet/dist/style.css'
import {useNavigate} from "react-router-dom";

// TODO Pull these from Firebase or something - as of right now, it's perfectly fine as is
const apps = [{
  name: 'Boxpressd',
  link: 'https://bxpr.sd/install',
  icon: 'https://app.boxpressd.com/apple-touch-icon-180x180.png',
  verified: true,
}, {
  name: 'Cigar Dojo',
  link: 'https://dojoverse.com',
  icon: 'https://dojoverse.com//wp-content//uploads//2020//06//Dojo-icon-2020-192x192-2.png',
  verified: false,
}, {
  name: 'Cigar Register',
  link: 'https://www.cigar-register.com',
  icon: 'https://www.cigar-register.com/android-chrome-192x192.png',
  verified: false,
}, {
  name: 'Cigar Scanner',
  link: 'https://www.cigarscanner.com',
  icon: 'https://www.cigarscanner.com/assets/icons/icon-192x192.png',
  verified: false,
}, {
  name: 'Cigar World',
  link: 'https://www.cigarworld.com/',
  icon: 'https://www.cigarworld.com/maskable_icon_x192.png',
  verified: false,
}, {
  name: 'Cigaro',
  link: 'https://cigaro.net/pwa/',
  icon: 'https://cigar-app.com/icon.png',
  verified: false,
}, {
  name: 'Cigar Social',
  link: 'https://app.cigarsocial.com/',
  icon: 'https://app.cigarsocial.com/assets/img/logos_pwa/LOGO-01_192px.png',
  verified: false,
// }, {
//   name: 'Cigar Public',
//   link: 'https://social.cigarpublic.com',
//   icon: 'https://cigarpublic.com/wp-content/uploads/2022/05/cp-yellow-avatar.png',
//   verified: false,
}, {
  name: 'Light \'em Up GO',
  link: 'https://app.lightemupgo.com',
  icon: 'https://app.lightemupgo.com/icons/Icon-192.png',
  verified: false,
}]

const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const height = isMobileOnly ? '50vw' : 180;
  const width = isMobileOnly ? '50vw' : 180;
  useEffect(() => {
    if (isMobile && !isInStandaloneMode) {
      setOpen(true);
    }
  }, []);
  return (
    <div style={!isMobileOnly ? { display: 'flex', flexDirection: 'column', height: '100vh' } : {}}>
      <Header />
      <h1 style={{ fontSize: '18px', margin: 20 }}>Top Cigar Apps</h1>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {apps.sort((a, b) => a.name.localeCompare(b.name)).map(app => (
            <a
              key={app.name}
              href={!open ? app.link : '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: 'center', maxHeight: height + 20, maxWidth: width }}
              onClick={(e) => {
                if (window.analytics) {
                  e.preventDefault();
                  window.analytics.track("App Clicks", { app: app.name, url: e.currentTarget.href });
                  window.open(e.currentTarget.href, '_blank', 'noopener noreferrer');
                }
              }}
            >
              <div style={{ margin: 12 }}>
                <img src={app.icon} alt={app.name} style={{ maxHeight: height - 24, maxWidth: width - 24, borderRadius: isMobileOnly ? 'calc(100vw / 10)' : 34, backgroundColor: '#24262a' }} />
                <div>
                  {app.name}
                  {app.verified && (
                    <span
                      className="badge badge-success"
                      data-tooltip-id="verified-tooltip"
                      data-tooltip-html="<span style='font-weight: 700'>Verified</span>&nbsp;<a target='_blank' rel='noopener noreferrer' href='https://boxpressd.freshdesk.com/support/solutions/articles/150000089694-verified-badge-for-cigar-app-on-our-cigar-apps-store'>Learn More</a>"
                      style={{ backgroundColor: isIOS ? '#0070c9' : '#01875f', color: '#ffffff' }}
                    >
                      {'✔'}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
        <Tooltip id="verified-tooltip" clickable />
      </div>
      <Footer />
      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <div style={{ padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #dfdfdf', paddingBottom: 10 }}>
            <img src="/apple-touch-icon-180.png" style={{ width: 20, height: 20, borderRadius: 10, marginRight: 10 }} />
            <span style={{ flex: 1, color: '#2b2b2b' }}>Cigar Apps Store</span>
            <button
              type="submit"
              style={isIOS ? {
                border: 'none',
                backgroundColor: '#0070c9',
                color: 'white',
                padding: '2px 24px',
                borderRadius: 14,
                fontWeight: 700,
                height: 28,
                cursor: 'pointer',
              } : {
                backgroundColor: '#01875f',
                color: '#fff',
                fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
                fontWeight: 700,
                height: 36,
                padding: '8px 16px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/install')}
            >
              {'Install'}
            </button>
          </div>
          <p>Install Cigar Apps Store to your phone to always have quick access to the latest cigar apps on the market.</p>
        </div>
      </BottomSheet>
    </div>
  )
}

export default Home;
