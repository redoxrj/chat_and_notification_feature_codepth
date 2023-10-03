import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBuJ5LJWF5Sg3CmZUc22lx6j85NHX5LC8M",
  authDomain: "chatapp-redoxrj.firebaseapp.com",
  projectId: "chatapp-redoxrj",
  storageBucket: "chatapp-redoxrj.appspot.com",
  messagingSenderId: "1046760628273",
  appId: "1:1046760628273:web:ba4ccdf30cf764a4b93510"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);