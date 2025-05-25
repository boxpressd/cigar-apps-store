import React, {useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/router'
import { isAndroid, isChrome, isIOS, isMobile, isSafari, isTablet } from 'mobile-device-detect';
import { useExternalScript } from '../utils/useExternalScript';

function Install() {
  const router = useRouter()

  const externalScript = 'https://cdn.boxpressd.com/lib/boxpressd-marketplace.js';
  const state = useExternalScript(externalScript);
  const ref = useRef();

  const [mounted, setMounted] = useState(false);
  const [isInStandaloneMode, setIsInStandaloneMode] = useState(false)

  useEffect(() => {
    setMounted(true);
    const urlParams = new URLSearchParams(window.location.search)
    const standalone = urlParams.get('standalone') === 'true'
    const isStandalone =
      standalone ||
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true

    setIsInStandaloneMode(isStandalone)
  }, [])


  useEffect(() => {
    if ((!isMobile
      && !(isAndroid && isChrome)
      && !(isIOS && !isSafari)
      && !((isIOS && isSafari && !isTablet) || (isAndroid && isChrome)))
      || isInStandaloneMode
    ) {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if (mounted && state === 'ready' && typeof window.MarketPlaceListing === 'function') {
      window.MarketPlaceListing(ref.current);
    }
  }, [state]);
  return <div ref={ref} id="boxpressd-listing" />;
}

export default Install;
