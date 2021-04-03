var firebaseConfig = {
    apiKey: "AIzaSyCYXFMVEY5_-lx4zjQ-cFZltP-JliSrBC8",
    authDomain: "class-test-1cbe6.firebaseapp.com",
    databaseURL: "https://class-test-1cbe6-default-rtdb.firebaseio.com",
    projectId: "class-test-1cbe6",
    storageBucket: "class-test-1cbe6.appspot.com",
    messagingSenderId: "313484211831",
    appId: "1:313484211831:web:5911fff5e47e969cca7872",
    measurementId: "G-4MXCSNXV5M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}