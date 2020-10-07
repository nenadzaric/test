<!DOCTYPE html><html lang="sr"       prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/WebPage"><head><title itemprop="name">HBO GO</title><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /><meta name="keywords" content="HBO GO"/><meta name="twitter:card" content="summary"><meta property="og:url" content="http://hbogo.rs/"><meta name="title" content="HBO GO"><meta property="og:title" content="HBO GO"><meta name="twitter:title" content="HBO GO"><link rel="canonical" href="http://hbogo.rs/"><link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"><link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#000000"><link rel="manifest" href="/assets/favicon/site.webmanifest"><meta name="theme-color" content="#000000"><meta name="application-name" content="HBO GO"><meta name="msapplication-starturl" content="/"><meta name="msapplication-navbutton-color" content="#000000"><meta name="apple-mobile-web-app-title" content="HBO GO"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-status-bar-style" content="black"><script type="application/ld+json">{
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "https://hbogo.rs",
        "potentialAction": {
        "@type": "SearchAction",
          "target": "https://hbogo.rs/search/{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }</script><link rel="preload" href="/assets/5.22.1/css/go.min.css" as="style"><link rel="preload" href="/assets/5.22.1/sdk/sdk-core.css" as="style"><link rel="preload" href="/assets/vendor/jquery-3.4.0.min.js" as="script"><link rel="preload" href="/assets/5.22.1/sdk/vendor-core.js" as="script"><link rel="preload" href="/assets/5.22.1/sdk/go.sdk.js" as="script"><link rel="preload" href="/assets/5.22.1/sdk/sdk-core.js" as="script"><link rel="preload" href="/assets/5.22.1/js/bundle.min.js" as="script"><link rel="preload" href="/assets/img/loader1.png" as="image"><link rel="preload" href="/assets/img/loader2.png" as="image"><link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7292232/6755192/css/fonts.css"><link rel="stylesheet" href="/assets/5.22.1/sdk/sdk-core.css"><link rel="stylesheet" href="/assets/5.22.1/css/go.min.css"><script src="/assets/vendor/jquery-3.4.0.min.js"></script><script
src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
data-document-language="true" type="text/javascript"
charset="UTF-8"
data-domain-script="14d18c8f-c1c2-44fb-967d-bc2317d74bf2"></script><script type="text/javascript">var d2cOperatorList = [
  'b52fda48-25b2-4623-af6b-e8e30ae7d645',
  'e5ca4913-c5b8-4b08-96a3-b71abafb08aa',
  '24a5e09c-4550-4cd3-a63c-8f6ab0508dd7',
  '6e0fe238-3b45-4049-9206-fb46425c486f',
  '3782faaf-a461-4a4f-95ea-9b2fbcbf1958',
  '54d370dd-2e28-4661-9ad4-c919b88aac4d',
  '9b09ff6b-d2a8-48a5-84c3-31bf52add9ff',
  '15276cb7-7f53-432a-8ed5-a32038614bbf',
  'e04b20c2-be50-4b65-9b77-9e17e854de32',
  '55f359e0-6038-4653-a7db-e2101da2b7a8',
  'febb7b91-f968-4a6b-8592-564f0207ab2d',
  'dbaf3435-6ee2-4a79-af13-dac5a1c550a3',
  '69d3fbeb-91f2-4ab8-b036-0d03f42885b2',
];

function sendEcommerceEvent(){
  var business_model = d2cOperatorList.includes(go.customer.customer.OperatorId) ? 'D2C' : 'B2B';
  var id = 'RAND'+Math.floor(Math.random()*90000000000000);
  var affiliation = 'HBO ' +  window.location.origin.split('.').pop();
  var product_name = 'HBO ' + window.location.origin.split('.').pop() + ' Subscription';
  var urlParts = document.location.href.split(/\.../)

  var ecomerceObj = {
    'event': 'ecommerce',
    'contentData': {
      'link': urlParts[urlParts.length -1],
    },
    'customerData': {
      'CDCustomer': {
        'OperatorName': go.customer.customer.OperatorName || '',
        'ID': go.customer.customer.ID || 00000000-0000-0000-0000-000000000000,
      },
      'business_model': business_model,
      'voucher_code': go.customer.promocode || ''
    },
    'ecommerce': {
      'currencyCode': 'EUR',
      'purchase': {
        'actionField': {
          'id': id,
          'affiliation': affiliation,
          'revenue': 0.00,
          'coupon': 0,
        },
        'products': [{
          'name': product_name,
          'id': 0,
          'price': 0.00,
          'quantity': 1,
          'coupon': 0,
        }]
      },
    },
  }
  console.log({'Ecomerce push event': ecomerceObj});
  window.dataLayer.push(ecomerceObj)
}

function isWelcomePage() {
  return window.location.href.includes("lp/welcome")
  || window.location.href.includes("/lp/udvozlunk-hbogo")
  || window.location.href.includes("/lp/vitejte")
  || window.location.href.includes("/lp/bine-ai-venit")
  || window.location.href.includes("/lp/witamy")
  || window.location.href.includes("/lp/dobrodosli")
  || window.location.href.includes("/lp/dobredojte")
  || window.location.href.includes("/lp/dobredoshli")
  || window.location.href.includes("/lp/bem-vindo")
}

function OptanonWrapper() {
  OneTrust.OnConsentChanged(function () {
    var acceptedOneTrustCategories = OnetrustActiveGroups.split(',').filter((el) => el !== '');
    trackers(true);
    var domainParts = location.hostname.split('.');
    var subdomain = domainParts.shift();
    var upperLevelDomain = domainParts.join('.');
    var d = new Date()
    d.setFullYear(d.getFullYear() + 1)
    document.cookie = "optanonGateway="+OnetrustActiveGroups+"; expires="+d+" UTC; domain=."+upperLevelDomain+"; path=/ ";
    if(acceptedOneTrustCategories.includes('pf') && (typeof addOptimizelyToHead === 'function')){
      addOptimizelyToHead();
    }
    if(document.body.classList.contains('is-gateway-opened') && acceptedOneTrustCategories.length > 1){
      localStorage.setItem('consentAcceptDuringGW', 1);
    }
    if(isWelcomePage()){
      sendEcommerceEvent();
    }
  })
}</script><script type="text/javascript">function injector(code, targetElement){
  var s = document.createElement('script');
  s.type = 'text/javascript';
  try {
    s.appendChild(document.createTextNode(code));
    targetElement.appendChild(s);
  } catch (e) {
    s.text = code;
    targetElement.appendChild(s);
  }
}

function sendGtmInitEventsToDataLayer(){
  var business_model = d2cOperatorList.includes(go.customer.customer.OperatorId) ? 'D2C' : 'B2B';
  var gtmPageObj = {
    'event': 'page',
    'contentData': {
      'link': '/lp/welcome'
    },
    'customerData': {
      'CDCustomer': {
        'OperatorName': go.customer.customer.OperatorName || '',
        'ID': go.customer.customer.ID || 00000000-0000-0000-0000-000000000000,
      },
      'business_model': business_model,
      'voucher_code': go.customer.promocode || ''
    },
  }
  window.dataLayer.push({ 'OnetrustActiveGroups': OnetrustActiveGroups, 'event': "OneTrustLoaded"})
  window.dataLayer.push({ 'OnetrustActiveGroups': OnetrustActiveGroups, 'event': "OptanonLoaded"})
  window.dataLayer.push(gtmPageObj)
}

function trackers(afterChange){
  var acceptedOneTrustCategories = OnetrustActiveGroups.split(',').filter((el) => el !== '');
  var isPublic = 1;

  var gtmHeadCode = "dataLayer = []; \
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': \
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], \
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= \
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); \
    })(window,document,'script','dataLayer','GTM-5KSBMZ2');";

  var rayGunHeadCode = '!function (a, b, c, d, e, f, g) { \
    a.RaygunObject = e, a[e] = a[e] || function () { \
    (a[e].o = a[e].o || []).push(arguments) \
    }, f = b.createElement(c), g = b.getElementsByTagName(c)[0], \
    f.async = 1, f.src = d, g.parentNode.insertBefore(f, g) \
    }(window, document, "script", "//cdn.raygun.io/raygun4js/raygun.min.js", "rg4js");'

  var rayGunBottomCode = "rg4js('apiKey', '4hfuVTj0jYUlqeXH3oSs4A=='); \
    rg4js('enableCrashReporting', true); \
    rg4js('enablePulse', true);"


    if(acceptedOneTrustCategories.includes('pf')){
      injector(gtmHeadCode, document.head)
      if(afterChange){
        sendGtmInitEventsToDataLayer()
      }
    }
    if(acceptedOneTrustCategories.includes('ad')){
      injector(gtmHeadCode, document.head)
      if(afterChange){
        sendGtmInitEventsToDataLayer()
      }
      if(isPublic){
        injector(rayGunHeadCode, document.head)
        injector(rayGunBottomCode, document.head)
      }
    }
}
trackers(false);</script></head><body class="layout-default template-73">
<svg xmlns="http://www.w3.org/2000/svg" style="display:none"><symbol id="arrow" viewBox="0 0 100 100">
<path fill="#fff" d="M42.8 50L65 76.7l8 9.5c3.3 4 2.8 7.6-1 11-4.6 4.2-8.8 4-12.8-1-6.7-8.5-13.7-16.6-20.7-24.8-4.5-5.4-9.2-10.7-13.8-16-2.4-2.8-2.3-7.5 0-10.3C33 35.3 41 26 49 16.2 53 12 56.6 7.3 60.4 3c3-3.6 6.8-4 10.5-.8l1.6 1.3c3.4 2.8 3.8 6.7 1 10-5 6-10 12-15.2 18C53.2 38 48 44 42.8 50.2z"/>
</symbol><symbol id="arrow-blue" viewBox="0 0 100 100">
<path fill="#0091ea" d="M42.8 50L65 76.7l8 9.5c3.3 4 2.8 7.6-1 11-4.6 4.2-8.8 4-12.8-1-6.7-8.5-13.7-16.6-20.7-24.8-4.5-5.4-9.2-10.7-13.8-16-2.4-2.8-2.3-7.5 0-10.3C33 35.3 41 26 49 16.2 53 12 56.6 7.3 60.4 3c3-3.6 6.8-4 10.5-.8l1.6 1.3c3.4 2.8 3.8 6.7 1 10-5 6-10 12-15.2 18C53.2 38 48 44 42.8 50.2z"/>
</symbol><symbol id="bell" viewBox="0 0 512 512">
<path d="M381.7 225.9c0-97.6-52.5-130.8-101.6-138.2 0-.5.1-1 .1-1.6 0-12.3-10.9-22.1-24.2-22.1-13.3 0-23.8 9.8-23.8 22.1 0 .6 0 1.1.1 1.6-49.2 7.5-102 40.8-102 138.4 0 113.8-28.3 126-66.3 158h384c-37.8-32.1-66.3-44.4-66.3-158.2zM256.2 448c26.8 0 48.8-19.9 51.7-43H204.5c2.8 23.1 24.9 43 51.7 43z"/>
</symbol><symbol id="search" viewBox="0 0 30 32">
<path d="M20.571 14.857q0-3.304-2.348-5.652t-5.652-2.348-5.652 2.348-2.348 5.652 2.348 5.652 5.652 2.348 5.652-2.348 2.348-5.652zM29.714 29.714q0 0.929-0.679 1.607t-1.607 0.679q-0.964 0-1.607-0.679l-6.125-6.107q-3.196 2.214-7.125 2.214-2.554 0-4.884-0.991t-4.018-2.679-2.679-4.018-0.991-4.884 0.991-4.884 2.679-4.018 4.018-2.679 4.884-0.991 4.884 0.991 4.018 2.679 2.679 4.018 0.991 4.884q0 3.929-2.214 7.125l6.125 6.125q0.661 0.661 0.661 1.607z"/>
</symbol><symbol id="flag" viewBox="0 0 83 80">
<path d="M14.286 11.429c0 2.054-1.116 3.884-2.857 4.911v56.518c0 0.759-0.67 1.429-1.429 1.429h-2.857c-0.759 0-1.429-0.67-1.429-1.429v-56.518c-1.741-1.027-2.857-2.857-2.857-4.911 0-3.17 2.545-5.714 5.714-5.714s5.714 2.545 5.714 5.714zM80 14.286v34.063c0 1.652-1.027 2.277-2.321 2.946-5.045 2.723-10.625 5.179-16.473 5.179-8.214 0-12.143-6.25-21.875-6.25-7.098 0-14.554 3.214-20.714 6.518-0.491 0.268-0.938 0.402-1.473 0.402-1.563 0-2.857-1.295-2.857-2.857v-33.125c0-1.071 0.536-1.83 1.384-2.455 1.071-0.714 2.366-1.339 3.527-1.92 5.625-2.857 12.455-5.357 18.795-5.357 7.009 0 12.5 2.321 18.705 5.223 1.25 0.625 2.545 0.848 3.929 0.848 7.009 0 14.554-6.071 16.518-6.071 1.563 0 2.857 1.295 2.857 2.857z"/>
</symbol><symbol id="facebook" viewBox="0 0 19 32">
<path d="M17.125.214v4.714H14.32q-1.535 0-2.07.643t-.536 1.93v3.375h5.232l-.696 5.286h-4.536v13.555H6.25V16.16H1.696v-5.285H6.25V6.982q0-3.32 1.857-5.152T13.053 0q2.625 0 4.07.214z"/>
</symbol><symbol id="instagram" viewBox="0 0 32 32">
<path d="M27.2 1.6H4.8c-1.76 0-3.2 1.44-3.2 3.2v22.4c0 1.762 1.44 3.2 3.2 3.2h22.4c1.76 0 3.2-1.438 3.2-3.2V4.8c0-1.76-1.44-3.2-3.2-3.2zM15.974 24.837c4.894 0 8.86-3.97 8.86-8.862 0-.54-.068-1.062-.164-1.574h2.53v11.547c0 .61-.496 1.104-1.11 1.104H5.91c-.614 0-1.11-.492-1.11-1.103V14.4h2.478c-.098.513-.166 1.035-.166 1.575 0 4.894 3.97 8.862 8.862 8.862zm-5.537-8.863c0-3.06 2.48-5.538 5.54-5.538 3.057 0 5.538 2.478 5.538 5.538s-2.482 5.54-5.54 5.54c-3.06 0-5.538-2.48-5.538-5.54zM26.09 9.6h-2.583c-.61 0-1.107-.5-1.107-1.107V5.906c0-.61.496-1.106 1.106-1.106h2.584c.614 0 1.11.494 1.11 1.106v2.586c0 .61-.496 1.11-1.11 1.11z"/>
</symbol><symbol id="twitter" viewBox="0 0 30 32">
<path d="M28.93 7.286q-1.197 1.75-2.894 2.982.018.25.018.75 0 2.32-.68 4.634t-2.062 4.437-3.295 3.758-4.607 2.607-5.768.973q-4.84 0-8.857-2.59.625.072 1.393.072 4.018 0 7.16-2.464-1.874-.036-3.356-1.152t-2.036-2.848q.59.09 1.09.09.767 0 1.517-.197-2-.412-3.313-1.992t-1.313-3.67v-.07q1.214.678 2.607.73-1.18-.785-1.875-2.053t-.697-2.75q0-1.57.786-2.91 2.16 2.66 5.258 4.258t6.634 1.777q-.143-.68-.143-1.32 0-2.394 1.687-4.08t4.08-1.69q2.5 0 4.214 1.822Q26.428 6.017 28.143 5q-.66 2.053-2.536 3.178 1.66-.18 3.32-.893z"/>
</symbol><symbol id="youtube" viewBox="0 0 32 32">
<path d="M22.857 16q0-.66-.536-.964L13.18 9.322q-.554-.357-1.16-.036-.59.32-.59 1v11.43q0 .678.59 1 .285.142.553.142.358 0 .608-.18l9.143-5.713q.537-.304.537-.964zM32 16q0 1.714-.018 2.68t-.152 2.437-.402 2.634q-.286 1.305-1.232 2.197t-2.214 1.036q-3.964.446-11.982.446t-11.982-.447q-1.268-.143-2.223-1.036T.555 23.75q-.25-1.16-.385-2.633T.018 18.68 0 16t.018-2.68.152-2.437.402-2.634q.286-1.305 1.232-2.197t2.214-1.036Q7.982 4.57 16 4.57t11.982.447q1.268.143 2.223 1.036t1.24 2.196q.25 1.16.385 2.633t.152 2.438T32 16z"/>
</symbol><symbol id="youtube-play" viewBox="0 0 68 48">
<path class="ytp-large-play-button-bg" d="m .66,37.62 c 0,0 .66,4.70 2.70,6.77 2.58,2.71 5.98,2.63 7.49,2.91 5.43,.52 23.10,.68 23.12,.68 .00,-1.3e-5 14.29,-0.02 23.81,-0.71 1.32,-0.15 4.22,-0.17 6.81,-2.89 2.03,-2.07 2.70,-6.77 2.70,-6.77 0,0 .67,-5.52 .67,-11.04 l 0,-5.17 c 0,-5.52 -0.67,-11.04 -0.67,-11.04 0,0 -0.66,-4.70 -2.70,-6.77 C 62.03,.86 59.13,.84 57.80,.69 48.28,0 34.00,0 34.00,0 33.97,0 19.69,0 10.18,.69 8.85,.84 5.95,.86 3.36,3.58 1.32,5.65 .66,10.35 .66,10.35 c 0,0 -0.55,4.50 -0.66,9.45 l 0,8.36 c .10,4.94 .66,9.45 .66,9.45 z" fill="#1f1f1e" fill-opacity="0.81"/>
<path d="m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z" fill="#fff"/>
<path d="M 45.02,23.46 45.32,23.28 26.96,13.67 43.32,24.34 45.02,23.46 z" fill="#ccc"/>
</symbol><symbol id="google-plus" viewBox="0 0 41 32">
<path d="M25.66 16.304q0 3.714-1.553 6.616t-4.43 4.536-6.588 1.634q-2.662 0-5.09-1.036t-4.18-2.786-2.785-4.18T0 16t1.035-5.09T3.82 6.733 8 3.946t5.09-1.036q5.106 0 8.767 3.43l-3.554 3.41q-2.09-2.018-5.214-2.018-2.197 0-4.064 1.107T6.07 11.847 4.983 16t1.09 4.152 2.954 3.01 4.063 1.106q1.48 0 2.722-.41t2.045-1.028 1.402-1.402.874-1.482.384-1.32h-7.43v-4.5h12.358q.214 1.124.214 2.178zm15.483-2.18v3.75H37.41v3.733h-3.75v-3.732h-3.73v-3.75h3.73v-3.732h3.75v3.732h3.733z"/>
</symbol><symbol id="dots" viewBox="0 0 20 20">
<path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S11.216,7.8,10.001,7.8z M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2C4.216,12.2,5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8 C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S18.216,7.8,17.001,7.8z"/>
</symbol><symbol id="register" viewBox="0 0 20 28">
<path d="M20 21.859c0 2.281-1.5 4.141-3.328 4.141h-13.344c-1.828 0-3.328-1.859-3.328-4.141 0-4.109 1.016-8.859 5.109-8.859 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c4.094 0 5.109 4.75 5.109 8.859zM16 8c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6z"/>
</symbol><symbol id="login" viewBox="0 0 24 28">
<path d="M18.5 14c0 0.266-0.109 0.516-0.297 0.703l-8.5 8.5c-0.187 0.187-0.438 0.297-0.703 0.297-0.547 0-1-0.453-1-1v-4.5h-7c-0.547 0-1-0.453-1-1v-6c0-0.547 0.453-1 1-1h7v-4.5c0-0.547 0.453-1 1-1 0.266 0 0.516 0.109 0.703 0.297l8.5 8.5c0.187 0.187 0.297 0.438 0.297 0.703zM24 8.5v11c0 2.484-2.016 4.5-4.5 4.5h-5c-0.266 0-0.5-0.234-0.5-0.5 0-0.438-0.203-1.5 0.5-1.5h5c1.375 0 2.5-1.125 2.5-2.5v-11c0-1.375-1.125-2.5-2.5-2.5h-4.5c-0.391 0-1 0.078-1-0.5 0-0.438-0.203-1.5 0.5-1.5h5c2.484 0 4.5 2.016 4.5 4.5z"/>
</symbol><symbol id="cog" viewBox="0 0 24 28">
<path d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM24 12.297v3.469c0 0.234-0.187 0.516-0.438 0.562l-2.891 0.438c-0.172 0.5-0.359 0.969-0.609 1.422 0.531 0.766 1.094 1.453 1.672 2.156 0.094 0.109 0.156 0.25 0.156 0.391s-0.047 0.25-0.141 0.359c-0.375 0.5-2.484 2.797-3.016 2.797-0.141 0-0.281-0.063-0.406-0.141l-2.156-1.687c-0.453 0.234-0.938 0.438-1.422 0.594-0.109 0.953-0.203 1.969-0.453 2.906-0.063 0.25-0.281 0.438-0.562 0.438h-3.469c-0.281 0-0.531-0.203-0.562-0.469l-0.438-2.875c-0.484-0.156-0.953-0.344-1.406-0.578l-2.203 1.672c-0.109 0.094-0.25 0.141-0.391 0.141s-0.281-0.063-0.391-0.172c-0.828-0.75-1.922-1.719-2.578-2.625-0.078-0.109-0.109-0.234-0.109-0.359 0-0.141 0.047-0.25 0.125-0.359 0.531-0.719 1.109-1.406 1.641-2.141-0.266-0.5-0.484-1.016-0.641-1.547l-2.859-0.422c-0.266-0.047-0.453-0.297-0.453-0.562v-3.469c0-0.234 0.187-0.516 0.422-0.562l2.906-0.438c0.156-0.5 0.359-0.969 0.609-1.437-0.531-0.75-1.094-1.453-1.672-2.156-0.094-0.109-0.156-0.234-0.156-0.375s0.063-0.25 0.141-0.359c0.375-0.516 2.484-2.797 3.016-2.797 0.141 0 0.281 0.063 0.406 0.156l2.156 1.672c0.453-0.234 0.938-0.438 1.422-0.594 0.109-0.953 0.203-1.969 0.453-2.906 0.063-0.25 0.281-0.438 0.562-0.438h3.469c0.281 0 0.531 0.203 0.562 0.469l0.438 2.875c0.484 0.156 0.953 0.344 1.406 0.578l2.219-1.672c0.094-0.094 0.234-0.141 0.375-0.141s0.281 0.063 0.391 0.156c0.828 0.766 1.922 1.734 2.578 2.656 0.078 0.094 0.109 0.219 0.109 0.344 0 0.141-0.047 0.25-0.125 0.359-0.531 0.719-1.109 1.406-1.641 2.141 0.266 0.5 0.484 1.016 0.641 1.531l2.859 0.438c0.266 0.047 0.453 0.297 0.453 0.562z"/>
</symbol><symbol id="logout" viewBox="0 0 25 28">
<path d="M10 22.5c0 0.438 0.203 1.5-0.5 1.5h-5c-2.484 0-4.5-2.016-4.5-4.5v-11c0-2.484 2.016-4.5 4.5-4.5h5c0.266 0 0.5 0.234 0.5 0.5 0 0.438 0.203 1.5-0.5 1.5h-5c-1.375 0-2.5 1.125-2.5 2.5v11c0 1.375 1.125 2.5 2.5 2.5h4.5c0.391 0 1-0.078 1 0.5zM24.5 14c0 0.266-0.109 0.516-0.297 0.703l-8.5 8.5c-0.187 0.187-0.438 0.297-0.703 0.297-0.547 0-1-0.453-1-1v-4.5h-7c-0.547 0-1-0.453-1-1v-6c0-0.547 0.453-1 1-1h7v-4.5c0-0.547 0.453-1 1-1 0.266 0 0.516 0.109 0.703 0.297l8.5 8.5c0.187 0.187 0.297 0.438 0.297 0.703z"/>
</symbol>
<symbol id="close" viewBox="0 0 512 512">
<path d="M437.5 386.6L307 256l130.5-130.6c14-14 14-36.8 0-51-14-14-36.8-14-51 0L256 205.2 125.4 74.6c-14-14-36.8-14-51 0-14 14-14 36.8 0 51L205.2 256 74.6 386.6c-14 14-14 36.8 0 51 14 14 36.8 14 51 0L256 306.8l130.6 130.5c14 14 36.8 14 51 0 14-14 14-37 0-51z"></path>
</symbol>
</svg><nav class="nav-header"><div class="container">
<span class="logo">
<a href="/" class="hbo-go">HBO GO</a>
</span><ul class='main-menu'><li class='main-menu-item has-children'><a href='/serije'>SERIJE</a><div class='sub-menu'><ul class='child-menu-items'><li><a href='/serije/novo'>Novo</a></li><li><a href='/serije/najgledanije'>Najgledanije</a></li><li><a href='/serije/imdb-toplist'>IMDb top</a></li><li><a href='/serije/hbo-originalna-produkcija-serije'>HBO produkcija</a></li><li><a href='/serije/uskoro'>Uskoro</a></li></ul><ul class='child-menu-items'><li><a href='/serije/drama'>Drama</a></li><li><a href='/serije/komedija'>Komedija</a></li><li><a href='/serije/krimi-triler'>Krimi, triler</a></li><li><a href='/serije/sf'>SF, fantazija</a></li><li><a href='/serije/dokumentarac'>Dokumentarni </a></li><li><a href='/serije/other'>Ostalo</a></li></ul></div><li class='main-menu-item has-children'><a href='/filmovi'>FILMOVI</a><div class='sub-menu'><ul class='child-menu-items'><li><a href='/filmovi/novo'>Novo</a></li><li><a href='/filmovi/weekly-top-20'>Najgledanije</a></li><li><a href='/filmovi/imdb-toplist'>IMDb toplist</a></li><li><a href='/filmovi/hbo-originalna-produkcija-filmovi'>HBO produkcija</a></li><li><a href='/filmovi/uskoro'>Uskoro</a></li></ul><ul class='child-menu-items'><li><a href='/filmovi/akcija-avantura'>Akcija, avantura</a></li><li><a href='/filmovi/drama'>Drama</a></li><li><a href='/filmovi/komedija'>Komedija</a></li><li><a href='/filmovi/krimi'>Krimi</a></li><li><a href='/filmovi/romansa'>Romantični</a></li><li><a href='/filmovi/triler-horor'>Triler, horor</a></li></ul><ul class='child-menu-items'><li><a href='/filmovi/sf-fantazija'>SF, fantazija</a></li><li><a href='/filmovi/porodični'>Porodični</a></li><li><a href='/filmovi/dokumentarac'>Dokumentarni</a></li><li><a href='/filmovi/muzika'>Muzički</a></li><li><a href='/filmovi/specijal'>Ostalo</a></li></ul></div><li class='main-menu-item'><a href='/kids'>KIDS</a><li class='main-menu-item '><a href='/program'>NAJAVA PROGRAMA</a></li></li><li class='main-menu-item'><a href='/search'><img class='search-icon' src='/assets/img/search.svg'></a></li></ul><div class="navbar-inline"><div class="user logged-out hidden">
<span id="signup" class="user-link btn primary selected">Registracija</span>
<span id="signin" class="user-link btn secondary selected">Prijava</span></div><div class="user logged-in hidden">
<img src="/assets/img/user.svg">
<span id="settings">Podešavanja</span></div></div></div></nav><main class="maincontent"><style>.module.spotlight-114{background-image:url('//hboeu.azureedge.net/uiimages/1B2522A8-1BE7-4D9F-8479-F6CAAC7B7D95/original.jpg');background-size: contain;  background-position: left top;margin-top:65px;margin-bottom:0;height:396px}@media screen and (max-width: 1920px) {
  .module.spotlight-114 { height: calc((100vw/1920) *480) !important; }
}
@media screen and (min-width: 1921px) {
  .module.spotlight-114 { height: 480px !important; }
}.module.spotlight-114 .text .btn{ background-color:#e1981a;}.module.spotlight-114 .text .btn{ box-shadow: 0 0 0 1px #e1981a inset;}.module.spotlight-114 .text .btn:hover{ background-color:#fab133;}.module.spotlight-114 .text .h1 { width: 100%}.module.spotlight-114 .text .body { width: 100%}@media screen and (max-width:1280px){.module.spotlight-114{height:295px}}</style><div class="module spotlight spotlight-114 align-left-bottom module-alignment-left"><div class="text"></div></div><style>@media screen and (max-width:1280px) {
    .module.spotlight-112 {
        height: 302px;
    }
}</style><div class="module html-module html-117" style="margin-top:0;margin-bottom:0"></div><style>.module.spotlight-113{background-size: cover;  background-position: left top;margin-top:0;margin-bottom:0}.module.spotlight-113 .text .btn{ background-color:#e1981a;}.module.spotlight-113 .text .btn{ box-shadow: 0 0 0 1px #e1981a inset;}.module.spotlight-113 .text .btn:hover{ background-color:#fab133;}.module.spotlight-113 .text .h1 { width: 100%}.module.spotlight-113 .text .body { width: 100%}</style><div class="module spotlight spotlight-113 align-center-top module-alignment-left"><div class="text"><div class="h1 font-light">Gledaj Emijem nagrađene HBO serije i još mnogo toga</div><div class="body">Isprobaj 7 dana besplatno. Otkaži kad poželiš.</div>
<br>
<span class="btn primary selected btn-type-l gateway-subpage-register-d2c">ISPROBAJ 7 DANA BESPLATNO</span></div></div><style>.module.module-shelf-42{width:100%}.module-shelf-42 .module-stripe-item{border-color:#b5b5b5}.module-stripe-item-34{background-size: cover;  background-position: left top}.module-stripe-item-34 .text .h1 { width: 100%}.module-stripe-item-34 .text .body { width: 100%}.module-stripe-item-264{background-size: cover;  background-position: left top}.module-stripe-item-264 .text .btn{ background-color:#e1981a;}.module-stripe-item-264 .text .btn{ box-shadow: 0 0 0 1px #e1981a inset;}.module-stripe-item-264 .text .btn:hover{ background-color:#fab133;}.module-stripe-item-264 .text .h1 { width: 100%}.module-stripe-item-264 .text .body { width: 100%}.module-stripe-item-35{background-size: cover;  background-position: left top}.module-stripe-item-35 .text .h1 { width: 100%}.module-stripe-item-35 .text .body { width: 100%}</style><div class="module module-shelf-module module-shelf-42"><div class="module-stripe-items-container"><div class="module-stripe-item module-stripe-item-34 align-center"><div class="text"><h2 class="font-light">Sve sezone. Sve epizode.</h2><div class="body">HBO GO ti donosi sve sezone hit serija i najbolji izbor žanrova. Gledaj kad god želiš. Sve je prevedeno.</div></div></div><div class="module-stripe-item module-stripe-item-264 align-center"><div class="text"><h2 class="font-light">7 dana besplatno. Bez ugovorne obaveze.</h2><div class="body">Novi korisnici dobijaju 7 dana da isprobaju uslugu besplatno. Nakon toga, cena iznosi 5.99 eura mesečno. Uslugu možeš da otkažeš u podešavanjima naloga.</div></div></div><div class="module-stripe-item module-stripe-item-35 align-center"><div class="text"><h2 class="font-light">HBO GO je dostupan i kod odabranih operatera.</h2><div class="body">Pretplati se na HBO GO kod svog operatera.<br />Ako imaš HBO GO nalog, prijavi se odmah i uživaj u sadržaju.</div></div></div></div></div><div class="module shelf-module shelf-334"><div class="shelf-content"><header class="shelf-header"><div class="shelf-title" data-eng-title="HBO’s Emmy® wins this year"><h2 class="font-light">
Ovogodišnji HBO dobitnici Emija</h2></div></header><div class="fl-shelf-arrow arrowLeft fl-shelf-arrow-hidden"></div><div class="shelf shelf-710-l fl-shelf"><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="106423" data-vcms-content-type="2" data-eng-title="Watchmen" data-modal-open-id="1867" data-available-date="1576461600" data-hint="">
<a class="item-link" href="/serije/nadziraci" data-background-image="//cdn.hbogo.eu/images/50BD91CB-63B9-4234-99A8-7FC3D5F3B27F/262_374.jpg">
<span class="text under">
<span class="title">Nadzirači</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">akcija, zasnovano na stripovima</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="13179" data-vcms-content-type="2" data-eng-title="Succession" data-modal-open-id="1813" data-available-date="1591221600" data-hint="">
<a class="item-link" href="/serije/naslednici" data-background-image="//cdn.hbogo.eu/images/CEE1B7BF-F299-4576-A305-9B08A9AAB0E4/262_374.jpg">
<span class="text under">
<span class="title">Naslednici</span><br>
<span class="year">2018-19 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="12181" data-vcms-content-type="2" data-eng-title="Last Week Tonight with John Oliver" data-modal-open-id="2021" data-available-date="1601920800" data-hint="">
<a class="item-link" href="/serije/pregled-protekle-nedelje-sa-dzonom-oliverom" data-background-image="//cdn.hbogo.eu/images/761E8CD6-A9E4-47B4-9C03-E96E96B2A016/262_374.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">Pregled protekle nedelje sa Džonom Oliverom </span><br>
<span class="year">2014-20 </span><span class="sep">|</span>
<span class="genres">komedija, ostalo</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="106419" data-vcms-content-type="2" data-eng-title="Euphoria" data-modal-open-id="1767" data-available-date="1564970400" data-hint="">
<a class="item-link" href="/serije/euforija" data-background-image="//cdn.hbogo.eu/images/BED87C96-6005-494E-82C3-4FBF6AB475D8/262_374.jpg">
<span class="text under">
<span class="title">Euforija</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="108484" data-vcms-content-type="2" data-eng-title="I Know This Much Is True" data-modal-open-id="2089" data-available-date="1592182800" data-hint="">
<a class="item-link" href="/serije/znam-da-je-ovo-istina" data-background-image="//cdn.hbogo.eu/images/681CE941-AAF8-470A-BB65-CA65CD11FD78/262_374.jpg">
<span class="text under">
<span class="title">Znam da je ovo istina</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="-113120" data-vcms-content-type="1" data-eng-title="Bad Education" data-modal-open-id="58631" data-available-date="1587859200" data-hint="">
<a class="item-link" href="/filmovi/lose-obrazovanje" data-background-image="//cdn.hbogo.eu/images/7280E572-9850-4FB3-B595-8FD95F5F41E9/262_374.jpg">
<span class="text under">
<span class="title">Loše obrazovanje</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">komedija, krimić</span>
</span>
</a>
<a class="playbtn" href="/filmovi/lose-obrazovanje#play" data-content-type="1" data-external-id="-113120"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="12466" data-vcms-content-type="2" data-eng-title="Insecure" data-modal-open-id="2080" data-available-date="1597269600" data-hint="">
<a class="item-link" href="/serije/nesigurna" data-background-image="//cdn.hbogo.eu/images/8C6DEC07-2CF4-484F-9394-66DFE3054E9B/262_374.jpg">
<span class="text under">
<span class="title">Nesigurna</span><br>
<span class="year">2016-20 </span><span class="sep">|</span>
<span class="genres">komedija, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="-109582" data-vcms-content-type="1" data-eng-title="The Apollo" data-modal-open-id="52380" data-available-date="1573092000" data-hint="">
<a class="item-link" href="/filmovi/pozoriste-apolo" data-background-image="//cdn.hbogo.eu/images/380D09B1-D076-4A68-8202-5C117D41E68C/262_374.jpg">
<span class="text under">
<span class="title">Pozorište Apolo </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">dokumentarac</span>
</span>
</a>
<a class="playbtn" href="/filmovi/pozoriste-apolo#play" data-content-type="1" data-external-id="-109582"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="-112083" data-vcms-content-type="1" data-eng-title="We Are the Dream: The Kids of the Oakland MLK Festival" data-modal-open-id="55047" data-available-date="1582066800" data-hint="">
<a class="item-link" href="/filmovi/mi-smo-san-naslede-dr-kinga" data-background-image="//cdn.hbogo.eu/images/2CF16EE8-D934-4E48-92BE-DFC3E5C03419/262_374.jpg">
<span class="text under">
<span class="title">Mi smo san: Nasleđe dr Kinga </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">dokumentarac</span>
</span>
</a>
<a class="playbtn" href="/filmovi/mi-smo-san-naslede-dr-kinga#play" data-content-type="1" data-external-id="-112083"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="108303" data-vcms-content-type="2" data-eng-title="Mrs. America" data-modal-open-id="2082" data-available-date="1590789600" data-hint="">
<a class="item-link" href="/serije/gospoda-amerika" data-background-image="//cdn.hbogo.eu/images/2DB11EB8-AD01-446E-9F0A-4B06DAE4AE0D/262_374.jpg">
<span class="text under">
<span class="title">Gospođa Amerika</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="11801" data-vcms-content-type="2" data-eng-title="Curb Your Enthusiasm" data-modal-open-id="1260" data-available-date="1584932400" data-hint="">
<a class="item-link" href="/serije/bez-odusevljavanja-molim" data-background-image="//cdn.hbogo.eu/images/F6613EA9-17E8-4D13-9ADC-CDAB0C04833C/262_374.jpg">
<span class="text under">
<span class="title">Bez oduševljavanja, molim</span><br>
<span class="year">2000-20 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="85545" data-vcms-content-type="2" data-eng-title="Black Monday" data-modal-open-id="2047" data-available-date="1595221200" data-hint="">
<a class="item-link" href="/serije/crni-ponedeljak" data-background-image="//cdn.hbogo.eu/images/96B0764B-4687-4F18-98D2-61A2F26F9B4F/262_374.jpg">
<span class="text under">
<span class="title">Crni ponedeljak</span><br>
<span class="year">2019-20 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="49554" data-vcms-content-type="2" data-eng-title="Killing Eve" data-modal-open-id="2090" data-available-date="1590980400" data-hint="">
<a class="item-link" href="/serije/ubiti-iv" data-background-image="//cdn.hbogo.eu/images/DF6623E4-C0CE-4541-9F72-4103D11A9D92/262_374.jpg">
<span class="text under">
<span class="title">Ubiti Iv</span><br>
<span class="year">2018-20 </span><span class="sep">|</span>
<span class="genres">krimić, triler</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="108466" data-vcms-content-type="2" data-eng-title="The Great" data-modal-open-id="2083" data-available-date="1589626800" data-hint="">
<a class="item-link" href="/serije/velika" data-background-image="//cdn.hbogo.eu/images/40BB370C-8FA0-47C7-916D-AF9FF2309063/262_374.jpg">
<span class="text under">
<span class="title">Velika</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">istorijski, dramske komedije</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="108301" data-vcms-content-type="2" data-eng-title="Devs" data-modal-open-id="2038" data-available-date="1587024000" data-hint="">
<a class="item-link" href="/serije/devs" data-background-image="//cdn.hbogo.eu/images/90D88204-E881-4856-9819-E26DC34C2497/262_374.jpg">
<span class="text under">
<span class="title">Devs</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="110671" data-vcms-content-type="2" data-eng-title="Ramy" data-modal-open-id="2166" data-available-date="1595368800" data-hint="">
<a class="item-link" href="/serije/rami" data-background-image="//cdn.hbogo.eu/images/198A5D43-28E2-4812-A8E2-405627001CEE/262_374.jpg">
<span class="text under">
<span class="title">Rami</span><br>
<span class="year">2019-20 </span><span class="sep">|</span>
<span class="genres">dramske komedije</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="106923" data-vcms-content-type="2" data-eng-title="The Plot Against America" data-modal-open-id="2055" data-available-date="1587430800" data-hint="">
<a class="item-link" href="/serije/zavera-protiv-amerike" data-background-image="//cdn.hbogo.eu/images/0D8F3161-BA69-4C88-AEE3-1A14DD16D161/262_374.jpg">
<span class="text under">
<span class="title">Zavera protiv Amerike</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="12709" data-vcms-content-type="2" data-eng-title="The Handmaid's Tale" data-modal-open-id="1754" data-available-date="1587852000" data-hint="">
<a class="item-link" href="/serije/sluskinjina-prica" data-background-image="//cdn.hbogo.eu/images/1D773A34-51F4-4CC7-A7C6-BD83D3177785/262_374.jpg">
<span class="text under">
<span class="title">Sluškinjina priča</span><br>
<span class="year">2017-19 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="12268" data-vcms-content-type="2" data-eng-title="Westworld" data-modal-open-id="2049" data-available-date="1588554000" data-hint="">
<a class="item-link" href="/serije/zapadni-svet" data-background-image="//cdn.hbogo.eu/images/F71EAF8C-4D44-41BE-95DB-092E28AA01F4/262_374.jpg">
<span class="text under">
<span class="title">Zapadni svet</span><br>
<span class="year">2016-20 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item" data-type="series" data-external-id="12326" data-vcms-content-type="2" data-eng-title="Big Little Lies" data-modal-open-id="1758" data-available-date="1563757200" data-hint="">
<a class="item-link" href="/serije/nevine-lazi" data-background-image="//cdn.hbogo.eu/images/C77AF072-91AB-4EE3-9F53-BE59745F9927/262_374.jpg">
<span class="text under">
<span class="title">Nevine laži</span><br>
<span class="year">2017-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div></div><div class="fl-shelf-arrow arrowRight fl-shelf-arrow-hidden"></div></div></div><div class="module shelf-module shelf-239"><div class="shelf-content"><header class="shelf-header"><div class="shelf-title" data-eng-title="Top series"><h2 class="font-light">
Top serije</h2></div></header><div class="fl-shelf-arrow arrowLeft fl-shelf-arrow-hidden"></div><div class="shelf shelf-710-s fl-shelf"><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="112103" data-vcms-content-type="2" data-eng-title="Other Parents" data-modal-open-id="3077" data-available-date="1601506800" data-hint="">
<a class="item-link" href="/serije/drugi-roditelji" data-background-image="//cdn.hbogo.eu/images/980D0393-E8CA-46E7-AFE9-008A47907FB6/190_271.jpg"><div class="ribbon ribbon-series-premier">Premijera serije</div>		<span class="text under">
<span class="title">Drugi roditelji</span><br>
<span class="year">2019-20 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12397" data-vcms-content-type="2" data-eng-title="The Walking Dead" data-modal-open-id="2732" data-available-date="1602021600" data-hint="">
<a class="item-link" href="/serije/okruzen-mrtvima" data-background-image="//cdn.hbogo.eu/images/7A95E567-BEDA-4C80-8AEF-89ED7CBD771A/190_271.jpg"><div class="ribbon ribbon-premier">Premijera</div>		<span class="text under">
<span class="title">Okružen mrtvima </span><br>
<span class="year">2010-19 </span><span class="sep">|</span>
<span class="genres">drama, horor</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="111016" data-vcms-content-type="2" data-eng-title="Trigonometry " data-modal-open-id="2886" data-available-date="1601676000" data-hint="">
<a class="item-link" href="/serije/trigonometrija" data-background-image="//cdn.hbogo.eu/images/79181DFB-C3E2-4AE7-A7A8-1AD00629927F/190_271.jpg"><div class="ribbon ribbon-series-premier">Premijera serije</div>		<span class="text under">
<span class="title">Trigonometrija</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">romantični, dramske komedije</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="101383" data-vcms-content-type="2" data-eng-title="Warrior" data-modal-open-id="3051" data-available-date="1601690400" data-hint="">
<a class="item-link" href="/serije/ratnik" data-background-image="//cdn.hbogo.eu/images/9D1D26D7-7AF2-4785-BF8E-77FE336236D4/190_271.jpg"><div class="ribbon ribbon-premier">Premijera</div>		<span class="text under">
<span class="title">Ratnik</span><br>
<span class="year">2019-20 </span><span class="sep">|</span>
<span class="genres">akcija, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106508" data-vcms-content-type="2" data-eng-title="Patria" data-modal-open-id="2095" data-available-date="1601762400" data-hint="">
<a class="item-link" href="/serije/otadzbina" data-background-image="//cdn.hbogo.eu/images/5434B9EB-E033-4E4F-BEB7-260AEC7F5E1B/190_271.jpg"><div class="ribbon ribbon-series-premier">Premijera serije</div>		<span class="text under">
<span class="title">Otadžbina</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106919" data-vcms-content-type="2" data-eng-title="The Third Day" data-modal-open-id="2084" data-available-date="1601946000" data-hint="">
<a class="item-link" href="/serije/treci-dan" data-background-image="//cdn.hbogo.eu/images/DCA70965-6E22-4FBB-AFD4-F9F8830ABC48/190_271.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">Treći dan</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="110540" data-vcms-content-type="2" data-eng-title="We Are Who We Are" data-modal-open-id="3003" data-available-date="1601953200" data-hint="">
<a class="item-link" href="/serije/to-smo-sto-smo" data-background-image="//cdn.hbogo.eu/images/8529197D-BE74-4962-A6F0-8BC477081F15/190_271.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">To smo što smo</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="110282" data-vcms-content-type="2" data-eng-title="Raised by Wolves" data-modal-open-id="3012" data-available-date="1601622000" data-hint="">
<a class="item-link" href="/serije/vucje-vaspitanje" data-background-image="//cdn.hbogo.eu/images/7E425C47-03E4-4424-9EDC-E258C13D02B1/190_271.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">Vučje vaspitanje</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="112469" data-vcms-content-type="2" data-eng-title="Des" data-modal-open-id="3066" data-available-date="1600293600" data-hint="">
<a class="item-link" href="/serije/des" data-background-image="//cdn.hbogo.eu/images/7382BBAA-F5B1-4D5A-B629-2346EA566CC1/190_271.jpg">
<span class="text under">
<span class="title">Des</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="85201" data-vcms-content-type="2" data-eng-title="Manifest" data-modal-open-id="1982" data-available-date="1598911200" data-hint="">
<a class="item-link" href="/serije/manifest" data-background-image="//cdn.hbogo.eu/images/5F50DF9D-9D89-4F69-8F6B-F90C28075353/190_271.jpg">
<span class="text under">
<span class="title">Manifest</span><br>
<span class="year">2018-20 </span><span class="sep">|</span>
<span class="genres">detektivski, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106476" data-vcms-content-type="2" data-eng-title="Condor" data-modal-open-id="2747" data-available-date="1599170400" data-hint="">
<a class="item-link" href="/serije/kondor" data-background-image="//cdn.hbogo.eu/images/4E460479-9CBA-45F8-9DC6-2119ABB2858B/190_271.jpg">
<span class="text under">
<span class="title">Kondor</span><br>
<span class="year">2018-20 </span><span class="sep">|</span>
<span class="genres">akcija, triler</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="14434" data-vcms-content-type="2" data-eng-title="Blindspot" data-modal-open-id="2919" data-available-date="1599256800" data-hint="">
<a class="item-link" href="/serije/sifra-zlocina" data-background-image="//cdn.hbogo.eu/images/6715E441-C757-4F6A-9AE5-B52DF5852C45/190_271.jpg">
<span class="text under">
<span class="title">Šifra zločina</span><br>
<span class="year">2015-20 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="101387" data-vcms-content-type="2" data-eng-title="The Vow" data-modal-open-id="2902" data-available-date="1601863200" data-hint="">
<a class="item-link" href="/serije/zavet" data-background-image="//cdn.hbogo.eu/images/D1ECA63F-FE70-44F8-A470-C1B55C8AC3F8/190_271.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">Zavet</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">dokumentarac</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="109382" data-vcms-content-type="2" data-eng-title="Lovecraft Country" data-modal-open-id="2196" data-available-date="1601859600" data-hint="">
<a class="item-link" href="/serije/lavkraftova-zemlja" data-background-image="//cdn.hbogo.eu/images/7507250C-D85D-4E49-8EE5-034BB04969DD/190_271.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">Lavkraftova zemlja</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama, horor</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106506" data-vcms-content-type="2" data-eng-title="One Way or Another" data-modal-open-id="2134" data-available-date="1596837600" data-hint="">
<a class="item-link" href="/serije/milom-ili-silom" data-background-image="//cdn.hbogo.eu/images/AFF1AD8A-68E6-4A7F-93F1-C25784CD07B8/190_271.jpg">
<span class="text under">
<span class="title">Milom ili silom</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12385" data-vcms-content-type="2" data-eng-title="Ash vs Evil Dead" data-modal-open-id="749" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/serije/es-protiv-zlih-mrtvaca" data-background-image="//cdn.hbogo.eu/images/7EDBAD1D-7F46-43D1-B0A7-A324A6949AEC/190_271.jpg">
<span class="text under">
<span class="title">Eš protiv zlih mrtvaca</span><br>
<span class="year">2015-17 </span><span class="sep">|</span>
<span class="genres">komedija, horor</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12586" data-vcms-content-type="2" data-eng-title="Room 104" data-modal-open-id="2182" data-available-date="1601694000" data-hint="">
<a class="item-link" href="/serije/soba-104" data-background-image="//cdn.hbogo.eu/images/B54A0B46-AF3D-40C6-A725-4F24C1245281/190_271.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">Soba 104</span><br>
<span class="year">2017-20 </span><span class="sep">|</span>
<span class="genres">ostalo, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="109991" data-vcms-content-type="2" data-eng-title="Quiz" data-modal-open-id="2147" data-available-date="1594418400" data-hint="">
<a class="item-link" href="/serije/kviz" data-background-image="//cdn.hbogo.eu/images/1A2BAD02-447D-4662-A448-409A68130E7B/190_271.jpg">
<span class="text under">
<span class="title">Kviz</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108482" data-vcms-content-type="2" data-eng-title="Perry Mason" data-modal-open-id="2133" data-available-date="1597021200" data-hint="">
<a class="item-link" href="/serije/peri-mejson" data-background-image="//cdn.hbogo.eu/images/0B428541-0DC3-405B-BEC3-8662FCDD0C5F/190_271.jpg">
<span class="text under">
<span class="title">Peri Mejson</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106498" data-vcms-content-type="2" data-eng-title="Doom Patrol" data-modal-open-id="2130" data-available-date="1596783600" data-hint="">
<a class="item-link" href="/serije/patrola-prokletih" data-background-image="//cdn.hbogo.eu/images/6640ECDD-B21D-419B-AF13-04E347A0D705/190_271.jpg">
<span class="text under">
<span class="title">Patrola prokletih</span><br>
<span class="year">2019-20 </span><span class="sep">|</span>
<span class="genres">akcija, zasnovano na stripovima</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="109377" data-vcms-content-type="2" data-eng-title="4 Blocks" data-modal-open-id="2149" data-available-date="1593554400" data-hint="">
<a class="item-link" href="/serije/cetiri-bloka" data-background-image="//cdn.hbogo.eu/images/301DFED6-F1E1-4B96-A9ED-F178EA7501BB/190_271.jpg">
<span class="text under">
<span class="title">Četiri bloka</span><br>
<span class="year">2017-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108492" data-vcms-content-type="2" data-eng-title="I May Destroy You" data-modal-open-id="2122" data-available-date="1598317200" data-hint="">
<a class="item-link" href="/serije/mogu-da-te-unistim" data-background-image="//cdn.hbogo.eu/images/5C1ABA32-7DBA-4DB9-BA42-5F659ABDD7D9/190_271.jpg">
<span class="text under">
<span class="title">Mogu da te uništim </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="110669" data-vcms-content-type="2" data-eng-title="Love Life" data-modal-open-id="2169" data-available-date="1591858860" data-hint="">
<a class="item-link" href="/serije/ljubavni-zivot" data-background-image="//cdn.hbogo.eu/images/A05AE1BE-3898-40DF-965C-4CC1DDB859F0/190_271.jpg">
<span class="text under">
<span class="title">Ljubavni život</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">romantični, komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108466" data-vcms-content-type="2" data-eng-title="The Great" data-modal-open-id="2083" data-available-date="1589626800" data-hint="">
<a class="item-link" href="/serije/velika" data-background-image="//cdn.hbogo.eu/images/40BB370C-8FA0-47C7-916D-AF9FF2309063/190_271.jpg">
<span class="text under">
<span class="title">Velika</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">istorijski, dramske komedije</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106626" data-vcms-content-type="2" data-eng-title="Stargirl" data-modal-open-id="2104" data-available-date="1597129200" data-hint="">
<a class="item-link" href="/serije/zvezdana-devojka" data-background-image="//cdn.hbogo.eu/images/627365D9-7F80-45C3-8F69-0B2BCFF2E830/190_271.jpg">
<span class="text under">
<span class="title">Zvezdana devojka</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">akcija, zasnovano na stripovima</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108484" data-vcms-content-type="2" data-eng-title="I Know This Much Is True" data-modal-open-id="2089" data-available-date="1592182800" data-hint="">
<a class="item-link" href="/serije/znam-da-je-ovo-istina" data-background-image="//cdn.hbogo.eu/images/681CE941-AAF8-470A-BB65-CA65CD11FD78/190_271.jpg">
<span class="text under">
<span class="title">Znam da je ovo istina</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12686" data-vcms-content-type="2" data-eng-title="Billions" data-modal-open-id="2086" data-available-date="1598911200" data-hint="">
<a class="item-link" href="/serije/milijarde" data-background-image="//cdn.hbogo.eu/images/0AABE30E-FCBD-4B44-A087-B9C466CAE2A3/190_271.jpg">
<span class="text under">
<span class="title">Milijarde</span><br>
<span class="year">2016-20 </span><span class="sep">|</span>
<span class="genres">drama, politički</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106608" data-vcms-content-type="2" data-eng-title="Star Wars: The Clone Wars" data-modal-open-id="1934" data-available-date="1590098400" data-hint="">
<a class="item-link" href="/serije/ratovi-zvezda-ratovi-klonova" data-background-image="//cdn.hbogo.eu/images/21300F86-1AF2-4DBC-8071-0A0A11DD95F4/190_271.jpg">
<span class="text under">
<span class="title">Ratovi zvezda: Ratovi klonova</span><br>
<span class="year">2008-12 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="109206" data-vcms-content-type="2" data-eng-title="Penny Dreadful: City of Angels" data-modal-open-id="2103" data-available-date="1593320400" data-hint="">
<a class="item-link" href="/serije/peni-dredful-grad-andela" data-background-image="//cdn.hbogo.eu/images/B8B4959E-EED5-4CD0-B0C3-C7BA66235EF4/190_271.jpg">
<span class="text under">
<span class="title">Peni Dredful: Grad anđela</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama, horor</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108303" data-vcms-content-type="2" data-eng-title="Mrs. America" data-modal-open-id="2082" data-available-date="1590789600" data-hint="">
<a class="item-link" href="/serije/gospoda-amerika" data-background-image="//cdn.hbogo.eu/images/2DB11EB8-AD01-446E-9F0A-4B06DAE4AE0D/190_271.jpg">
<span class="text under">
<span class="title">Gospođa Amerika</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="49554" data-vcms-content-type="2" data-eng-title="Killing Eve" data-modal-open-id="2090" data-available-date="1590980400" data-hint="">
<a class="item-link" href="/serije/ubiti-iv" data-background-image="//cdn.hbogo.eu/images/DF6623E4-C0CE-4541-9F72-4103D11A9D92/190_271.jpg">
<span class="text under">
<span class="title">Ubiti Iv</span><br>
<span class="year">2018-20 </span><span class="sep">|</span>
<span class="genres">krimić, triler</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12466" data-vcms-content-type="2" data-eng-title="Insecure" data-modal-open-id="2080" data-available-date="1597269600" data-hint="">
<a class="item-link" href="/serije/nesigurna" data-background-image="//cdn.hbogo.eu/images/8C6DEC07-2CF4-484F-9394-66DFE3054E9B/190_271.jpg">
<span class="text under">
<span class="title">Nesigurna</span><br>
<span class="year">2016-20 </span><span class="sep">|</span>
<span class="genres">komedija, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108488" data-vcms-content-type="2" data-eng-title="Run" data-modal-open-id="2079" data-available-date="1590373800" data-hint="">
<a class="item-link" href="/serije/bekstvo" data-background-image="//cdn.hbogo.eu/images/431B70FB-BC57-4553-9E1F-D5DDAD479E2E/190_271.jpg">
<span class="text under">
<span class="title">Bekstvo</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">romantični, komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="48010" data-vcms-content-type="2" data-eng-title="Siren" data-modal-open-id="2074" data-available-date="1592258400" data-hint="">
<a class="item-link" href="/serije/sirena" data-background-image="//cdn.hbogo.eu/images/D88A3D67-51F0-4AD5-9F60-853D3653E9EB/190_271.jpg">
<span class="text under">
<span class="title">Sirena</span><br>
<span class="year">2018-20 </span><span class="sep">|</span>
<span class="genres">drama, fantazija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12268" data-vcms-content-type="2" data-eng-title="Westworld" data-modal-open-id="2049" data-available-date="1588554000" data-hint="">
<a class="item-link" href="/serije/zapadni-svet" data-background-image="//cdn.hbogo.eu/images/F71EAF8C-4D44-41BE-95DB-092E28AA01F4/190_271.jpg">
<span class="text under">
<span class="title">Zapadni svet</span><br>
<span class="year">2016-20 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12784" data-vcms-content-type="2" data-eng-title="The Good Fight" data-modal-open-id="2077" data-available-date="1593640800" data-hint="">
<a class="item-link" href="/serije/dobra-borba" data-background-image="//cdn.hbogo.eu/images/0F4816F2-CBF5-46AD-A5F7-7DDCA9151DA2/190_271.jpg">
<span class="text under">
<span class="title">Dobra borba</span><br>
<span class="year">2017-20 </span><span class="sep">|</span>
<span class="genres">drama, politički</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106923" data-vcms-content-type="2" data-eng-title="The Plot Against America" data-modal-open-id="2055" data-available-date="1587430800" data-hint="">
<a class="item-link" href="/serije/zavera-protiv-amerike" data-background-image="//cdn.hbogo.eu/images/0D8F3161-BA69-4C88-AEE3-1A14DD16D161/190_271.jpg">
<span class="text under">
<span class="title">Zavera protiv Amerike</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="85197" data-vcms-content-type="2" data-eng-title="Roswell, New Mexico" data-modal-open-id="2054" data-available-date="1592290800" data-hint="">
<a class="item-link" href="/serije/rozvel-novi-meksiko" data-background-image="//cdn.hbogo.eu/images/AFAEBF41-DAFD-47C9-BE09-212C7630A4F0/190_271.jpg">
<span class="text under">
<span class="title">Rozvel: Novi Meksiko</span><br>
<span class="year">2019-20 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="85545" data-vcms-content-type="2" data-eng-title="Black Monday" data-modal-open-id="2047" data-available-date="1595221200" data-hint="">
<a class="item-link" href="/serije/crni-ponedeljak" data-background-image="//cdn.hbogo.eu/images/96B0764B-4687-4F18-98D2-61A2F26F9B4F/190_271.jpg">
<span class="text under">
<span class="title">Crni ponedeljak</span><br>
<span class="year">2019-20 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108301" data-vcms-content-type="2" data-eng-title="Devs" data-modal-open-id="2038" data-available-date="1587024000" data-hint="">
<a class="item-link" href="/serije/devs" data-background-image="//cdn.hbogo.eu/images/90D88204-E881-4856-9819-E26DC34C2497/190_271.jpg">
<span class="text under">
<span class="title">Devs</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108296" data-vcms-content-type="2" data-eng-title="Breeders" data-modal-open-id="2033" data-available-date="1588057200" data-hint="">
<a class="item-link" href="/serije/roditelji" data-background-image="//cdn.hbogo.eu/images/CC4201C1-F78C-4632-94C0-AF1195EE58E8/190_271.jpg">
<span class="text under">
<span class="title">Roditelji</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="41526" data-vcms-content-type="2" data-eng-title="My Brilliant Friend" data-modal-open-id="2014" data-available-date="1583190000" data-hint="">
<a class="item-link" href="/serije/moja-genijalna-prijateljica" data-background-image="//cdn.hbogo.eu/images/96E9A4F1-3563-46C0-8A36-590441F6E08E/190_271.jpg">
<span class="text under">
<span class="title">Moja genijalna prijateljica</span><br>
<span class="year">2018-20 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12181" data-vcms-content-type="2" data-eng-title="Last Week Tonight with John Oliver" data-modal-open-id="2021" data-available-date="1601920800" data-hint="">
<a class="item-link" href="/serije/pregled-protekle-nedelje-sa-dzonom-oliverom" data-background-image="//cdn.hbogo.eu/images/761E8CD6-A9E4-47B4-9C03-E96E96B2A016/190_271.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">Pregled protekle nedelje sa Džonom Oliverom </span><br>
<span class="year">2014-20 </span><span class="sep">|</span>
<span class="genres">komedija, ostalo</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106917" data-vcms-content-type="2" data-eng-title="The Outsider" data-modal-open-id="1977" data-available-date="1583719200" data-hint="">
<a class="item-link" href="/serije/autsajder" data-background-image="//cdn.hbogo.eu/images/63C3D365-1D35-42DF-9500-05F631BAAD7D/190_271.jpg">
<span class="text under">
<span class="title">Autsajder</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">krimić, horor</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108472" data-vcms-content-type="2" data-eng-title="The New Pope" data-modal-open-id="1975" data-available-date="1581111900" data-hint="">
<a class="item-link" href="/serije/novi-papa" data-background-image="//cdn.hbogo.eu/images/D492EB28-2AF9-4CD8-AC82-9C8CCC0D80BD/190_271.jpg">
<span class="text under">
<span class="title">Novi papa</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="100924" data-vcms-content-type="2" data-eng-title="Tell Me a Story" data-modal-open-id="1918" data-available-date="1581051600" data-hint="">
<a class="item-link" href="/serije/ispricaj-mi-pricu" data-background-image="//cdn.hbogo.eu/images/FCCAB46F-881F-4DAA-94A8-988AD366ACF9/190_271.jpg">
<span class="text under">
<span class="title">Ispričaj mi priču</span><br>
<span class="year">2018-19 </span><span class="sep">|</span>
<span class="genres">triler, psihološki</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106421" data-vcms-content-type="2" data-eng-title="His Dark Materials" data-modal-open-id="1880" data-available-date="1577059200" data-hint="">
<a class="item-link" href="/serije/njegova-mracna-tkanja" data-background-image="//cdn.hbogo.eu/images/877816F1-1CE3-4D9F-8CA5-5020BA38229B/190_271.jpg">
<span class="text under">
<span class="title">Njegova mračna tkanja</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">avanturistički, fantazija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106399" data-vcms-content-type="2" data-eng-title="The Sleepers" data-modal-open-id="1899" data-available-date="1573945200" data-hint="">
<a class="item-link" href="/serije/spavaci" data-background-image="//cdn.hbogo.eu/images/D3941B90-AF02-46A9-83DF-C6EDAD0F2532/190_271.jpg">
<span class="text under">
<span class="title">Spavači</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">drama, špijunski</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12209" data-vcms-content-type="2" data-eng-title="The Pack" data-modal-open-id="1914" data-available-date="1578610800" data-hint="">
<a class="item-link" href="/serije/copor" data-background-image="//cdn.hbogo.eu/images/D2F45BB8-2CC1-47D7-887E-BE8CC2C1BFEF/190_271.jpg">
<span class="text under">
<span class="title">Čopor</span><br>
<span class="year">2014-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12234" data-vcms-content-type="2" data-eng-title="Shadows" data-modal-open-id="1904" data-available-date="1574204400" data-hint="">
<a class="item-link" href="/serije/senke" data-background-image="//cdn.hbogo.eu/images/B83B415E-A19C-47F8-91D5-CBB3412FE298/190_271.jpg">
<span class="text under">
<span class="title">Senke</span><br>
<span class="year">2015-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106423" data-vcms-content-type="2" data-eng-title="Watchmen" data-modal-open-id="1867" data-available-date="1576461600" data-hint="">
<a class="item-link" href="/serije/nadziraci" data-background-image="//cdn.hbogo.eu/images/50BD91CB-63B9-4234-99A8-7FC3D5F3B27F/190_271.jpg">
<span class="text under">
<span class="title">Nadzirači</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">akcija, zasnovano na stripovima</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12078" data-vcms-content-type="2" data-eng-title="Ray Donovan" data-modal-open-id="1901" data-available-date="1601503200" data-hint="">
<a class="item-link" href="/serije/rej-donovan" data-background-image="//cdn.hbogo.eu/images/8A2CC54F-DB80-42D4-B694-0C4833307292/190_271.jpg">
<span class="text under">
<span class="title">Rej Donovan</span><br>
<span class="year">2013-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="82966" data-vcms-content-type="2" data-eng-title="Success" data-modal-open-id="1539" data-available-date="1546729200" data-hint="">
<a class="item-link" href="/serije/uspeh" data-background-image="//cdn.hbogo.eu/images/9484C836-0DED-4628-9895-F416C47B8E9B/190_271.jpg">
<span class="text under">
<span class="title">Uspeh</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="85195" data-vcms-content-type="2" data-eng-title="Legacies" data-modal-open-id="1851" data-available-date="1585296000" data-hint="">
<a class="item-link" href="/serije/potomci" data-background-image="//cdn.hbogo.eu/images/C28DBAF5-C0B8-468C-A7EC-33A6855A51FA/190_271.jpg">
<span class="text under">
<span class="title">Potomci</span><br>
<span class="year">2018-19 </span><span class="sep">|</span>
<span class="genres">drama, fantazija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12237" data-vcms-content-type="2" data-eng-title="Ballers" data-modal-open-id="1824" data-available-date="1597269600" data-hint="">
<a class="item-link" href="/serije/igraci" data-background-image="//cdn.hbogo.eu/images/BE04C2AC-48FA-406A-AB3A-95C381800730/190_271.jpg">
<span class="text under">
<span class="title">Igrači</span><br>
<span class="year">2014-19 </span><span class="sep">|</span>
<span class="genres">komedija, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="14413" data-vcms-content-type="2" data-eng-title="The Big Bang Theory" data-modal-open-id="1285" data-available-date="1561759200" data-hint="">
<a class="item-link" href="/serije/streberi" data-background-image="//cdn.hbogo.eu/images/89645622-A85E-4161-9D3B-CD0B37F2599E/190_271.jpg">
<span class="text under">
<span class="title">Štreberi</span><br>
<span class="year">2007-18 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12393" data-vcms-content-type="2" data-eng-title="The Affair" data-modal-open-id="1291" data-available-date="1601503200" data-hint="">
<a class="item-link" href="/serije/afera" data-background-image="//cdn.hbogo.eu/images/53F9EE18-0687-43D6-8147-DEB3F4658A4E/190_271.jpg">
<span class="text under">
<span class="title">Afera</span><br>
<span class="year">2014-19 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="62465" data-vcms-content-type="2" data-eng-title="Young Sheldon" data-modal-open-id="1838" data-available-date="1588316400" data-hint="">
<a class="item-link" href="/serije/mladi-seldon" data-background-image="//cdn.hbogo.eu/images/FCF492EC-ACAC-4054-91EF-536CE134009D/190_271.jpg">
<span class="text under">
<span class="title">Mladi Šeldon</span><br>
<span class="year">2017-19 </span><span class="sep">|</span>
<span class="genres">komedija, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12326" data-vcms-content-type="2" data-eng-title="Big Little Lies" data-modal-open-id="1758" data-available-date="1563757200" data-hint="">
<a class="item-link" href="/serije/nevine-lazi" data-background-image="//cdn.hbogo.eu/images/C77AF072-91AB-4EE3-9F53-BE59745F9927/190_271.jpg">
<span class="text under">
<span class="title">Nevine laži</span><br>
<span class="year">2017-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12709" data-vcms-content-type="2" data-eng-title="The Handmaid's Tale" data-modal-open-id="1754" data-available-date="1587852000" data-hint="">
<a class="item-link" href="/serije/sluskinjina-prica" data-background-image="//cdn.hbogo.eu/images/1D773A34-51F4-4CC7-A7C6-BD83D3177785/190_271.jpg">
<span class="text under">
<span class="title">Sluškinjina priča</span><br>
<span class="year">2017-19 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="101385" data-vcms-content-type="2" data-eng-title="Chernobyl" data-modal-open-id="1715" data-available-date="1559610000" data-hint="">
<a class="item-link" href="/serije/cernobilj" data-background-image="//cdn.hbogo.eu/images/64D06C2F-6BC9-4C23-B1D3-9314B161E11F/190_271.jpg">
<span class="text under">
<span class="title">Černobilj</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106419" data-vcms-content-type="2" data-eng-title="Euphoria" data-modal-open-id="1767" data-available-date="1564970400" data-hint="">
<a class="item-link" href="/serije/euforija" data-background-image="//cdn.hbogo.eu/images/BED87C96-6005-494E-82C3-4FBF6AB475D8/190_271.jpg">
<span class="text under">
<span class="title">Euforija</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="11846" data-vcms-content-type="2" data-eng-title="Game of Thrones" data-modal-open-id="1259" data-available-date="1558314000" data-hint="">
<a class="item-link" href="/serije/igra-prestola" data-background-image="//cdn.hbogo.eu/images/B1D652D1-11B9-4E3A-83C9-A9608A18C5E6/190_271.jpg">
<span class="text under">
<span class="title">Igra prestola  </span><br>
<span class="year">2011-18 </span><span class="sep">|</span>
<span class="genres">drama, fantazija</span>
</span>
</a></div></div><div class="fl-shelf-arrow arrowRight fl-shelf-arrow-hidden"></div></div></div><style>.shelf-275{margin-bottom:40px}
.shelf-275 .shelf-item:hover .item-link::before,.shelf-275 .shelf-item.hover .item-link::before{border-color:#009999}
.shelf-275 .shelf .playbtn:hover{ background-color: #19b2b2;}</style><div class="module shelf-module shelf-275 shelf-over"><div class="shelf-content"><header class="shelf-header"><div class="shelf-title" data-eng-title="Enter the Wizarding World of Harry Potter"><h2 class="font-light">
Uđi u svet magije</h2><h3>Svi Hari Potter filmovi na jednom mestu</h3></div></header><div class="fl-shelf-arrow arrowLeft fl-shelf-arrow-hidden"></div><div class="shelf shelf-710-l fl-shelf"><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="219960" data-vcms-content-type="1" data-eng-title="Harry Potter and the Sorcerer's Stone" data-modal-open-id="5945" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/hari-poter-i-kamen-mudrosti" data-background-image="//cdn.hbogo.eu/images/13664141-5CA5-422C-87B0-9F41F5566A3A/262_374.jpg">
<span class="text over">
<span class="title">Hari Poter i Kamen mudrosti</span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/hari-poter-i-kamen-mudrosti#play" data-content-type="1" data-external-id="219960"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="277265" data-vcms-content-type="1" data-eng-title="Harry Potter and the Chamber of Secrets" data-modal-open-id="5886" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/hari-poter-i-dvorana-tajni" data-background-image="//cdn.hbogo.eu/images/2E3FD24B-68F0-496A-B3E1-1A605E334DB0/262_374.jpg">
<span class="text over">
<span class="title">Hari Poter i dvorana tajni</span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/hari-poter-i-dvorana-tajni#play" data-content-type="1" data-external-id="277265"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="276848" data-vcms-content-type="1" data-eng-title="Harry Potter and the Prisoner of Azkaban" data-modal-open-id="13719" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/hari-poter-i-zatvorenik-iz-askabana" data-background-image="//cdn.hbogo.eu/images/BC23F44B-72E0-461D-A0CF-8EDC5EF4BF60/262_374.jpg">
<span class="text over">
<span class="title">Hari Poter i zatvorenik iz Askabana</span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/hari-poter-i-zatvorenik-iz-askabana#play" data-content-type="1" data-external-id="276848"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="323622" data-vcms-content-type="1" data-eng-title="Harry Potter and the Goblet of Fire" data-modal-open-id="14675" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/hari-poter-i-vatreni-pehar" data-background-image="//cdn.hbogo.eu/images/0BAA0186-173A-4605-A632-B25623677200/262_374.jpg">
<span class="text over">
<span class="title">Hari Poter i vatreni pehar</span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/hari-poter-i-vatreni-pehar#play" data-content-type="1" data-external-id="323622"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="421894" data-vcms-content-type="1" data-eng-title="Harry Potter and the Half-Blood Prince" data-modal-open-id="19511" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/hari-poter-i-polukrvni-princ" data-background-image="//cdn.hbogo.eu/images/79F92034-DA2D-412F-AAB5-F5BE1B6B4D5B/262_374.jpg">
<span class="text over">
<span class="title">Hari Poter i polukrvni princ </span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/hari-poter-i-polukrvni-princ#play" data-content-type="1" data-external-id="421894"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="373870" data-vcms-content-type="1" data-eng-title="Harry Potter and the Order of the Phoenix" data-modal-open-id="16028" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/hari-poter-i-red-feniksa" data-background-image="//cdn.hbogo.eu/images/018FF03A-1964-447E-BD4B-D26DCC94FD40/262_374.jpg">
<span class="text over">
<span class="title">Hari Poter i red Feniksa </span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/hari-poter-i-red-feniksa#play" data-content-type="1" data-external-id="373870"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="-70872" data-vcms-content-type="1" data-eng-title="Harry Potter and the Deathly Hallows - Part 1" data-modal-open-id="21216" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/hari-poter-i-relikvije-smrti-1" data-background-image="//cdn.hbogo.eu/images/97F446EB-9EAA-4404-800B-DA68A737E5BB/262_374.jpg">
<span class="text over">
<span class="title">Hari Poter i relikvije smrti 1 </span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/hari-poter-i-relikvije-smrti-1#play" data-content-type="1" data-external-id="-70872"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="-70887" data-vcms-content-type="1" data-eng-title="Harry Potter and the Deathly Hallows - Part 2" data-modal-open-id="21264" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/hari-poter-i-relikvije-smrti-2" data-background-image="//cdn.hbogo.eu/images/C85AFA84-D098-48FE-BD36-003AA2D04FAD/262_374.jpg">
<span class="text over">
<span class="title">Hari Poter i relikvije smrti 2 </span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/hari-poter-i-relikvije-smrti-2#play" data-content-type="1" data-external-id="-70887"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-l-item is-playable" data-type="movie" data-external-id="-104054" data-vcms-content-type="1" data-eng-title="Fantastic Beasts: The Crimes of Grindelwald" data-modal-open-id="45796" data-available-date="1576364400" data-hint="">
<a class="item-link" href="/filmovi/fantasticne-zveri-grindelvaldovi-zlocini" data-background-image="//cdn.hbogo.eu/images/6DC033AA-639D-4583-896F-6CE5C229F205/262_374.jpg">
<span class="text over">
<span class="title">Fantastične zveri – Grindelvaldovi zločini</span><br>
</span>
</a>
<a class="playbtn" href="/filmovi/fantasticne-zveri-grindelvaldovi-zlocini#play" data-content-type="1" data-external-id="-104054"></a></div></div><div class="fl-shelf-arrow arrowRight fl-shelf-arrow-hidden"></div></div></div><div class="module shelf-module shelf-238"><div class="shelf-content"><header class="shelf-header"><div class="shelf-title" data-eng-title="Top movies"><h2 class="font-light">
Top filmovi</h2></div></header><div class="fl-shelf-arrow arrowLeft fl-shelf-arrow-hidden"></div><div class="shelf shelf-710-s fl-shelf"><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-117574" data-vcms-content-type="1" data-eng-title="The Call of the Wild" data-modal-open-id="63092" data-available-date="1601762400" data-hint="">
<a class="item-link" href="/filmovi/zov-divljine" data-background-image="//cdn.hbogo.eu/images/B08C69E7-6B59-421A-A8CD-D262F82D4982/190_271.jpg"><div class="ribbon ribbon-premier">Premijera</div>		<span class="text under">
<span class="title">Zov divljine</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">avanturistički, drama</span>
</span>
</a>
<a class="playbtn" href="/filmovi/zov-divljine#play" data-content-type="1" data-external-id="-117574"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-110312" data-vcms-content-type="1" data-eng-title="A Beautiful Day in the Neighborhood" data-modal-open-id="60148" data-available-date="1601676000" data-hint="">
<a class="item-link" href="/filmovi/divan-dan-u-komsiluku" data-background-image="//cdn.hbogo.eu/images/AB13C7EF-A906-4AED-983B-2B18E92714E0/190_271.jpg"><div class="ribbon ribbon-premier">Premijera</div>		<span class="text under">
<span class="title">Divan dan u komšiluku</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">biografski, drama</span>
</span>
</a>
<a class="playbtn" href="/filmovi/divan-dan-u-komsiluku#play" data-content-type="1" data-external-id="-110312"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-109435" data-vcms-content-type="1" data-eng-title="The Father" data-modal-open-id="52378" data-available-date="1601676000" data-hint="">
<a class="item-link" href="/filmovi/otac" data-background-image="//cdn.hbogo.eu/images/67342449-706C-42CC-8F43-42B9A4348482/190_271.jpg"><div class="ribbon ribbon-premier">Premijera</div>		<span class="text under">
<span class="title">Otac</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">dramske komedije</span>
</span>
</a>
<a class="playbtn" href="/filmovi/otac#play" data-content-type="1" data-external-id="-109435"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-116931" data-vcms-content-type="1" data-eng-title="Return to Epipo" data-modal-open-id="62576" data-available-date="1601503200" data-hint="">
<a class="item-link" href="/filmovi/povratak-u-epipo" data-background-image="//cdn.hbogo.eu/images/F62F2FA4-AB06-44BE-9087-67CB1F32502C/190_271.jpg"><div class="ribbon ribbon-premier">Premijera</div>		<span class="text under">
<span class="title">Povratak u Epipo</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">dokumentarac</span>
</span>
</a>
<a class="playbtn" href="/filmovi/povratak-u-epipo#play" data-content-type="1" data-external-id="-116931"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-110313" data-vcms-content-type="1" data-eng-title="Bad Boys for Life" data-modal-open-id="58992" data-available-date="1600552800" data-hint="">
<a class="item-link" href="/filmovi/losi-momci-zauvek" data-background-image="//cdn.hbogo.eu/images/0077A4B6-86A0-44AB-976B-B44F3EC8CB3A/190_271.jpg">
<span class="text under">
<span class="title">Loši momci zauvek </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">akcija, komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/losi-momci-zauvek#play" data-content-type="1" data-external-id="-110313"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-103523" data-vcms-content-type="1" data-eng-title="The Rhythm Section" data-modal-open-id="53248" data-available-date="1601157600" data-hint="">
<a class="item-link" href="/filmovi/ritam-sekcija" data-background-image="//cdn.hbogo.eu/images/59925BBE-D0EC-4852-BCBF-05ED1E1BCAE8/190_271.jpg"><div class="ribbon ribbon-premier">Premijera</div>		<span class="text under">
<span class="title">Ritam sekcija </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">akcija, triler</span>
</span>
</a>
<a class="playbtn" href="/filmovi/ritam-sekcija#play" data-content-type="1" data-external-id="-103523"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-119358" data-vcms-content-type="1" data-eng-title="UNpregnant" data-modal-open-id="65228" data-available-date="1600380000" data-hint="">
<a class="item-link" href="/filmovi/necemo-se-vise-plasiti" data-background-image="//cdn.hbogo.eu/images/D310CDF7-E266-433E-B690-BAE58289734C/190_271.jpg">
<span class="text under">
<span class="title">Nećemo se više plašiti </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">drama, drumski</span>
</span>
</a>
<a class="playbtn" href="/filmovi/necemo-se-vise-plasiti#play" data-content-type="1" data-external-id="-119358"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-117566" data-vcms-content-type="1" data-eng-title="Onward" data-modal-open-id="63094" data-available-date="1599948000" data-hint="">
<a class="item-link" href="/filmovi/napred" data-background-image="//cdn.hbogo.eu/images/346E24AC-74BE-4188-90F8-9CCDF391558B/190_271.jpg">
<span class="text under">
<span class="title">Napred </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">animirani, komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/napred#play" data-content-type="1" data-external-id="-117566"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-111845" data-vcms-content-type="1" data-eng-title="The Kitchen" data-modal-open-id="58982" data-available-date="1599861600" data-hint="">
<a class="item-link" href="/filmovi/kraljice-zlocina" data-background-image="//cdn.hbogo.eu/images/DE66B3F5-A9A8-4368-9E17-36099D3BB1C9/190_271.jpg">
<span class="text under">
<span class="title">Kraljice zločina </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">akcija, krimić</span>
</span>
</a>
<a class="playbtn" href="/filmovi/kraljice-zlocina#play" data-content-type="1" data-external-id="-111845"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="645153" data-vcms-content-type="1" data-eng-title="Coastal Elites" data-modal-open-id="65804" data-available-date="1600552800" data-hint="">
<a class="item-link" href="/filmovi/elita-sa-obale" data-background-image="//cdn.hbogo.eu/images/02FC01B8-EBEF-494B-9D72-5139FC45436F/190_271.jpg">
<span class="text under">
<span class="title">Elita sa obale </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/elita-sa-obale#play" data-content-type="1" data-external-id="645153"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-117576" data-vcms-content-type="1" data-eng-title="Jojo Rabbit" data-modal-open-id="63091" data-available-date="1599343200" data-hint="">
<a class="item-link" href="/filmovi/jojo-rabbit" data-background-image="//cdn.hbogo.eu/images/F9FC4497-7BA2-4638-A567-E7C6403EC513/190_271.jpg">
<span class="text under">
<span class="title">Jojo Rabbit </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">ratni, dramske komedije</span>
</span>
</a>
<a class="playbtn" href="/filmovi/jojo-rabbit#play" data-content-type="1" data-external-id="-117576"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-110678" data-vcms-content-type="1" data-eng-title="FOMO: Fear of Missing Out" data-modal-open-id="55065" data-available-date="1599343200" data-hint="">
<a class="item-link" href="/filmovi/fomo-strah-od-propustanja-prilike" data-background-image="//cdn.hbogo.eu/images/4BC521CA-B090-4650-A642-4E58FA0F2546/190_271.jpg">
<span class="text under">
<span class="title">FOMO: Strah od propuštanja prilike </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a>
<a class="playbtn" href="/filmovi/fomo-strah-od-propustanja-prilike#play" data-content-type="1" data-external-id="-110678"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-115689" data-vcms-content-type="1" data-eng-title="The Immortal" data-modal-open-id="60946" data-available-date="1598738400" data-hint="">
<a class="item-link" href="/filmovi/besmrtni" data-background-image="//cdn.hbogo.eu/images/69FB69EE-7729-42FC-B16D-F0489AA3AF28/190_271.jpg">
<span class="text under">
<span class="title">Besmrtni</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a>
<a class="playbtn" href="/filmovi/besmrtni#play" data-content-type="1" data-external-id="-115689"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-119357" data-vcms-content-type="1" data-eng-title="An American Pickle" data-modal-open-id="65229" data-available-date="1598133600" data-hint="">
<a class="item-link" href="/filmovi/americka-tursija" data-background-image="//cdn.hbogo.eu/images/847FE624-35B6-4D0E-BBCC-DADBE758DD11/190_271.jpg">
<span class="text under">
<span class="title">Američka turšija </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">dramske komedije</span>
</span>
</a>
<a class="playbtn" href="/filmovi/americka-tursija#play" data-content-type="1" data-external-id="-119357"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-105808" data-vcms-content-type="1" data-eng-title="Stuber" data-modal-open-id="63097" data-available-date="1598047200" data-hint="">
<a class="item-link" href="/filmovi/ortaci-na-tockovima" data-background-image="//cdn.hbogo.eu/images/B0FEB462-8D3A-4EB3-918C-B17A5186D637/190_271.jpg">
<span class="text under">
<span class="title">Ortaci na točkovima </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">akcija, komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/ortaci-na-tockovima#play" data-content-type="1" data-external-id="-105808"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-110309" data-vcms-content-type="1" data-eng-title="Jumanji: The Next Level" data-modal-open-id="53240" data-available-date="1597528800" data-hint="">
<a class="item-link" href="/filmovi/dzumandzi-sledeci-nivo" data-background-image="//cdn.hbogo.eu/images/05E131B2-D119-4BF7-B7F4-4D2C58ECE42E/190_271.jpg">
<span class="text under">
<span class="title">Džumandži: Sledeći nivo </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">avanturistički, komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/dzumandzi-sledeci-nivo#play" data-content-type="1" data-external-id="-110309"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-117068" data-vcms-content-type="1" data-eng-title="Ready or Not" data-modal-open-id="63095" data-available-date="1596751200" data-hint="">
<a class="item-link" href="/filmovi/spremna-ili-ne" data-background-image="//cdn.hbogo.eu/images/1C610AC0-2D4C-447A-B6AE-504ED7982CCC/190_271.jpg">
<span class="text under">
<span class="title">Spremna ili ne </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">komedija, horor</span>
</span>
</a>
<a class="playbtn" href="/filmovi/spremna-ili-ne#play" data-content-type="1" data-external-id="-117068"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-114488" data-vcms-content-type="1" data-eng-title="Star Wars: The Rise of Skywalker" data-modal-open-id="60096" data-available-date="1596751200" data-hint="">
<a class="item-link" href="/filmovi/star-wars-uspon-skajvokera" data-background-image="//cdn.hbogo.eu/images/6D8D40CB-AC61-4E27-9739-88480DA752BE/190_271.jpg">
<span class="text under">
<span class="title">Star Wars: Uspon Skajvokera </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, avanturistički</span>
</span>
</a>
<a class="playbtn" href="/filmovi/star-wars-uspon-skajvokera#play" data-content-type="1" data-external-id="-114488"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-111836" data-vcms-content-type="1" data-eng-title="Annabelle Comes Home" data-modal-open-id="58988" data-available-date="1596319200" data-hint="">
<a class="item-link" href="/filmovi/anabel-3-povratak-kuci" data-background-image="//cdn.hbogo.eu/images/B3F3A867-70A6-4DC0-9C05-3976F5AC3365/190_271.jpg">
<span class="text under">
<span class="title">Anabel 3: Povratak kući </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">detektivski, horor</span>
</span>
</a>
<a class="playbtn" href="/filmovi/anabel-3-povratak-kuci#play" data-content-type="1" data-external-id="-111836"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-106910" data-vcms-content-type="1" data-eng-title="Artemis Fowl" data-modal-open-id="48768" data-available-date="1596924000" data-hint="">
<a class="item-link" href="/filmovi/artemis-faul" data-background-image="//cdn.hbogo.eu/images/697A19B1-2BD3-4431-9CE3-8BD83288D71D/190_271.jpg">
<span class="text under">
<span class="title">Artemis Faul </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">akcija, fantazija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/artemis-faul#play" data-content-type="1" data-external-id="-106910"></a></div></div><div class="fl-shelf-arrow arrowRight fl-shelf-arrow-hidden"></div></div></div><div class="module shelf-module shelf-241"><div class="shelf-content"><header class="shelf-header"><div class="shelf-title" data-eng-title="Entertainment for the whole family"><h2 class="font-light">
Zabava za celu porodicu</h2></div></header><div class="fl-shelf-arrow arrowLeft fl-shelf-arrow-hidden"></div><div class="shelf shelf-710-s fl-shelf"><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="112458" data-vcms-content-type="2" data-eng-title="Agent Binky: Pets of the Universe" data-modal-open-id="3054" data-available-date="1601589600" data-hint="">
<a class="item-link" href="/kids/serije/agent-binki-superljubimci-univerzuma-u-pohodu-na-svemir" data-background-image="//cdn.hbogo.eu/images/117F1D19-8235-4209-9A93-6B9768B89AB9/190_271.jpg"><div class="ribbon ribbon-series-premier">Premijera serije</div>		<span class="text under">
<span class="title">Agent Binki: Superljubimci Univerzuma u Pohodu na Svemir</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="17209" data-vcms-content-type="2" data-eng-title="Fireman Sam X." data-modal-open-id="955" data-available-date="1601416800" data-hint="">
<a class="item-link" href="/kids/serije/vatrogasac-sem" data-background-image="//cdn.hbogo.eu/images/8C91BF90-9517-47E5-8644-822407127438/190_271.jpg">
<span class="text under">
<span class="title">Vatrogasac Sem</span><br>
<span class="year">2016 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="111793" data-vcms-content-type="2" data-eng-title="Taffy" data-modal-open-id="2938" data-available-date="1600984800" data-hint="">
<a class="item-link" href="/kids/serije/tafi" data-background-image="//cdn.hbogo.eu/images/3B55BD27-B68F-424E-AA08-9A4E96EFC29A/190_271.jpg"><div class="ribbon ribbon-series-premier">Premijera serije</div>		<span class="text under">
<span class="title">Tafi</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="111791" data-vcms-content-type="2" data-eng-title="Pat the Dog" data-modal-open-id="2934" data-available-date="1600380000" data-hint="">
<a class="item-link" href="/kids/serije/pet-i-svet" data-background-image="//cdn.hbogo.eu/images/89EC6532-598B-4113-BAEA-97860B26C706/190_271.jpg">
<span class="text under">
<span class="title">Pet i Svet</span><br>
<span class="year">2017 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-117566" data-vcms-content-type="1" data-eng-title="Onward" data-modal-open-id="63094" data-available-date="1599948000" data-hint="">
<a class="item-link" href="/filmovi/napred" data-background-image="//cdn.hbogo.eu/images/346E24AC-74BE-4188-90F8-9CCDF391558B/190_271.jpg">
<span class="text under">
<span class="title">Napred </span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">animirani, komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/napred#play" data-content-type="1" data-external-id="-117566"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="44803" data-vcms-content-type="2" data-eng-title="Ben 10" data-modal-open-id="2858" data-available-date="1599170400" data-hint="">
<a class="item-link" href="/kids/serije/ben-10" data-background-image="//cdn.hbogo.eu/images/1DD97FEB-884B-4FB4-BC17-C46187A52791/190_271.jpg">
<span class="text under">
<span class="title">Ben 10</span><br>
<span class="year">2020 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-115911" data-vcms-content-type="1" data-eng-title="LEGO Marvel Super Heroes - Guardians of the Galaxy: The Thanos Threat" data-modal-open-id="62552" data-available-date="1598565600" data-hint="">
<a class="item-link" href="/kids/filmovi/lego-marvel-superheroji-cuvari-galaksije-tanosova-pretnja" data-background-image="//cdn.hbogo.eu/images/A8855394-D8DF-45A1-9D4B-C6266F63E291/190_271.jpg">
<span class="text under">
<span class="title">Lego Marvel superheroji: Čuvari galaksije: Tanosova pretnja </span><br>
<span class="year">2017 </span><span class="sep">|</span>
<span class="genres">ostalo, animirani</span>
</span>
</a>
<a class="playbtn" href="/kids/filmovi/lego-marvel-superheroji-cuvari-galaksije-tanosova-pretnja#play" data-content-type="1" data-external-id="-115911"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-115909" data-vcms-content-type="1" data-eng-title="LEGO Marvel Super Heroes: Maximum Overload" data-modal-open-id="62554" data-available-date="1598565600" data-hint="">
<a class="item-link" href="/kids/filmovi/lego-marvel-superheroji-maksimalno-opterecenje" data-background-image="//cdn.hbogo.eu/images/156FB921-9E14-47EE-A117-9C689264289E/190_271.jpg">
<span class="text under">
<span class="title">Lego Marvel superheroji: Maksimalno opterećenje </span><br>
<span class="year">2013 </span><span class="sep">|</span>
<span class="genres">ostalo, animirani</span>
</span>
</a>
<a class="playbtn" href="/kids/filmovi/lego-marvel-superheroji-maksimalno-opterecenje#play" data-content-type="1" data-external-id="-115909"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-115908" data-vcms-content-type="1" data-eng-title="LEGO Marvel Super Heroes: Avengers Reassembled" data-modal-open-id="62555" data-available-date="1598565600" data-hint="">
<a class="item-link" href="/kids/filmovi/lego-marvel-superheroji-osvetnici-ponovo-na-okupu" data-background-image="//cdn.hbogo.eu/images/E8241DB2-6A11-4EAA-9D4A-83C0A0C666E9/190_271.jpg">
<span class="text under">
<span class="title">Lego Marvel superheroji: Osvetnici ponovo na okupu </span><br>
<span class="year">2015 </span><span class="sep">|</span>
<span class="genres">ostalo, animirani</span>
</span>
</a>
<a class="playbtn" href="/kids/filmovi/lego-marvel-superheroji-osvetnici-ponovo-na-okupu#play" data-content-type="1" data-external-id="-115908"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-115910" data-vcms-content-type="1" data-eng-title="LEGO Marvel Super Heroes: Black Panther - Trouble in Wakanda" data-modal-open-id="62553" data-available-date="1598565600" data-hint="">
<a class="item-link" href="/kids/filmovi/lego-marvel-superheroji-crni-panter-nevolja-u-vakandi" data-background-image="//cdn.hbogo.eu/images/02D167EC-1B87-4C80-9C05-7D793710B6F5/190_271.jpg">
<span class="text under">
<span class="title">Lego Marvel superheroji: Crni panter: Nevolja u Vakandi </span><br>
<span class="year">2018 </span><span class="sep">|</span>
<span class="genres">ostalo, animirani</span>
</span>
</a>
<a class="playbtn" href="/kids/filmovi/lego-marvel-superheroji-crni-panter-nevolja-u-vakandi#play" data-content-type="1" data-external-id="-115910"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-115912" data-vcms-content-type="1" data-eng-title="LEGO Marvel Spider-Man: Vexed by Venom" data-modal-open-id="62551" data-available-date="1598565600" data-hint="">
<a class="item-link" href="/kids/filmovi/lego-marvel-spajdermen-gnjavator-venom" data-background-image="//cdn.hbogo.eu/images/B3D53B00-2EDE-4620-8323-0D804354517E/190_271.jpg">
<span class="text under">
<span class="title">Lego Marvel Spajdermen: Gnjavator Venom </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">ostalo, animirani</span>
</span>
</a>
<a class="playbtn" href="/kids/filmovi/lego-marvel-spajdermen-gnjavator-venom#play" data-content-type="1" data-external-id="-115912"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-117573" data-vcms-content-type="1" data-eng-title="Spies in Disguise" data-modal-open-id="63093" data-available-date="1598047200" data-hint="">
<a class="item-link" href="/filmovi/preruseni-spijuni" data-background-image="//cdn.hbogo.eu/images/0D1F7934-53FF-4EBB-B29E-D69C0CCABE14/190_271.jpg">
<span class="text under">
<span class="title">Prerušeni špijuni </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">animirani, komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/preruseni-spijuni#play" data-content-type="1" data-external-id="-117573"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-116263" data-vcms-content-type="1" data-eng-title="The Addams Family" data-modal-open-id="61802" data-available-date="1597442400" data-hint="">
<a class="item-link" href="/filmovi/porodica-adams-2019" data-background-image="//cdn.hbogo.eu/images/F3F186F8-8999-4EB3-B434-9DE3F2912854/190_271.jpg">
<span class="text under">
<span class="title">Porodica Adams </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">animirani, komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/porodica-adams-2019#play" data-content-type="1" data-external-id="-116263"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-76536" data-vcms-content-type="1" data-eng-title="The Smurfs 2" data-modal-open-id="23528" data-available-date="1596232800" data-hint="">
<a class="item-link" href="/filmovi/strumpfovi-2" data-background-image="//cdn.hbogo.eu/images/22B5574F-DCF2-48F7-A984-44C7EAFA7890/190_271.jpg">
<span class="text under">
<span class="title">Štrumpfovi 2 </span><br>
<span class="year">2013 </span><span class="sep">|</span>
<span class="genres">animirani, komedija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/strumpfovi-2#play" data-content-type="1" data-external-id="-76536"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item is-playable" data-type="movie" data-external-id="-111837" data-vcms-content-type="1" data-eng-title="Pokémon Detective Pikachu" data-modal-open-id="58987" data-available-date="1595023200" data-hint="">
<a class="item-link" href="/filmovi/pokemon-detektiv-pikacu" data-background-image="//cdn.hbogo.eu/images/852FF5FD-BDE7-4F94-A555-BDF0341162A8/190_271.jpg">
<span class="text under">
<span class="title">Pokemon detektiv Pikaču </span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">porodični, fantazija</span>
</span>
</a>
<a class="playbtn" href="/filmovi/pokemon-detektiv-pikacu#play" data-content-type="1" data-external-id="-111837"></a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="110328" data-vcms-content-type="2" data-eng-title="Grizzy and the Lemmings" data-modal-open-id="2198" data-available-date="1596751200" data-hint="">
<a class="item-link" href="/kids/serije/grizi-i-leminzi" data-background-image="//cdn.hbogo.eu/images/19E63737-CBED-43F0-902B-FDFD1F9D5999/190_271.jpg">
<span class="text under">
<span class="title">Grizi i leminzi</span><br>
<span class="year">2017-18 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106616" data-vcms-content-type="2" data-eng-title="Phineas and Ferb" data-modal-open-id="1932" data-available-date="1591308000" data-hint="">
<a class="item-link" href="/kids/serije/fica-i-feda-iii" data-background-image="//cdn.hbogo.eu/images/52D2216E-CA52-4196-BFAD-FEF546A760E7/190_271.jpg">
<span class="text under">
<span class="title">Fića i Feđa III</span><br>
<span class="year">2011-12 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="41528" data-vcms-content-type="2" data-eng-title="LEGO Ninjago: Masters of Spinjitzu" data-modal-open-id="2132" data-available-date="1592517600" data-hint="">
<a class="item-link" href="/kids/serije/lego-nindzago" data-background-image="//cdn.hbogo.eu/images/C4D8F2C2-A683-4FE4-BF13-B3B468B83EC6/190_271.jpg">
<span class="text under">
<span class="title">Lego Nindžago</span><br>
<span class="year">2011-19 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108553" data-vcms-content-type="2" data-eng-title="Lego Friends: Girls on a Mission" data-modal-open-id="2121" data-available-date="1591912800" data-hint="">
<a class="item-link" href="/kids/serije/lego-prijatelji-devojke-na-zadatku" data-background-image="//cdn.hbogo.eu/images/4E00A666-7D3C-479C-A28E-C62106420C08/190_271.jpg">
<span class="text under">
<span class="title">Lego prijatelji: Devojke na zadatku</span><br>
<span class="year">2018-19 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="108135" data-vcms-content-type="2" data-eng-title="Pingu in the City" data-modal-open-id="2088" data-available-date="1590962400" data-hint="">
<a class="item-link" href="/kids/serije/pingu-u-gradu" data-background-image="//cdn.hbogo.eu/images/5EAE3002-5343-46B6-85F3-3033B26DBBEC/190_271.jpg">
<span class="text under">
<span class="title">Pingu u gradu </span><br>
<span class="year">2017-18 </span><span class="sep">|</span>
<span class="genres">animirani, porodični</span>
</span>
</a></div></div><div class="fl-shelf-arrow arrowRight fl-shelf-arrow-hidden"></div></div></div><style>.module.module-shelf-6{background-color:#242424}.module-shelf-6 .module-stripe-item{border-color:#242424}.module-stripe-item-27{background-size: cover;  background-position: left top}.module-stripe-item-27 .text .btn{ background-color:#e1981a;}.module-stripe-item-27 .text .btn{ box-shadow: 0 0 0 1px #e1981a inset;}.module-stripe-item-27 .text .btn:hover{ background-color:#fab133;}.module-stripe-item-27 .text .h1 { width: 100%}.module-stripe-item-27 .text .body { width: 100%}.module-stripe-item-28{background-size: cover;  background-position: left top}.module-stripe-item-28 .text .btn{ box-shadow: 0 0 0 1px #e1981a inset;}.module-stripe-item-28 .text .btn:hover{ box-shadow: 0 0 0 1px #fab133 inset;}.module-stripe-item-28 .text .h1 { width: 100%}.module-stripe-item-28 .text .body { width: 100%}</style><div class="module module-shelf-module module-shelf-6"><div class="module-stripe-items-container"><div class="module-stripe-item module-stripe-item-27 align-center"><div class="text"><h2 class="font-light">Želiš da isprobaš HBO GO besplatno?</h2><div class="body">Nakon prvih 7 dana, pretplata košta 5,99 EUR mesečno.</div>
<br>
<span class="btn primary selected btn-type-m gateway-subpage-register-d2c">ISPROBAJ 7 DANA BESPLATNO</span></div></div><div class="module-stripe-item module-stripe-item-28 align-center"><div class="text"><h2 class="font-light">Već imaš pretplatu na HBO Premium paket kod svog operatera?</h2><div class="body">Usluga HBO GO dostupna je u okviru HBO Premium paketa. Registruj se kod operatera i gledaj serije i filmove onlajn na svom omiljenom uređaju.</div>
<br>
<span class="btn secondary selected btn-type-m gateway-subpage-register-op">REGISTRUJ SE</span></div></div></div></div><style>.module.html-module.html-70 {
     padding: 0px;
}
 .--cms-devices-container {
     width: 100%;
     padding: 0 25px;
     border-radius: 8px;
}
 .--cms-devices-title {
     display: block;
     position: relative;
     text-align: center;
     margin: 0 40px 10px 40px;
     font-size: 22px;
     font-weight: 800;
}
 .--cms-devices-title span {
     background-color: #000000;
     padding: 0 20px;
     text-transform: uppercase;
}
 .--cms-devices-title:before {
     display: block;
     position: absolute;
     content: "";
     background-color: rgba(255, 255, 255, 0.15);
     top: 50%;
     margin-top: -1px;
     left: 0px;
     right: 0px;
     height: 2px;
     z-index: -1;
}
 .--cms-devices-description {
     display: none;
     text-align: center;
     margin: 0 0 10px 0;
}
 .--cms-devices-list {
     width: 100%;
     text-align: center;
     text-transform: uppercase;
     padding: 20px 0 0 0;
}
 .--cms-device-list {
     width: 100%;
     text-align: center;
     text-transform: uppercase;
     color: white;
     padding: 35px 0;
}
 .--cms-device-list td {
     min-width: 100px;
}</style><div class="module html-module html-185" style="margin-top:60px;margin-bottom:40px"><div class="--cms-devices-container"><h2 class="--cms-devices-title"><span>GLEDAJ NA OMILJENIM UREĐAJIMA</span></h2><div class="--cms-devices-description">Simply pick your favorite device to watch HBO GO.</div><table class="--cms-device-list watch-favourite-device-table"><tbody><tr><td><img src="https://hboeu.azureedge.net/uiimages/5BBF15C9-7B32-48FA-88C4-9A1A5F01426A/original.png" alt="" /></td><td><img src="https://hboeu.azureedge.net/uiimages/785F5894-D3E3-449D-929F-C2BDB9FAB822/original.png" alt="" /></td><td><img src="https://hboeu.azureedge.net/uiimages/F5D4551D-5203-4D56-B261-720414B4C411/original.png" alt="" /></td><td><img src="https://hboeu.azureedge.net/uiimages/A1190551-1163-414F-B99A-30B37698981F/original.png" alt="" /></td><td><img src="https://hboeu.azureedge.net/uiimages/2BE1388A-DDA7-4E24-841D-DDEB7F64AA4B/original.png" alt="" /></td><td><img src="https://hboeu.azureedge.net/uiimages/B9B2D5B4-CBEB-4D90-87EE-44EB5D0A7D2B/original.png" alt="" /></td><td><img src="https://hboeu.azureedge.net/uiimages/5E71CEAE-5289-4477-A626-CEE3E4CD42B1/original.png" alt="" /></td></tr><tr><td>Smart TV</td><td>Tablet</td><td>Mobilni</td><td>Apple TV</td><td>Chromecast</td><td>Konzola</td><td>Računar</td></tr></tbody></table></div></div><div class="module shelf-module shelf-240"><div class="shelf-content"><header class="shelf-header"><div class="shelf-title" data-eng-title="Your favorite series"><h2 class="font-light">
Tvoje omiljene serije</h2></div></header><div class="fl-shelf-arrow arrowLeft fl-shelf-arrow-hidden"></div><div class="shelf shelf-710-s fl-shelf"><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="11846" data-vcms-content-type="2" data-eng-title="Game of Thrones" data-modal-open-id="1259" data-available-date="1558314000" data-hint="">
<a class="item-link" href="/serije/igra-prestola" data-background-image="//cdn.hbogo.eu/images/B1D652D1-11B9-4E3A-83C9-A9608A18C5E6/190_271.jpg">
<span class="text under">
<span class="title">Igra prestola  </span><br>
<span class="year">2011-18 </span><span class="sep">|</span>
<span class="genres">drama, fantazija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="101385" data-vcms-content-type="2" data-eng-title="Chernobyl" data-modal-open-id="1715" data-available-date="1559610000" data-hint="">
<a class="item-link" href="/serije/cernobilj" data-background-image="//cdn.hbogo.eu/images/64D06C2F-6BC9-4C23-B1D3-9314B161E11F/190_271.jpg">
<span class="text under">
<span class="title">Černobilj</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12709" data-vcms-content-type="2" data-eng-title="The Handmaid's Tale" data-modal-open-id="1754" data-available-date="1587852000" data-hint="">
<a class="item-link" href="/serije/sluskinjina-prica" data-background-image="//cdn.hbogo.eu/images/1D773A34-51F4-4CC7-A7C6-BD83D3177785/190_271.jpg">
<span class="text under">
<span class="title">Sluškinjina priča</span><br>
<span class="year">2017-19 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="106419" data-vcms-content-type="2" data-eng-title="Euphoria" data-modal-open-id="1767" data-available-date="1564970400" data-hint="">
<a class="item-link" href="/serije/euforija" data-background-image="//cdn.hbogo.eu/images/BED87C96-6005-494E-82C3-4FBF6AB475D8/190_271.jpg">
<span class="text under">
<span class="title">Euforija</span><br>
<span class="year">2019 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="14413" data-vcms-content-type="2" data-eng-title="The Big Bang Theory" data-modal-open-id="1285" data-available-date="1561759200" data-hint="">
<a class="item-link" href="/serije/streberi" data-background-image="//cdn.hbogo.eu/images/89645622-A85E-4161-9D3B-CD0B37F2599E/190_271.jpg">
<span class="text under">
<span class="title">Štreberi</span><br>
<span class="year">2007-18 </span><span class="sep">|</span>
<span class="genres">komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12326" data-vcms-content-type="2" data-eng-title="Big Little Lies" data-modal-open-id="1758" data-available-date="1563757200" data-hint="">
<a class="item-link" href="/serije/nevine-lazi" data-background-image="//cdn.hbogo.eu/images/C77AF072-91AB-4EE3-9F53-BE59745F9927/190_271.jpg">
<span class="text under">
<span class="title">Nevine laži</span><br>
<span class="year">2017-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12101" data-vcms-content-type="2" data-eng-title="True Detective" data-modal-open-id="1275" data-available-date="1551060000" data-hint="">
<a class="item-link" href="/serije/pravi-detektiv" data-background-image="//cdn.hbogo.eu/images/76750556-3C1F-477C-A2DF-2B971FCEC934/190_271.jpg">
<span class="text under">
<span class="title">Pravi detektiv</span><br>
<span class="year">2014-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12078" data-vcms-content-type="2" data-eng-title="Ray Donovan" data-modal-open-id="1901" data-available-date="1601503200" data-hint="">
<a class="item-link" href="/serije/rej-donovan" data-background-image="//cdn.hbogo.eu/images/8A2CC54F-DB80-42D4-B694-0C4833307292/190_271.jpg">
<span class="text under">
<span class="title">Rej Donovan</span><br>
<span class="year">2013-19 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12268" data-vcms-content-type="2" data-eng-title="Westworld" data-modal-open-id="2049" data-available-date="1588554000" data-hint="">
<a class="item-link" href="/serije/zapadni-svet" data-background-image="//cdn.hbogo.eu/images/F71EAF8C-4D44-41BE-95DB-092E28AA01F4/190_271.jpg">
<span class="text under">
<span class="title">Zapadni svet</span><br>
<span class="year">2016-20 </span><span class="sep">|</span>
<span class="genres">naučna fantastika, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12181" data-vcms-content-type="2" data-eng-title="Last Week Tonight with John Oliver" data-modal-open-id="2021" data-available-date="1601920800" data-hint="">
<a class="item-link" href="/serije/pregled-protekle-nedelje-sa-dzonom-oliverom" data-background-image="//cdn.hbogo.eu/images/761E8CD6-A9E4-47B4-9C03-E96E96B2A016/190_271.jpg"><div class="ribbon ribbon-series-episode-premier">Nova epizoda</div>		<span class="text under">
<span class="title">Pregled protekle nedelje sa Džonom Oliverom </span><br>
<span class="year">2014-20 </span><span class="sep">|</span>
<span class="genres">komedija, ostalo</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="10575" data-vcms-content-type="2" data-eng-title="Sex and the City" data-modal-open-id="404" data-available-date="1362114000" data-hint="">
<a class="item-link" href="/serije/seks-i-grad" data-background-image="//cdn.hbogo.eu/images/063301B6-E843-493B-8C1A-333EE2F03D9C/190_271.jpg">
<span class="text under">
<span class="title">Seks i grad</span><br>
<span class="year">1998-2003 </span><span class="sep">|</span>
<span class="genres">romantični, komedija</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="11815" data-vcms-content-type="2" data-eng-title="The Sopranos" data-modal-open-id="222" data-available-date="1320306000" data-hint="">
<a class="item-link" href="/serije/porodica-soprano" data-background-image="//cdn.hbogo.eu/images/FB6BB830-DDCE-4516-A141-A41A9194419C/190_271.jpg">
<span class="text under">
<span class="title">Porodica Soprano </span><br>
<span class="year">1999-2005 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="12393" data-vcms-content-type="2" data-eng-title="The Affair" data-modal-open-id="1291" data-available-date="1601503200" data-hint="">
<a class="item-link" href="/serije/afera" data-background-image="//cdn.hbogo.eu/images/53F9EE18-0687-43D6-8147-DEB3F4658A4E/190_271.jpg">
<span class="text under">
<span class="title">Afera</span><br>
<span class="year">2014-19 </span><span class="sep">|</span>
<span class="genres">drama</span>
</span>
</a></div><div class="fl-shelf-item shelf-item altbg shelf-710-s-item" data-type="series" data-external-id="11816" data-vcms-content-type="2" data-eng-title="The Wire" data-modal-open-id="363" data-available-date="1320312000" data-hint="">
<a class="item-link" href="/serije/zica" data-background-image="//cdn.hbogo.eu/images/81E3AE84-478F-4D2A-A6AE-63C6B2933E80/190_271.jpg">
<span class="text under">
<span class="title">Žica</span><br>
<span class="year">2002-08 </span><span class="sep">|</span>
<span class="genres">krimić, drama</span>
</span>
</a></div></div><div class="fl-shelf-arrow arrowRight fl-shelf-arrow-hidden"></div></div></div><style>.module.spotlight-36{background-color:#242424;background-size: cover;  background-position: left top}.module.spotlight-36 .text .btn{ background-color:#e1981a;}.module.spotlight-36 .text .btn{ box-shadow: 0 0 0 1px #e1981a inset;}.module.spotlight-36 .text .btn:hover{ background-color:#fab133;}.module.spotlight-36 .text .h1 { width: 100%}.module.spotlight-36 .text .body { width: 100%}
		.module.spotlight-36 .text .h1 { font-size: 30px ;}</style><div class="module spotlight spotlight-36 align-center-middle module-alignment-left"><div class="text"><div class="h1 font-light">Zašto da odabereš HBO GO?</div><div class="body">- Više od 6000 sati najboljih serija i filmova sa prevodom.<br />- Hit serije, holivudski blokbasteri i najlepši crtaći.<br />- Sve epizode originalnih HBO serija dostupne su zauvek.</div>
<br>
<span class="btn primary selected btn-type-l gateway-subpage-register-d2c">ISPROBAJ 7 DANA BESPLATNO</span></div></div><div id="hint" class="hint meta up">
<span class="direction"></span>
<span class="title"><a href=""></a></span><br>
<span class="ratings"></span>
<span class="text"></span></div></main><div class="footer"><nav class="social"><ul><li><a href="https://www.facebook.com/hbosrbija" target="blank"><span class="icon"><svg class="icon"><use xlink:href="#facebook"/></svg></span></a></li><li><a href="https://twitter.com/HBOAdria" target="blank"><span class="icon"><svg class="icon"><use xlink:href="#twitter"/></svg></span></a></li><li><a href="https://youtube.com/HBOAdria" target="blank"><span class="icon"><svg class="icon"><use xlink:href="#youtube"/></svg></span></a></li></ul></nav><nav class="footer-links"><ul class="links-list"><li><a href="https://helpcenter.hbogo.eu/sr" target="blank">Često postavljana pitanja</a></li><li><a href="/uslovi-koriscenja">Uslovi korišćenja</a></li><li><a href="/polisa-privatnosti">Politika privatnosti</a></li><li><a href="/kontakt">Kontakt</a></li><li><a href="/kolacici">Pravila o kolačićima</a></li><li><a class="optanon-show-settings">Cookie Settings</a></li><li class="region-container hidden">
<span class="region">
<span class="selected"></span>
</span></li></ul></nav>
<span class="copyright">
&copy; 2020 Home Box Office, Inc. Sva prava zadržana. Ovaj sajt može imati sadržaj za odrasle.    </span></div><div class="loader"><div class="loader1"></div><div class="loader2"></div></div><div id="gatewayFrameContainer">
<iframe id="gatewayFrame"></iframe></div><div class="modal-close"><span class="icon-gocss-close"></span></div><div class="modal-overlay"></div><script src="/assets/vendor/react/react.production.min.js"></script><script src="/assets/vendor/react/react-dom.production.min.js"></script><script src="/assets/vendor/react/go-components.js"></script><script>var goui={l10n: {"kids_check_your_mail":"Proverite e-mail","newsletter_error":"Došlo je do greške. Pokušajte ponovo kasnije.","download_app_text":"Za reprodukciju sadržaja na mobilnim uređajima potrebno je preuzeti HBO GO aplikaciju","imdb_rating":"IMDb oceni","create_pin_first_description":"Da biste uključili Kids sekciju, morate da kreirate PIN zaštite za decu.<br /><br />","last":"Poslednja prilika","home_page":"Početna","cookie_policy_button_text":"Ne prikazuj ponovo","operator_auth_ssoerror":"","GO5_TOAST_INFO_FOR_OPERATOR_TELEKOMROMANIA":"","user_no_results_title":"Nema rezultata","kids_activate_kids_mode":"Uključi KIDS sekciju","a_z":"A - Ž","season_comingsoon_date":"Nova sezona: ##localized date##","kids_onboarding_description":"Kids sekcija je sigurna zona za decu. <br />Aktivirajte je kako biste pratili samo naslove iz sekcije za decu.<br />Biće vam potreban PIN zaštite za decu, kako biste isključili Kids sekciju.","favorite":"Moj izbor","keep_showing":"Uvek pokazuj ovo obaveštenje","GO5_TOAST_INFO_FOR_OPERATOR_SKYLINK_CZ":"","director":"Režiser","length":"Trajanje","cookie_policy_message":"Dragi korisniče, ovaj sajt koristi kolačiće kako bi vam ponudio usluge i funkcije koje na drugi način ne bi bile dostupne. Korišćenjem ovog sajta, dajete pristanak da se kolačići sačuvaju u vašem pregledaču.<br /><a href=\"../../cookie-policy\"> Pročitajte više.</a>","premier":"Premijera","season_comingsoon":"Nova sezona uskoro","cast":"Glumačka ekipa","sort_by":"Filtriraj prema","home_of_series":"Tvoje serije onlajn","age_rate_all":"Za sve uzraste","series_comingsoon_date":"Nova serija: ##localized date##","search":"Pretraga","user_no_results":"Vaša pretraga nije dala rezultate.","terms_of_use":"Uslovi korišćenja","footer_copyright_line":"Home Box Office, Inc. Sva prava zadržana. Ovaj sajt može imati sadržaj za odrasle.","device_list":"Računar, Smart TV, Tablet, Smartphone, Chromecast, Konzola, Apple TV","notification_indebted_button":"Ažuriraj podatke","search_result":"Rezultati pretrage","returning_premier":"Ponovo na HBO GO","all_":"Sve","maintenance_text":"Dragi posetioče,<br /><br /><br />HBO GO usluga trenutno nije dostupna. Naši tim vredno radi na ponovno uspostavljanju usluge.<br /><br /><br />Hvala na strpljenju i izvinjavamo se zbog neprijatnosti.","filter_dropdown_recently_added":"Novo","play":"Gledaj","your_rate":"Vaša ocena","details":"Detalji","GEOBLOCK_CONTENT":"<h1>Location error</h1>\r\n<h2>You attempted to start a subscription of the HBO GO service of Serbia but you seem to be located outside of its territory based on your IP address. <br /><br /> Please visit the HBOGO website of your location or try subscribing of Serbia's service when within its boundaries. <br /><br /> If you think this is a mistake please <a href=\"https://hbogo.rs/contact\">contact us.</a></h2>","new_episode":"Nova sezona","test_player":"Testiraj","date":"Datum","new_episode_kids":"Nova epizoda","logout_yes":"Odjavi se","browser_not_compatible":"Dragi posetioče,<br /><br />kako bi koristio uslugu, molimo da ažuriraš pregledač<br />ili preuzmeš neki od podržanih:<br /><br />Chrome™ 35+<br />Firefox 48+<br />Safari® 9+<br />Edge<br />Internet Explorer® 11+","series_premier":"Premijera serije","create_pin_first":"Napravite PIN zaštite za decu","duration_mins":"min","comingsoon_episode":"Nova epizoda uskoro","GO5_TOAST_INFO_FOR_OPERATOR_UPC_RO":"","start_time":"Dostupno od","user_registration":"Registracija","watch_on_your_device":"Gledaj na omiljenom uređaju","notification_prospect_button":"","comingsoon_date":"Premijera: ##localized date##","submitbtn":"Pošalji","series":"Serije","notification_terminated_text":"","genre":"Žanr","ok":"OK","season":"Sezona","episode_number":"Epizoda %s","popularity":"Popularno","episode":"Epizoda","lock_now":"Zaključaj","season_number":"Sezona %s","registration_request_alert":"Morate se odjaviti da biste završili registraciju","download_app":"Preuzmi HBO GO aplikaciju","filter_dropdown_popularity":"Popularno","search_placeholder":"Pretraži filmove/serije…","trailer":"Trejler","filter_dropdown_production_year":"Godina produkcije","GO5_TOAST_INFO_FOR_OPERATOR_CYFROWY_POLSAT":"","pt_footer_copyright_line":"","recent":"Novo","origin_country":"Država","rating":"Ocena","user_settings":"Podešavanja","gdpr_cookie_policy_message":"<p><strong>Dragi posetioci,</strong><br /> Ovaj sajt koristi kolačiće kako bi omogućio pružanje HBO GO usluge i radi poboljšanja iskustva korisnika, kao i u svrhe analitike i marketinga. “Za više informacija” ili kliknite na “Prihvatam” kako bi prihvatili sve vrste kolačića. Saznajte više u našim <a href=\"../../kolacici\">Pravilima o kolačićima</a>.</p>","similar_contents":"Slični sadržaj","rate":"Oceni","kids_check_your_mail_description":"Proverite vašu e-mail adresu.","compatibility_check":"Provera kompatibilnosti","magazine":"Magazin","audio":"Audio","first_option":"Prva opcija","attention_parents":"Pažnja, roditelji","filter_dropdown_manual":"Preporuke","login_to_rate":"Prijavi se i oceni naslov","contact":"Kontakt","gdpr_cookie_policy_button_read_more":"ZA VIŠE INFORMACIJA","open_app":"Otvori HBO GO aplikaciju","faq":"Često postavljana pitanja","user_min_char":"Reč koju tražite mora imati minimum 3 slova.","notification_indebted_text":"Plaćanje nažalost nije bilo uspešno. Molimo ažurirajte podatke o plaćanju kako biste uživali u HBO GO sadržaju.","episode_premier":"Premijera","GO5_TOAST_INFO_FOR_OPERATOR_SKYLINK_SK":"","follow_us":"Prati nas","filter_dropdown_a_z":"A - Ž","age_rate":"Starosna granica","newsletter_success":"Uspešno ste se prijavili za newsletter.","notification_prospect_text":"","maybe_later":"Možda kasnije","cookie_policy":"Pravila o kolačićima","series_episode_premier":"Nova epizoda","filter_dropdown_imdb":"IMDb ocena","gdpr_cookie_policy_button_text":"Prihvati","cancel":"Otkaži","user_login":"Prijava","comingsoon_episode_date":"Nova epizoda: ##localized date##","watchlist":"Moj izbor","user_logout":"Odjava","license_end":"Dostupno do","notification_terminated_button":"","user_no_results_reco":"Molimo proverite da li ste ispravno napisali reč ili tražite nešto jednostavnije.","subtitle":"Titlovi","episode_number_long":"Epizoda %s","read_less":"Prikaži manje","read_more":"Prikaži više","premier_kids":"Premijera","compatibility_error":"Pregledač nije podržan.","GO5_TOAST_INFO_FOR_OPERATOR_UPC_CZ":"","comingsoon":"uskoro","series_comingsoon":"Nova serija uskoro","privacy":"Politika privatnosti","schedule":"Raspored","browser_not_compatible_ie":"Dragi posetioče,<br /><br />kako bi koristio uslugu, molimo da ažuriraš pregledač<br />ili preuzmeš neki od podržanih:<br /><br />Chrome™ 35+<br />Firefox 48+<br />Safari® 9+<br />Edge","maintenance_title":"Servisiranje u toku","error":"Greška","movies":"Filmovi","how_did_you_like_it":"Kako ti se dopao naslov?","device_activation_alert":"Morate biti prijavljeni da završite registraciju uređaja","logout_message_title":"Da li zaista želite da se odjavite?"},snapEngage: 1,defaultTitle: 'HBO GO',uvtants: 1,env: 'prd',tld: 'rs',version: '5.22.1',buildVersion: null,vcmsApi: 'https://srapi.hbogo.eu/v8/Configuration/json/{language}/',vcmsApiVersion: 'v8',vcmsLang: 'SRP',vcmsCountry: 'SER',newBookmarking: '1',bookmarkhistoryupdated: 0,globalSettings: {"android_app_name":"hbogo","android_package_name":"eu.hbogo.android","chat_id_bg":"c798d91c-8c79-4fcc-8124-b95e6116d77c","chat_id_en":"1beba3c2-a8dd-4499-bbea-8934f60c1047","chat_id_hr":"3d0dd63e-f900-413b-8efa-3edbfcc50fc6","chat_id_mk":"de1d8269-48c4-4c91-b487-c8fd71dfc1df","chat_id_sl":"02d83eeb-06a8-4af3-9ffe-21611d2344d5","chat_id_sr":"1582ca67-3bfb-4f90-968e-cb0e8264b1c5","ios_app_store_id":"1099737113","ios_store_link":"https://itunes.apple.com/app/hbo-go/id1099737113","notification_indebted":"1","notification_prospect":"0","optimizely_id":"15439210295","social_facebook_page":"https://www.facebook.com/hbosrbija","social_instagram_page":"","social_twitter_page":"https://twitter.com/HBOAdria","social_youtube_page":"https://youtube.com/HBOAdria","typography_id":"7292232/6755192","notification_terminated":"0"},deepLink: {"ios_store_link":"https://itunes.apple.com/app/hbo-go/id1099737113","ios_app_store_id":"1099737113","android_package_name":"eu.hbogo.android","android_app_name":"hbogo"},availableLangs: {"sr":"srpski","en":"English","hr":"hrvatski","sl":"slovenščina","mk":"македонски"},transPairs: {"en":"%2F","hr":"%2F","sl":"%2F","mk":"%2F","bs":"%2F","me":"%2F"}}</script><script src="/assets/5.22.1/sdk/vendor-core.js"></script><script src="/assets/5.22.1/sdk/go.sdk.js"></script><script src="/assets/5.22.1/sdk/sdk-core.js"></script><script src="/assets/5.22.1/js/bundle.min.js"></script></body></html>