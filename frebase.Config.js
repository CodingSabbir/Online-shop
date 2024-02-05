import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBxWN7iqoXBbIVhTzNmFiVusyScvtbZQw",
  authDomain: "online-shop-58179.firebaseapp.com",
  projectId: "online-shop-58179",
  storageBucket: "online-shop-58179.appspot.com",
  messagingSenderId: "455632684060",
  appId: "1:455632684060:web:d63c70b32159ba30230bd9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth