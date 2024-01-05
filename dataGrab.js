
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVSmOD4MRVeupfQ33Umlry0pjHvVtylkA",
    authDomain: "vintage-reptiles.firebaseapp.com",
    projectId: "vintage-reptiles",
    storageBucket: "vintage-reptiles.appspot.com",
    messagingSenderId: "547191562645",
    appId: "1:547191562645:web:8ccc52ccdde7b239e0969c"
  };

  firebase.initializeApp(firebaseConfig);
  // Fetch reptile data from Firestore
const reptilesCollection = firebase.firestore().collection('geckos');

reptilesCollection.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    // Process and display reptile data on your site
    console.log(data);
  });
});