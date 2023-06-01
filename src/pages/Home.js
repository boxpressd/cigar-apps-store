import React from'react';
import { isMobileOnly, isIOS } from'mobile-device-detect';
import Header from "../components/Header";
import Footer from "../components/Footer";

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
}]

const Home = () => {
  const height = isMobileOnly ? '50vw' : 180;
  const width = isMobileOnly ? '50vw' : 180;
  return (
    <div style={!isMobileOnly ? { display: 'flex', flexDirection: 'column', height: '100vh' } : {}}>
      <Header />
      <h1 style={{ fontSize: '18px', margin: 20 }}>Top Cigar Apps</h1>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {apps.map(app => (
            <a href={app.link} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', maxHeight: height + 20, maxWidth: width }} key={app.name}>
              <div style={{ margin: 12 }}>
                <img src={app.icon} alt={app.name} style={{ maxHeight: height - 24, maxWidth: width - 24, borderRadius: isMobileOnly ? 'calc(100vw / 10)' : 34 }} />
                <div>
                  {app.name}
                  {/* TODO Popover explaining what verified means */}
                  {app.verified && (
                    <span className="badge badge-success" style={{ backgroundColor: isIOS ? '#0070c9' : '#01875f' }}>✔</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
