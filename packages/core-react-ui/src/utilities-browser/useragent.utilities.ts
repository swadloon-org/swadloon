//
// Inpired by https://www.npmjs.com/package/ua-parser-js
// But with way less code and functionality (ua-parser-js's bundle is huge)
//

export function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
}

export const isIOS = isIOSType() || getIPad13();

function isIOSType() {
  const nav = getNavigatorInstance();
  const iOSDevices = ['iPhone', 'iPad', 'iPod'];

  if (!(nav && nav.platform)) {
    return false;
  }

  const iosInPlatform = iOSDevices.indexOf(nav.platform) !== -1;
  const iosInUserAgent = iOSDevices.find((device) => new RegExp(device).test(nav.userAgent));

  if (iosInPlatform || iosInUserAgent) {
    return true;
  }

  return false;
}

function getIPad13() {
  return isIOS13Check('iPad');
}

function isIOS13Check(type: string): boolean {
  const nav = getNavigatorInstance();
  return !!(
    nav &&
    nav.platform &&
    (nav.platform.indexOf(type) !== -1 ||
      // @ts-ignore
      (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream))
  );
}
