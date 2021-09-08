// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHZgtMZ5NzhcTTDlZVmwIMBZtEFTcLHDQ",
    authDomain: "letschat-web-app---1-6feff.firebaseapp.com",
    databaseURL: "https://letschat-web-app---1-6feff-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app---1-6feff",
    storageBucket: "letschat-web-app---1-6feff.appspot.com",
    messagingSenderId: "522744611880",
    appId: "1:522744611880:web:ee6b54766603618a29211d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function add_room() {
    room_name = document.getElementById("room_name").value;

   localStorage.setItem("Roomname",room_name);

   window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();