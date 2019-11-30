/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/css/admin.308265e.css","d96a4cb6b900d5413752e78467fdc526"],["/static/img/401.089007e.gif","089007e721e1f22809c0313b670a36f1"],["/static/img/404.a57b6f3.png","a57b6f31fa77c50f14d756711dea4158"],["/static/img/element-icons.535877f.woff","535877f50039c0cb49a6196a5b7517cd"],["/static/img/element-icons.732389d.ttf","732389ded34cb9c52dd88271f1345af9"],["/static/js/0.01e05ba.js","e865fbeb481519a869fce8294361e2a9"],["/static/js/1.c4a51db.js","977750d046411e6b019269857d5c3ee8"],["/static/js/10.aef81b6.js","9dd624702255996ca1d8b5fa723b28ea"],["/static/js/11.16f3aa0.js","8770bbf816a010846c176f67da20579c"],["/static/js/12.9363f45.js","626b98c8d8dcf7c6a9bae8971e8a57c0"],["/static/js/13.6da138a.js","1a12bcf014314072b213b4d8d209d779"],["/static/js/14.ad2b43b.js","cfbfc4efca0e4fec1e3789466b236e3b"],["/static/js/15.8d4cf60.js","6828fe6ed6b4bfdf7f788642f0c82008"],["/static/js/16.aa7cef4.js","a1e120ebb48398605d7df8b9092fd5ca"],["/static/js/17.04ecf2f.js","c36ddd2e23e1d304efc5e4f49056bf10"],["/static/js/18.116efd6.js","448da4f9a00cc6ed2bbde437f7c72073"],["/static/js/19.da6611e.js","245bc125b976c12bacb7af8b7fd634ef"],["/static/js/2.917a877.js","1d3b29e89ced7b1745b7f93f51b09973"],["/static/js/20.b4452c8.js","4cb8766339036f21f87241f04a6acd2f"],["/static/js/21.1cf1aaa.js","6a11e716a1220be6edad24e407e40888"],["/static/js/22.77e31ff.js","4821358fd2d7b1cd8e4f2014ba6255b5"],["/static/js/23.d1d30ed.js","a97943dea41c00522d329bd4521ecf71"],["/static/js/24.7cb74ce.js","c31ca49d270232b83b0d6a0e1afa6af5"],["/static/js/25.6c049dd.js","15351b8868d2adf71d300ad133193942"],["/static/js/26.d9d1280.js","11edab6186ab06f9d4f8cca31f463646"],["/static/js/27.051fcee.js","03917d3ba09233454fb4240e49faeb9d"],["/static/js/28.2247b7e.js","98175ff4eaf04b4e70b7f9e905533c90"],["/static/js/29.99145d1.js","ac185cafc4160afed87c3989d419cd5c"],["/static/js/3.e045613.js","e5c1ca237119ebb3c50d1653fcfbe1f1"],["/static/js/30.10e0617.js","d621a46d18db1ca2715e78eab355dda5"],["/static/js/31.9051937.js","ebc12a9ea66c20f06f622da557e3689a"],["/static/js/32.17815cb.js","ae4c2210f8a27008bf4c29032b671629"],["/static/js/33.526f8b0.js","669e88c9f2e747d83591d27158eb9921"],["/static/js/34.764b509.js","3eebaccfc87b65938d4bab56450f15f2"],["/static/js/35.55558cd.js","6772981cc2a810dc62ac1b2999c61ca3"],["/static/js/36.f6d7776.js","5de42716d39e866e4cff9d93c3eccb71"],["/static/js/37.b1bd7e9.js","7781760a365f31cb96c04eceb7751760"],["/static/js/38.581a268.js","1b1f5c4c66a159a5df78a26f22629495"],["/static/js/39.53ac354.js","8d37af91cffca04b16f4616bdfc835d2"],["/static/js/4.4957cc9.js","5b78edafea564198decb28e49eb6d82d"],["/static/js/40.3ba2850.js","919c0068f476bc8307a6ed837362e54b"],["/static/js/41.f68f780.js","a12fa0cee2ab37e3d84c26300541511b"],["/static/js/42.1a73264.js","9c643d937a5769ffbf82cbee30a29a35"],["/static/js/43.496ee27.js","2af9046fd7c9258be1d649cc4bce0275"],["/static/js/44.ae11b02.js","cf50d098d3817b25be8154c5500bdd10"],["/static/js/45.b773422.js","378070c7859620c9fbc3fa3f52d8b17e"],["/static/js/46.99e9997.js","05c3ba539f677ecda7246ea9b69ca6ef"],["/static/js/47.79e5bce.js","5c67433dcbdf136cadb355bb4f950e52"],["/static/js/48.2a10d5a.js","f6513f353dc2f9e3c4faf35fbcc230cf"],["/static/js/49.749b56a.js","24b41f41946b723d5f6c426f8a68df9f"],["/static/js/5.66d9541.js","e74f4a2e40f4923e1b77abd059d69e50"],["/static/js/50.9271590.js","d74e18c29226f36267bfd0f6445ef36a"],["/static/js/51.470543c.js","e7e08a460bc5707555672b2a72ca2f18"],["/static/js/52.dc1da2e.js","4dccea84c00746230d34bea61a356f3d"],["/static/js/53.26eaeb6.js","31696cbcaf4e926e4e0e866f70be51fd"],["/static/js/54.90daaf6.js","041d5f2558185ced4307131a15eda8c3"],["/static/js/55.2f8fb99.js","4162172aef2b876919fca5092f7811a2"],["/static/js/56.6a07736.js","91e91a4813171fe8d1441a0470095263"],["/static/js/57.f1abc16.js","eb2ef900c35f65583628960285d7337a"],["/static/js/58.219c237.js","32574482162f84aba8d0813de503b394"],["/static/js/59.80ae6c8.js","8cc6292aef66c68c242ff3b5e7f04fa6"],["/static/js/6.67f0862.js","ced951d0388d62dc612631f7e76d79bf"],["/static/js/60.5cd3920.js","46ed43074a035623e451787a369f40c6"],["/static/js/61.6dca285.js","39c0de8401b1bc9ef077bd3aefe34a09"],["/static/js/62.57d9c3f.js","cbede50a3c92dbd6b4aeb0b31038067e"],["/static/js/63.6815a7a.js","d0b1c54cfa3d3b9478c29d7a355c7378"],["/static/js/64.1493e22.js","9d3b9d3f1854c1f7b2f4f9cd0b9f5d93"],["/static/js/65.53929e1.js","e5956753f68e572cf6a6be3a0f61f91a"],["/static/js/66.76ae666.js","2b0060b7f8e7a2cd43a112ca0ec6b89b"],["/static/js/67.482d576.js","69b939773125b6165b6c4285ebd7e092"],["/static/js/68.5746747.js","5b8a2cb354d2893e36be2f372dc10c80"],["/static/js/7.5f9a91c.js","36011e2abaf500c71c11406b10e10894"],["/static/js/8.c7789a9.js","7231b59e3cac0f2c088505d30a77ab10"],["/static/js/9.182724b.js","ad3daf581494091e75a18d6973716710"],["/static/js/admin.5ceee09.js","22281c4eecf0c9afc5476ec6a7f83b2e"],["/static/js/manifest.dc99c8f.js","0fb6ea2c75c7fa1f919d75740dbf61ef"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







