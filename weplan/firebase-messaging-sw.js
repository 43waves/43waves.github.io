// Service worker for Firebase Cloud Messaging on web.
// Handles background data messages when the app is not in focus.
importScripts("https://www.gstatic.com/firebasejs/11.9.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.9.1/firebase-messaging-compat.js");

// Firebase config — keep in sync with lib/firebase_options.dart (web config).
// This is a fallback for background messages — the main app handles foreground.
firebase.initializeApp({
  apiKey: "AIzaSyBt5TXTNyK1XIZNtlCFbRv4ogDnDw0wlBE",
  authDomain: "weplan-app.firebaseapp.com",
  projectId: "weplan-app",
  storageBucket: "weplan-app.firebasestorage.app",
  messagingSenderId: "414476010264",
  appId: "1:414476010264:web:40a9bd4bd7804c5e8e546d",
});

const messaging = firebase.messaging();

// Background message handler — data-only messages are silently received.
messaging.onBackgroundMessage(function(_payload) {
  // Do not show notifications — we only use data messages for signaling.
  // The main app will handle the signal when it comes to foreground.
});
