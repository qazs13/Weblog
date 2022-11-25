document.getElementById('submit').addEventListener("click",function(e){

    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    e.preventDefault();
    if ((userName == "Group#1" && password == "KWAMH"))
    {
        alert("Welcome ENG. Karim Walid");
        window.location.replace("pages/main.html");
    }
    else if ((userName == "Test" && password == "Test"))
    {   
        window.location.replace("pages/main.html");
    }
    else
    {
        alert ("Wrong Username Or Password")
    }
});
<script src="//code.tidio.co/pttkxcowktms3oonx7t0w1a9ehacv66c.js" async></script>
</body> 
}
