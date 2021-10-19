import firebase  from 'firebase/app';
// import {firestore} from 'firebase/firestore'

const settings = {timestampsInSnapshots:true} ;
 const config = {
     projectId:'chatguys-da9cf',
     apiKey:'AIzaSyBSoZq6LYjbQSTK4zmW81IIygZ8Ul7ZoY4',
     databaseURL:"https://chatguys-da9cf-default-rtdb.firebaseio.com"

 } 
 firebase.initializeApp(config);

//  firebase.firestore().settings(settings);

 export default firebase;