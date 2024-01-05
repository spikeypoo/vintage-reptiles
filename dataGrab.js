
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
const reptileContainer = document.getElementById('reptileContainer');

reptilesCollection.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Create HTML elements for each reptile
        const reptileCard = document.createElement('div');
        reptileCard.className = 'reptile-card';

        reptileCard.innerHTML = `
            <h2 class="header" style="text-decoration:none">${data.name}</h2>
            <img style="margin-left:auto;margin-right:auto;display:block" src="${data.gecko}" alt="${data.name}">
        `;

        // Append the reptile card to the container
        reptileContainer.appendChild(reptileCard);
    });
});