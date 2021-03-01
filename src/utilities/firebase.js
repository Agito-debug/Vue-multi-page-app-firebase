



import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyASlYeSOYm450-T0DU64bpQjB_YStY9bAk",
    authDomain: "vue-full-course-cc2b0.firebaseapp.com",
    projectId: "vue-full-course-cc2b0",
    storageBucket: "vue-full-course-cc2b0.appspot.com",
    messagingSenderId: "673560804710",
    appId: "1:673560804710:web:0a3625ef438b674fdd5ca7"

};
/* Instead of  firebase.initializeApp(firebaseConfig);
use   firebase.default.initializeApp(firebaseConfig);
 */
firebase.default.initializeApp(firebaseConfig);

export default firebase;