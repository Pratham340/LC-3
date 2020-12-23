function addUser(){
    user_name = document.getElementById("txt1").value;
    localStorage.setItem("txt1", user_name);

    window.location ="LetsChat_room.html";
}