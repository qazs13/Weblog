document.getElementById('submit').addEventListener("click",function(e){

    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    e.preventDefault();

    if (userName == "Karim Walid" && password == "AlAlaminTowersGroup1")
    {
        alert("Login Successfully");
        window.location.replace("pages/main.html");
    }
    else
    {
        alert("Invalid User Name Or Password");
        document.getElementById('userName').value = "";
        document.getElementById('password').value = "";
    }
});