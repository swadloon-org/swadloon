# Installable Web App

Start by navigating to: http://www.favicon-generator.org/

Upload your high res png:

![image](https://user-images.githubusercontent.com/9644867/33854077-66a8ecd0-de8e-11e7-8858-f106c4b5b6f3.png)

Download the generated favicons, extract them in
`/src/client/app/images/favicons/`.

You can delete the provided manifest.json and browserconfig.xml files since they
are included under `/src/client/app` - they also include more settings like
"orientation" or "display".

The `manifest.json` configuration:

- https://developer.mozilla.org/en-US/docs/Web/Manifest
- https://tomitm.github.io/appmanifest/
- https://developer.chrome.com/extensions/manifest

Installable web app meta tags:

- Chrome, FF:
  https://developer.chrome.com/multidevice/android/installtohomescreen
- Safari:
  [Safari Supported Meta Tags](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)

Fullscreen experience for web apps:
https://developers.google.com/web/fundamentals/native-hardware/fullscreen/

## PWA Splash Screens

Generate the files with https://appsco.pe/developer/splash-screens

And then place them in `/src/client/app/images/splashscreens`

---
