// Les Librairies

import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBYOFCmFT56ok84LLMvh5iz0vuX0WR76XY",
    authDomain: "blog-react-64c7d.firebaseapp.com",
    databaseURL: "https://blog-react-64c7d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blog-react-64c7d",
    storageBucket: "blog-react-64c7d.appspot.com",
    messagingSenderId: "641830671734",
    appId: "1:641830671734:web:3a0c4dd60a772f2fb3d657"
};
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;