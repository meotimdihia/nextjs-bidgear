'use client';
import Script from 'next/script';
import { useEffect } from 'react';

export default function BidgearAds() {
  useEffect(() => {
    let bidgearAdsScript = document.getElementById('bidgearAdsScript');
    if (!bidgearAdsScript) {
      let script = document.createElement('script');
      script.setAttribute(
        'src',
        'https://platform.bidgear.com/pubbidgear-ad.js'
      );
      script.setAttribute('id', 'bidgearAdsScript');
      document.head.appendChild(script);
    }
    const bg_id = document.getElementById('bg-ssp-8709');
    if (bg_id) {
      bg_id.id = 'bg-ssp-8709-' + Math.floor(Math.random() * Date.now());
      //@ts-ignore
      window.pubbidgeartag = window.pubbidgeartag || [];
      //@ts-ignore
      window.pubbidgeartag.push({
        zoneid: 8709,
        id: bg_id.id,
        wu: window.location.href,
      });
    }
  }, []);
  return (
    <>
      <div id="bg-ssp-8709"></div>
    </>
  );
}
