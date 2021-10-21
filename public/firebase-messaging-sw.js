// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBQyuiMPYHrMeCeyHnwuPm8rx90-IDotXE",
  authDomain: "push-web-app-539dd.firebaseapp.com",
  databaseURL: "https://push-web-app-539dd-default-rtdb.firebaseio.com",
  projectId: "push-web-app-539dd",
  storageBucket: "push-web-app-539dd.appspot.com",
  messagingSenderId: "783888848417",
  appId: "1:783888848417:web:f92d4c922005528dacb560",
  measurementId: "G-N1Y5NDNVCC"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
