# PWA Notes

Date: 8/13/2021
Sources:

Youtube Demo for Nextjs PWA --> `https://www.youtube.com/watch?v=8enp-acPbRE`

- **_Start with this tutorial for fast tracked Nextjs PWA_**
- This links to `next-pwa` boilerplate for a robust service worker --> `https://github.com/shadowwalker/next-pwa/blob/master/examples/offline-fallback/service-worker.js`

# A PWA instance has to be vistted for at least 30 seconds before the prompt to install it as a PWA is shown to the user!

# The PWA icon MUST BE 512px x 512px!

# What makes up a PWA?

- A progressive web app(PWA) is a term used to describe a set of features around an application/website that enhance it's performance and capabilities to make it look and feel more like a native app.
- There are three main features that are used to identify an application as a PWA:
  1. Reliability - Load fast & provide offline functionality.
  2. Fast - Responds extremely quickly to user actions.
  3. Engaging - Look & feel of a native mobile app.
- Progressive web apps allows developers to leverage a mobile device's features & OS, as well as utilizing the massive reach to more users that the web offers in place of having to host app through an app store.

# Service Workers & Caching in PWAS

- A service worker is a JavaScript file that is running in the "background" of a website or application.
- Service workers implement a set of core building blocks for any PWA:
  - Background Sync - Sync user data in the background.
  - Caching/Offline Support
  - Push Notifications - Mobile device like push notifications on desktop or mobile.
  - Application Manifest - Allows the PWA to be added to a desktop or mobile device homescreen.
  - Responsive Design - App/Layout should work & look good across devices.
  - Gelocation & Media APIs

# Service Worker Breakdown -

- A service worker is a client-side programmable proxy between a web application and the outside world, providing fine control over network requests & caching behavior.
- Service workers are a type of web worker, which is an object that executes a script seperately from the main browser thread.
- Because workers run separately from the main thread, service workers are independent of the application they are associated with. This has several consequences:
  - Because the service worker is not blocking (it's designed to be fully asynchronous) synchronous XHR and localStorage cannot be used in a service worker.
  - The service worker can receive push messages from a server when the app is not active. This lets your app show push notifications to the user, even when it is not open in the browser.
- Service workers run independantly of the web app that are registered with, and can received messages when not active, either because you application is in the background, not open, or the browser is closed.
- A service worker becomes idle when not in use, and re-activates the next time it is needed.
- If there is data that needs to be persisted, service workers are configured to work with indexed databases.
- Service workers are Promise based, meaning they implement the Promise object that is used as a sort of placeholder for the eventual results of a deferred & possibly asynchronous computation.
- Service workers depends on 2 primary APIs in order to work effectively:
  1. Fetch API - Web API to retrieve resources.
  2. Cache API - Persistant and independant of the browser's cache or status.
- In order to prevent "Man in the middle" security concerns, service workers are only served through using TLS, using the HTTPS protocol.
  **Services workers being tested on localhost are EXEMPT from this policy!**
  **_Using GitHub Pages to server the PWA provides for SSL by default!_**
  - Services like "lets encrypt" can allow for the procurement of SSL certifications for free to install on the server.

# Caching Types in Workbox Service Workers

- There are 2 basic types of caching that a service worker can perform with respect to a PWA:
  1. Pre-caching - Assets are precached during the installation of the PWA, or when the web app is first opened.
  - This technique is at the core of application shell architecture!
  * Using this technique, DOES NOT preclude regular dynamic caching, both methods can be combined to make a hybrid caching architecture.
  2. Caching Fallback - This type of caching is defined by creating a fallback source for offline access:
  - Using the Fetch API, a resource can be requested & the response modified with content other than the object that was originally requested.
  - This technique provides alternative resources in case the requested resources are not available in cache & the network is unreachable.

# The Service Worker Lifecycle

- Every service worker has three stages in it's lifecycle:

  1. Registration:

  - The first step for any service worker is to "Register" it in my main JavaScript code.
  - This instructs the browser as to where the service worker is located & initiates the installation process afterwards.
  - A service worker can be registered each time the page loads, and the browser will only register the service worker if it's new or if it had been updated.

    Ex:

    ```js:service-worker.js
      if(!('serviceWorker' in navigator)) { // Checks for the existance of the serviceWorker in the navigator object.
        console.log("sw not supported");
        return;
      }
      navigator.serviceWorker.register('/service-worker.js') // Register the service worker with the client browser.
      .then(function(registration){
        console.log('SW registered! Scope is: ', registration.scope);
      })
      .catch(function(e){
        console.log("An error has occurred", error.message);
      });
    ```

    **_Service Worker Scope_**

    - The scope determines from which path the service worker will intercept the requests.
    - The default scope of a service worker registration is ./ relative to the script URL. This means if you register a service worker at `//example.com/foo/bar.js` it has a default scope of `//example.com/foo/`.
    - We call pages, workers, and shared workers clients. Your service worker can only control clients that are in-scope. Once a client is "controlled", its fetches go through the in-scope service worker. You can detect if a client is controlled via navigator.serviceWorker.controller which will be null or a service worker instance.
    - If the service worker exists in the root directory of the application, the service worker will control requests for all files at the root domain.
      - Arbitrary scopes can be added as a configuration passed in the options object.
    - Setting the scope of the service worker to '/app/', means it controls requests made from all domains that contain sub-directories/paths of the root(but not including '/app/') like --> '/app/sub-domain' or '/app/sub-domain-2'.
      **A service worker CAN NOT have a scope ABOVE it's own path!**

    Ex:

    ```js:service-worker.js
      navigator.serviceWorker.register(
        '/servie-worker.js',{
          scope: '/app/'
        }
      );
    ```

  2. Installation

  - Once the service worker has been registered, the install event can occur in the background.
  - Only installs if sevice worker is new or if there is a byte difference from the previously installed one.
  - An "install event handler" can be implemented to perform actions during the install event.
    - The install event is a good time to cache the app-shell using the Cache API
  - Upon successful installation of the service worker, the activation stage is initiated immediately after the event completes.

  3. Activation

  - Once activated, the service worker will control all requests within it's scope & intercept corresponding network requests.
  - **_The pages in my app that are NOT 'open' will NOT be under the service worker's scope since the service worker was not loaded when the page was opened!_**
  - **_To put currently open pages under the service worker's control, you MUST reload the page/pages!_**
  - **_Until the currently open page is in the service workers scope, requests will bypass the service worker and operate as they normally would._**
  - Service workers maintain control as long as there is pages open that are dependant on that specific version, ensuring that only one version of the service worker is running at any given time.
  - If a new service worker is installed on a page with an existing service worker, the new service worker WILL NOT INSTALL until the old service worker is removed.
  - All service workers become redundant & must be deleted when all dependant pages are closed; this activates the new service worker and allows it to take over.
  - Refreshing the page IS NOT sufficient to install a new service worker because there won't be a time when the old service worker is not in use.
  - **_The activation event is a good time to clean up stale data caches from the applcation._**
  - Forced activation of a service worker can be done programatically with `self.skipWaiting()`

  Ex:

  ```js:service-worker.js
    self.addEventListener('activate', function(event) {
      // Do stuff during intsall ...
    });
  ```

# Service Worker Events

- Service workers are event driven.
- Installation & activation events fire off corresponding events to which the service worker can respond.
- The service worker can receive events through "messages events".
- The service worker can also respond "functional events" such as fetch, sync, & push.

  **_Fetch Events_**

  - A "fetch event" is fired every time a resource is requested.

  Ex:

  ```js:service-worker.js
    self.addEventListener('fetch', // Fires any time a fetch request is made, and returns the cached assets that match the request.
    function(event){
      event.respondWith(
        caches.match(event.request)
      );
    });
  ```

  **_Background Sync_**

  - Service workers can implement background syncing.
  - The service worker can listen for 'sync' events
    Ex:

    ```js:service-worker.js
      navigator.serviceWorker.ready.then(   // Register SW & when it's 'ready' a sync event listener is registered to listen for 'foo'
        function(swRegistration) {
          return swRegistration.sync.register('foo');
        });

        self.addEventListener('sync',
          function(event) {
            if(event.tag === 'foo') {
              event.waitUntil(doSomething()); // doSomething() returns a Promise depending on what it's trying to do.
            };
          });
    ```

    - If the sync fails, another sync will be scheduled to retry.
    - Retry syncs also wait for connectivity, and employ an expotential backoff.

    **_Push Event_**

    - The service worker can listen for "push events", which are initiated by your backend servers through a browser's push service.

    Ex:
    `js:service-worker.js // var options = {...} self.addEventListener('push', function(event) { event.waitUntil( self.registration.showNotification( 'Hello world!', options // Used to cusomize the notification & could hold data that was pushed from the servers. ); ); }); `

    - The service worker can't access the DOM directly. To communicate with the page, the service worker uses the `postMessage()` method to send data and a "message" event listener to receive data.

********************\*\*\*\********************* Google Workbox Kit ********************\*\*\*\*********************

# sw-toolbox Caching Strategies

- The `sw-toolbox` module can be installed via NPM & used via the command line to execute.
- There are 5 caching handlers for responding to HTTP route requests, so it's really dependant on the design of the assets & data that your PWA is using:
  - `toolbox.networkFirst` - Reach out to the network for the files first, and store them in the cache if successful; otherwise fetch files from the cache(best for API requests for fresh data).
  - `toolbox.cacheFirst` - If the cache has the target asset file, then respond with that file first; otherwise reach out to the network if the file does not exist in the cache(if network fetch succeds, update the cache; best for resources the don't change often)
  - `toolbox.fastes` - Fetch the target asset files from both the network & cache in parralel, and return whichever comes back first, and if network fetch succeds then update the cache.
  - `toolbox.cacheOnly` - Fetch the target asset files from the cache only, and if the file doesn't exist then return nothing.
  - `toolbox.networkOnly` - Fetch the target assest from the network, and if the request fails, then return nothing.

# URL Pattern Mathching in sw-toolbox

- Both Express.js like syntax & Regular Expressions can be used to match URL paths for caching.

  - If matching a single name origin URL, a simple string will work.
  - Glob & wildcard mathching patterns can be used to target all files with the targeted file extension(.css, .html, .js).

  **_Express.js Like Routing_**

  - If the URL is in string quotes, Toolbox reads that as express style routing.
  - To set a route as using Express style routing, a `origin` URL must be specified in the options object.

    ```js:sw.js
      toolbox.router.get('/(.*)',       ---> 'Intercepts all GET requests to `googleapis` with a cacheFirst strategy'
        global.toolbox.cacheFirst,
        {
          cache: {                      ---> 'Set cache storage configuration options such as maxEntries & maxAgeSeconds'
            name: 'googleapis',
            maxEntries: 10,             ---> 'Only 10 cached items may live in the storage, and a F.I.F.O manner(10 most recent items only)'
            maxAgeSeconds: 86400        ---> 'Expires cachced items 24 hours after they have been cached'
          }
        },
        { origin: /\.googleapis\.com$/ }
      );

      toolbox.router.get('/.*fly$/',    ---> 'Intercepts all GET requests in which the URL pattern ends with "fly", such as "butterfly" or "dragonfly"'
        global.toolbox.cacheFirst();
      );
    ```

# Loading The Toolbox

- To use `sw-toolbox` remeber to include the `sw-toolbox module` in the service worker, along with a custom script containing the routes.

  ```js:sw.js
    importScripts(
      "./node_modules/sw-toolbox/sw-toolbox.js",
      "./js/toolbox-script.js"
    )
  ```
