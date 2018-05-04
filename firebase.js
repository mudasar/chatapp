import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBDYH031m4ZnDK_hi708gG7wcofgRPIsWw",
    authDomain: "reactnativeauth-55160.firebaseapp.com",
    databaseURL: "https://reactnativeauth-55160.firebaseio.com",
    projectId: "reactnativeauth-55160",
    storageBucket: "reactnativeauth-55160.appspot.com",
    messagingSenderId: "990156836838"
  };
  
  firebase.initializeApp(config);

  export default firebase;