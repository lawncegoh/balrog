import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const configOptions = {
    // apiKey: "AIzaSyCgLVju_UBGx9ny3iZ1G5ZpkAn8rVLCFFY",
    // authDomain: "bt3103-forum.firebaseapp.com",
    // databaseURL: "https://bt3103-forum.firebaseio.com",
    // projectId: "bt3103-forum",
    // storageBucket: "bt3103-forum.appspot.com",
    // messagingSenderId: "390281398455",
    // appId: "1:390281398455:web:bfbc7b251808271ddc2532",
    // measurementId: "G-1EXGWCK77H"
    apiKey: "AIzaSyD7I6cSf0aqZ8ID7G9W481ncggqXWOwoIo",
    authDomain: "zakum-bcdf4.firebaseapp.com",
    databaseURL: "https://zakum-bcdf4.firebaseio.com",
    projectId: "zakum-bcdf4",
    storageBucket: "zakum-bcdf4.appspot.com",
    messagingSenderId: "368715245565",
    appId: "1:368715245565:web:d97713f923210be0759b94",
    measurementId: "G-JWFTCR6YYJ"
  };

const firebaseApp = firebase.initializeApp(configOptions);

const db= firebase.firestore();
window.db = db;

export default firebaseApp.firestore();