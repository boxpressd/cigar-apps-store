import React, {useEffect, useState} from 'react';
import { isMobileOnly, isMobile, isIOS } from'mobile-device-detect';
import { Tooltip } from 'react-tooltip';
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const BottomSheet = dynamic(
  () => import('react-spring-bottom-sheet').then(mod => mod.BottomSheet),
  { ssr: false }
);

// TODO Pull these from Firebase or something - as of right now, it's perfectly fine as is
const apps = [{
  name: 'Boxpressd',
  link: 'https://bxpr.sd/install',
  icon: require('../assets/img/social-180.png'),
  verified: true,
  price: 0,
}, {
  name: 'Boxpressd Limitada',
  link: 'https://limitada.boxpressd.com/install',
  icon: require('../assets/img/aficionado-192.webp'),
  verified: true,
  price: 9.99,
}, {
  name: 'Boxpressd Shop',
  link: 'https://shop.boxpressd.com/install',
  icon: require('../assets/img/shop-180.png'),
  verified: true,
  price: 0,
}, {
  name: 'Cigars Amigos',
  link: 'https://cigarsamigos.com/',
  icon: 'https://cigarsamigos.b-cdn.net/_app_assets/icons-mono/icon_512x512.png',
  verified: false,
  price: 0,
}, {
  name: 'Cigar Dojo',
  link: 'https://dojoverse.com',
  icon: 'https://dojoverse.com/wp-content/uploads/2020/06/Dojo-icon-2020-192x192-2.png',
  verified: false,
  price: 0,
// }, {
//   name: 'Cigar Mancave',
//   link: 'https://cigarmancave.com/app/feeds',
//   icon: 'https://cigarmancave.com/icons/icon-512x512.png',
//   verified: false,
//   price: 0,
}, {
  name: 'Cigar Pilot',
  link: 'https://app.cigarpilot.com',
  icon: 'https://app.cigarpilot.com/assets/icons/icon-512x512.png',
  verified: false,
  price: 0,
}, {
  name: 'Cigar Register',
  link: 'https://www.cigar-register.com',
  icon: 'https://www.cigar-register.com/android-chrome-192x192.png',
  verified: false,
  price: 0,
}, {
  name: 'Cigar Scanner',
  link: 'https://www.cigarscanner.com',
  icon: 'https://www.cigarscanner.com/assets/icons/icon-192x192.png',
  verified: false,
  price: 0,
}, {
  name: 'Cigar World',
  link: 'https://www.cigarworld.com/',
  icon: 'https://www.cigarworld.com/maskable_icon_x192.png',
  verified: false,
  price: 0,
}, {
  name: 'Cigaro',
  link: 'https://cigaro.net/pwa/',
  icon: 'https://cigar-app.com/icon.png',
  verified: false,
  price: 0,
}, {
  name: 'Cigarro',
  link: 'https://app.cigarroapp.com',
  icon: 'https://app.cigarroapp.com/icon-512.png',
  verified: false,
  price: 0,
// }, {
//   name: 'Cigar Social',
//   link: 'https://app.cigarsocial.com/',
//   icon: 'https://app.cigarsocial.com/assets/img/logos_pwa/LOGO-01_192px.png',
//   verified: false,
//   price: 0,
// }, {
//   name: 'Cigar Public',
//   link: 'https://social.cigarpublic.com',
//   icon: 'https://cigarpublic.com/wp-content/uploads/2022/05/cp-yellow-avatar.png',
//   verified: false,
}, {
  name: 'Cigars Near Me',
  link: 'https://cigarsnearme.com/install',
  icon: 'https://cdn.cigarsnearme.com/assets/logos/launcher/ic_launcher_192.png',
  verified: true,
  price: 0,
}, {
  name: 'Humi',
  link: 'https://app.gethumi.co/',
  icon: 'https://app.gethumi.co/icon-192.png',
  verified: false,
  price: 0,
}, {
  name: 'Leaf Enthusiasts',
  link: 'https://leafenthusiasts.com',
  icon: 'https://leafenthusiasts.com/manifest-icon-512.maskable.png',
  verified: false,
  price: 0,
// }, {
//   name: 'Light \'em Up GO',
//   link: 'https://app.lightemupgo.com',
//   icon: 'https://app.lightemupgo.com/icons/Icon-192.png',
//   verified: false,
//   price: 0,
// }, {
//   name: 'Virtual Lounge',
//   link: 'https://lounge.boxpressd.com',
//   icon: 'https://lounge.boxpressd.com/assets/icon/apple-touch-icon-180x180.png',
//   verified: false,
//   price: 0,
}, {
  name: 'Vitola',
  link: 'https://app.getvitolaapp.com',
  icon: 'https://app.getvitolaapp.com/icons/Icon-512.png',
  verified: false,
  price: 0,
}, {
  name: 'Vitolá',
  link: 'https://officialvitola.com',
  icon: 'https://officialvitola.com/vitola_app_icon_1024_enlarged.png',
  verified: false,
  price: 0,
}]

const isInStandaloneMode = typeof window !== "undefined" && (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true);

const Index = () => {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const height = isMobileOnly ? '50vw' : 180;
  const width = isMobileOnly ? '50vw' : 180;
  useEffect(() => {
    if (isMobile && !isInStandaloneMode) {
      setOpen(true);
    }
    // TODO Include search option to filter based on ?q={search_term}
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
              href={!open ? `${app.link}?utm_source=boxpressd&utm_medium=pwa_directory&utm_campaign=app_store_listing` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: 'center', maxHeight: height + 60, maxWidth: width }}
              onClick={(e) => {
                if (window.analytics) {
                  e.preventDefault();
                  window.analytics.track("App Clicks", { app: app.name, url: e.currentTarget.href });
                  window.open(e.currentTarget.href, '_blank', 'noopener noreferrer');
                }
              }}
            >
              <div style={{ margin: 12 }}>
                <Image src={app.icon} height={180} width={180} alt={app.name} className="app-icon" />
                <div style={{ color: '#dfdfdf' }}>
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
                <div style={{ color: '#727885' }}>
                  {app.rating || 'Not Rated'} ★ {app.price ? `$${app.price.toFixed(2)}` : ''}
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
            <Image src="/apple-touch-icon-180.png" height={20} width={20} style={{ borderRadius: 10, marginRight: 10 }} />
            <span style={{ flex: 1, color: '#2b2b2b' }}>Cigar Apps Store</span>
            <Link
              href="/install"
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
                height: 25,
                padding: '8px 16px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              // onClick={() => navigate('/install')}
            >
              {'Install'}
            </Link>
          </div>
          <p>Install Cigar Apps Store to your phone to always have quick access to the latest cigar apps on the market.</p>
        </div>
      </BottomSheet>
    </div>
  )
}

export default Index;
