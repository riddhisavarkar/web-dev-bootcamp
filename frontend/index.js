//alert("welcome to web bootcamp")
var users =[
    {
        "name" : "John Doe",
        "gender" : "Male",
        "image" : "john.png"
    },
    {
        "name" : "Jane Smith",
        "gender" : "Female",
        "image" : "jane.png"
    }
]
var curId = 0;
function toggleUser(){
    curId = (curId + 1) % users.length;
    var username = document.getElementById("user-name");
    var usergender = document.getElementById("user-gender");
    var userimage = document.getElementById("user-image");
    username.innerHTML = users[curId].name;
    usergender.innerHTML = users[curId].gender;
    userimage.src = users[curId].image;
}
function randomUser() {
    fetch("https://randomuser.me/api")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var userName = document.getElementById("user-name");
      var userGender = document.getElementById("user-gender");
      var userImage = document.getElementById("user-image");

      var newUserName = data.results[0].name.first + " " + data.results[0].name.last;
      var newUserGender = data.results[0].gender;
      var newUserImage = data.results[0].picture.large;
      userName.innerHTML = newUserName;
      userGender.innerHTML = newUserGender;
      userImage.src = newUserImage;

    })
    .catch(function(err) {
      console.log("Error occured : " + err);
    })
}
function myrandomUser() {
    fetch("/api/random-user")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var userName = document.getElementById("user-name");
      var userGender = document.getElementById("user-gender");
      var userImage = document.getElementById("user-image");

    
      userName.innerHTML = data.name;
      userGender.innerHTML = data.gender;
      userImage.src = data.image;

    })
    .catch(function(err) {
      console.log("Error occured : " + err);
    })
}