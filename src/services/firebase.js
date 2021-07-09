
import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCRzgfD3otPP_um5lGJnW6X77F2wKG7FMU",
    authDomain: "especialidadreact.firebaseapp.com",
    projectId: "especialidadreact",
    storageBucket: "especialidadreact.appspot.com",
    messagingSenderId: "935274085436",
    appId: "1:935274085436:web:aa57ca9dc44326f9981739",
    measurementId: "G-0QSPLZYXLR"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();