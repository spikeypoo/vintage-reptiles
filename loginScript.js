
const firebaseConfig = {
    apiKey: "AIzaSyDVSmOD4MRVeupfQ33Umlry0pjHvVtylkA",
    authDomain: "vintage-reptiles.firebaseapp.com",
    projectId: "vintage-reptiles",
    storageBucket: "vintage-reptiles.appspot.com",
    messagingSenderId: "547191562645",
    appId: "1:547191562645:web:8ccc52ccdde7b239e0969c"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    console.log('attempting login!');
    // Sign in with Firebase Authentication
    const userCredential = await auth.signInWithEmailAndPassword(username, password);

    // Redirect to the page with the form on successful login
    window.location.href = 'reptile-form.html';
    } catch (error) {
    console.error('Login failed:', error);
    alert('Invalid username or password. Please try again.');
  }
});