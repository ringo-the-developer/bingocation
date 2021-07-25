import firebase from "firebase/app"

import "firebase/firestore"

if(!firebase.apps.length){
  firebase.initializeApp({
    apiKey: "AIzaSyD-WmPlUfMBxujcLZ37J5PnrjY5zXLeTt8",
    authDomain: "bingocation.firebaseapp.com",
    projectId: "bingocation",
    storageBucket: "bingocation.appspot.com",
    messagingSenderId: "966354091361",
    appId: "1:966354091361:web:a0d8fed42471b7c0bb1920",
    measurementId: "G-GT0QK98DB8"
  })
}

export default firebase