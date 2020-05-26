document.getElementById('submit').addEventListener("click",function(e){

    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;

    if ((userName == "Karim Walid" && password == "AlAlaminTowersGroup1") || (userName == "Test" && password == "Test"))
    {
        e.preventDefault();
        alert("Login Successfully");
        window.location.replace("pages/main.html");
    }
});