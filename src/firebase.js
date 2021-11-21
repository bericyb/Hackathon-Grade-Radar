// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFs00pHXGsCUWTAxqZQw75szR7Hl4jjG8",
  authDomain: "hackathontemp-e3614.firebaseapp.com",
  databaseURL: "https://hackathontemp-e3614-default-rtdb.firebaseio.com",
  projectId: "hackathontemp-e3614",
  storageBucket: "hackathontemp-e3614.appspot.com",
  messagingSenderId: "471169983768",
  appId: "1:471169983768:web:1dbc9a57ff60f5ae89aa6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
