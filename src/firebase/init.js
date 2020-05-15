import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const configOptions = {
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