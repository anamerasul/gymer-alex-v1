// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AIzaSyBY_iyLTLt0IiaoyMWEtX3R848W0jOxVro",
    // authDomain: "gymer-alex.firebaseapp.com",
    // projectId: "gymer-alex",
    // storageBucket: "gymer-alex.appspot.com",
    // messagingSenderId: "343551885327",
    // appId: "1:343551885327:web:7585859947b042a618637a",
    // measurementId: "G-CKGKW7WY95"


    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
const myapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(myapp);


const app = { myapp, analytics }

const auth = getAuth(app.myapp)

export default auth