
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
            <h2 class="header">${data.name}</h2>
            <img style="margin-left:auto;margin-right:auto;display:block;cursor:pointer;" 
                src="${data.gecko}" alt="${data.name}" 
                onclick="openModal('${data.name}', '${data.gecko}', '${data.description}', '${data.price}', '${data.grandparents1}', '${data.grandparents2}', '${data.parents}')">
                <h2 class="header">$${data.price}.00</h2>
            `;
        // Chicken butt!
        // Append the reptile card to the container
        reptileContainer.appendChild(reptileCard);
    });
});

function openModal(name, image, desc, price, gp1, gp2, par) {
    const modalImages = document.getElementById('modalImages');
    const modalContent = document.getElementById('modalContent');
    var temp = image;
    modalImages.innerHTML = `
    <img src="${image}" alt="${name}">
    `;
    modalContent.innerHTML = `
      <h2 class="header2">${name}<span class="pg" style="margin-top:100px;font-size:20px"><br>${desc}<br><br>$${price}.00 CAD</span></h2>
      <img src="${image}" alt="${name}" class="chicken" onclick="changeImage('${image}')" margin-right:10px;">
      <img src="${par}" alt="${name}" class="chicken" onclick="changeImage('${par}')" margin-right:10px;">
      <img src="${gp1}" alt="${name}" class="chicken" onclick="changeImage('${gp1}')" margin-right:10px;">
      <img src="${gp2}" alt="${name}" class="chicken" onclick="changeImage('${gp2}')">
      <!-- Add more details if needed -->
    `;
    const modal = document.getElementById('geckoModal');
    modal.style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('geckoModal');
    modal.style.display = 'none';
  }

  function changeImage(image)
  {
    modalImages.innerHTML = `
    <img src="${image}" alt="${name}" style="width:500px;border:5px solid white">
    `;
  }