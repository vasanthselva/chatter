import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBlYpDtmHBtaHXTyHaBkRaq5ueNNAzgnAE",
  authDomain: "chathx4.firebaseapp.com",
  projectId: "chathx4",
  storageBucket: "chathx4.appspot.com",
  messagingSenderId: "860283931203",
  appId: "1:860283931203:web:73ebc47117436a5ab322f6"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Auth and export it
const auth = getAuth(app);

export { auth };