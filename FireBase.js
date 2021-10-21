import firebase  from 'firebase';


// const settings = {timestampsInSnapshots:true} ;
 const config = {
     projectId:'chatguys-da9cf',
     apiKey:'AIzaSyBSoZq6LYjbQSTK4zmW81IIygZ8Ul7ZoY4',
     databaseURL:"https://chatguys-da9cf-default-rtdb.firebaseio.com",

 } 
 firebase.initializeApp(config);


 export default firebase;