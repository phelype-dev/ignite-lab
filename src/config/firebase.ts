import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBi1rXDx2WOVe7Khf01B8E7aaFJ9Q-umh8",
  authDomain: "githubauthentication-57206.firebaseapp.com",
  projectId: "githubauthentication-57206",
  storageBucket: "githubauthentication-57206.appspot.com",
  messagingSenderId: "1053671453124",
  appId: "1:1053671453124:web:82371ab4fd1db86b083491",
};

const app = initializeApp(firebaseConfig);

export { app };
