// Sends the person on from an invite link (https://43waves.github.io/weshare/join#CODE).
//
// If Weshare is installed, the button opens it with the code; if not, it goes
// to Google Play with the code attached, and Weshare reads it after the install.
// The code is only ever taken from the fragment, checked against the shape of
// a real code, and put into the two addresses below. It is never shown, stored
// or sent anywhere by this page.
(function () {
  var PACKAGE = 'com.redwolf.weshare';
  var PLAY = 'https://play.google.com/store/apps/details?id=' + PACKAGE;

  var android = /Android/i.test(navigator.userAgent);
  document.getElementById('android').hidden = !android;
  document.getElementById('other').hidden = android;
  if (!android) return;

  // Eight characters, as the app makes them (no 0, 1, I or O), maybe with a dash.
  var match = /^#([A-HJ-NP-Z2-9]{4})-?([A-HJ-NP-Z2-9]{4})$/i.exec(location.hash);
  if (!match) return; // no (valid) code: the button is just the Play page
  var code = (match[1] + match[2]).toUpperCase();

  var store = PLAY + '&referrer=' + encodeURIComponent('invite=' + code);
  // An Android intent: opens the app if it is installed, otherwise goes to the
  // fallback. The code rides as ?c= since an intent cannot carry a fragment.
  document.getElementById('open').href =
    'intent://43waves.github.io/weshare/join?c=' + code +
    '#Intent;scheme=https;package=' + PACKAGE +
    ';S.browser_fallback_url=' + encodeURIComponent(store) + ';end';
})();
