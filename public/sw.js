if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-e604aefe"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/K7IFQzzlNicNCwB_oVsep/_buildManifest.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/K7IFQzzlNicNCwB_oVsep/_ssgManifest.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/10.f9c461c0f2a2286dc02b.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/commons.78ec7b4060edd410a4ae.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/framework.e8d7d1fe01cd920b2e45.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/main-773a7c51e75aceca1d23.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/pages/404-11eaaa4b855d93252f77.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/pages/_app-7808e2ea95985d7d1ec3.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/pages/_error-6fe4ce7874ef714a987a.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/pages/faqfull-5363ca2ad041eb8cd2a6.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/pages/index-4672f615aab091df57f9.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/chunks/webpack-c9442b699d6adedc5f2c.js",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/_next/static/css/237b01ba7865f0b6e64e.css",revision:"K7IFQzzlNicNCwB_oVsep"},{url:"/css/animate.min.css",revision:"83156cbc61728bc80174ac1eb26f1a34"},{url:"/css/bootstrap.min.css",revision:"3378de5c6bb77b4df32a534e0580c676"},{url:"/css/icofont.min.css",revision:"addaa273be7290f5790631f406c37a31"},{url:"/css/responsive.css",revision:"28cc56e58127e9a5c09166c11b80169e"},{url:"/css/responsive.css.map",revision:"ea61e5a099fa3c44aeb7b491c32eb6d5"},{url:"/css/responsive.scss",revision:"aab30eaa2c3a1d2353c0b9cfa490253b"},{url:"/css/rtl.css",revision:"b3cf0005dd8f488233e757f6eb23b5b4"},{url:"/css/style.css",revision:"7715c22fe7aef6a2be7f2186561cd7ff"},{url:"/css/style.css.map",revision:"cfaa1fbfd6b5a1b5926a4431761dd60e"},{url:"/css/style.scss",revision:"ba87ecde93751c0882c601264067c52e"},{url:"/fonts/icofont.eot",revision:"20e606bb2a29ad8b228812c72c604a31"},{url:"/fonts/icofont.svg",revision:"47d8c4d6ee7c696b070454f7f0d8bb57"},{url:"/fonts/icofont.ttf",revision:"22304f677719908079b166a1280db76e"},{url:"/fonts/icofont.woff",revision:"f6ab04aed30a8643bf94fe00f7ff0b59"},{url:"/fonts/icofont.woff2",revision:"50a4ab76e700a83e649be213f820fbbd"},{url:"/icon-512x512.png",revision:"18351c5a0cdb0fe9e3abd73cc7a5c4e8"},{url:"/icon.png",revision:"3bbd87e74d3825bf203bcead08ded0d3"},{url:"/images/404-error-image.jpeg",revision:"08459222aa2eb9778917b874e2abb62b"},{url:"/images/curve-shape.svg",revision:"2df074e3fc46871f042ae3732e78bf06"},{url:"/images/faq-law-books.jpg",revision:"e1705a60303082a946b38c88587eb11a"},{url:"/images/houses1.jpg",revision:"00d833937a98c772ce4baa138eabbbf8"},{url:"/images/houses2.jpg",revision:"24f0e50e67b139b15786f515be49c8cc"},{url:"/images/houses3.jpg",revision:"6d33b66ab0e8670c942120f36a20120d"},{url:"/images/houses4.jpg",revision:"aca74643c00e4f7d168a5744502f754d"},{url:"/images/kyliee.jpg",revision:"dc86d303b493d67d4e1fe48d9d911458"},{url:"/images/new-prez1.jpg",revision:"0cf74a8b955f763c8498f4a8b23a685d"},{url:"/images/new5.jpeg",revision:"17e3afd8248da4e28bc4c6202923fbb1"},{url:"/images/powerstone/powerstone-favicon.ico",revision:"6bffb12de40fa9d2e0b85a5b12c463c0"},{url:"/images/powerstone/powerstone-logo-white.png",revision:"9c814e108eb23f50a7634fcab3421991"},{url:"/images/powerstone/powerstone-property-management-horizontal-logo.png",revision:"dac71b91ae8ee64dde33fcd30c4254da"},{url:"/images/vice-prez2.jpeg",revision:"0a8244f8d3c9a20c58b19b90e0f1292a"},{url:"/manifest.json",revision:"9c20557d0a8a893591a510d340ee7727"},{url:"/video/hoa1.mp4",revision:"e50571b7b2b548e99c3bb3c6fde5719a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
