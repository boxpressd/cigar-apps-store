import React, { useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { isAndroid, isChrome, isIOS, isMobile, isSafari, isTablet } from 'mobile-device-detect';
import { useExternalScript } from '../utils/useExternalScript';

const urlParams = new URLSearchParams(window.location.search);
const standalone = urlParams.get('standalone') === 'true';
const isInStandaloneMode = standalone || window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

function Install() {
  const externalScript = 'https://cdn.boxpressd.com/lib/boxpressd-marketplace.js';
  const state = useExternalScript(externalScript);
  const ref = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if ((!isMobile
      && !(isAndroid && isChrome)
      && !(isIOS && !isSafari)
      && !((isIOS && isSafari && !isTablet) || (isAndroid && isChrome)))
      || isInStandaloneMode
    ) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (state === 'ready') {
      window.MarketPlaceListing(ref.current);
    }
  }, [state]);
  return <div ref={ref} id="boxpressd-listing" />;
}

export default Install;
