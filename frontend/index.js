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
    curId = (curId + 1) % 2;
    var username = document.getElementById("user-name");
    var usergender = document.getElementById("user-gender");
    var userimage = document.getElementById("user-image");
    username.innerHTML = users[curId].name;
    usergender.innerHTML = users[curId].gender;
    userimage.src = users[curId].image;
}