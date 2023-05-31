import React from'react';
import { isMobileOnly } from'mobile-device-detect';
import Header from "../components/Header";
import Footer from "../components/Footer";

const apps = [{
  name: 'Boxpressd',
  link: 'https://bxpr.sd/install',
  icon: 'https://app.boxpressd.com/apple-touch-icon-512x512.png',
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
  return (
    <div style={!isMobileOnly ? { display: 'flex', flexDirection: 'column', height: '100vh' } : {}}>
      <Header />
      <h1 style={{ fontSize: '18px', margin: 20 }}>Top Cigar Apps</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
        {apps.map(app => (
          <a href={app.link} target="_blank" rel="noopener noreferrer" style={{ margin: 12, textAlign: 'center', maxHeight: 216, maxWidth: 216 }} key={app.name}>
            <img src={app.icon} alt={app.name} style={{ maxHeight: 180, maxWidth: 180, borderRadius: 40 }} />
            <div>{app.name}</div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home;
