// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCyPVtxfX2hM-QHhTnoOfGm50ejoD95Il8",
    authDomain: "project-94-c9c29.firebaseapp.com",
    databaseURL: "https://project-94-c9c29-default-rtdb.firebaseio.com",
    projectId: "project-94-c9c29",
    storageBucket: "project-94-c9c29.appspot.com",
    messagingSenderId: "478659264452",
    appId: "1:478659264452:web:e6fa3a149c664089b06e91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() 
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html";  
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey; 
       console.log("Room Name = " + Room_names);
       row = "<div class='room_name' id= " + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
});
});
}
getData();

function redirectToRoomName(name) 
{
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "Kwitter_page.html";   
}