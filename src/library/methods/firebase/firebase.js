import { initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})

class Firebase {
  constructor(app, db){
    this.app = app;
    this.db = db;
  }
}

const firebase = new Firebase(app, db);

export default firebase;
