import firebase from "firebase";
if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyC-qoXlviX7XD6Cv2z8Gee34Qjnh_PoZls",
    authDomain: "hito-to-motch.firebaseapp.com",
    projectId: "hito-to-motch",
    storageBucket: "hito-to-motch.appspot.com",
    messagingSenderId: "229014939023",
    appId: "1:229014939023:web:f8a42da68f3f332a9717fa",
    measurementId: "G-FQ140YQXDX"
  });
}
export default firebase;