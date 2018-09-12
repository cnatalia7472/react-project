import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAHjigyZ9STy9o517Q_PuzN71ixZy9OXLI",
    authDomain: "forms-test-aa6ca.firebaseapp.com",
    databaseURL: "https://forms-test-aa6ca.firebaseio.com",
    projectId: "forms-test-aa6ca",
    storageBucket: "forms-test-aa6ca.appspot.com",
    messagingSenderId: "669796846602"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    firebaseDB,
    googleAuth
}