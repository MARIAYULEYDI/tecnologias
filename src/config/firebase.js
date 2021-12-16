import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAu-tYYjkaWKUg7F-qhIrdMaQXjOeBuQLo",
  authDomain: "realidadvirtual-60ce0.firebaseapp.com",
  projectId: "realidadvirtual-60ce0",
  storageBucket: "realidadvirtual-60ce0.appspot.com",
  messagingSenderId: "905650444707",
  appId: "1:905650444707:web:845c29a2488f4813b66216"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};