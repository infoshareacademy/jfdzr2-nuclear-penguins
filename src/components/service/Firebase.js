import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBmp8Ywjen9odhqSyhIkmZr2Lgo3G2LSl0',
  authDomain: 'nuclear-penguins.firebaseapp.com',
  projectId: 'nuclear-penguins',
  storageBucket: 'nuclear-penguins.appspot.com',
  messagingSenderId: '639162485186',
  appId: '1:639162485186:web:9d8251fefea8e7baa66e5b',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
