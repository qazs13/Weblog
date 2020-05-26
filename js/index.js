document.getElementById('submit').addEventListener("click",function(e){

    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;

    if ((userName == "Group#1" && password == "KWAMH") || (userName == "Test" && password == "Test"))
    {
        e.preventDefault();
        alert("Welcome Mr. Karim Walid");
        window.location.replace("pages/main.html");
    }
});