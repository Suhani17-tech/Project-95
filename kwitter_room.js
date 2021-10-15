const firebaseConfig = {
    apiKey: "AIzaSyDf8q3G9SZQXPu05owAkE9P9fXpBiIvqHY",
    authDomain: "project-94-88f02.firebaseapp.com",
    databaseURL: "https://project-94-88f02-default-rtdb.firebaseio.com",
    projectId: "project-94-88f02",
    storageBucket: "project-94-88f02.appspot.com",
    messagingSenderId: "352250698754",
    appId: "1:352250698754:web:d3e2e6c078941d06209b1b"
  };

  firebase.initializeApp(firebaseConfig);

  function add_room(){
   room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
    resoure: "This is the room name"
    });
  }