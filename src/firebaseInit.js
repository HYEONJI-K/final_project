import firebase from "firebase/app";
import "firebase/messaging";

// Firebase SDK >> 경우에 맞게 수정
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

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// .env.production public key 
const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};
// push message
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
