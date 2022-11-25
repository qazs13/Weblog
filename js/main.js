var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 50) {
    document.getElementById("about").style.opacity = 1;      
    document.getElementById("about").style.display = "block";
    document.getElementById("about").style.bottom = "0";
  } else {
    document.getElementById("about").style.display = "none";
    document.getElementById("about").style.bottom = "-300";
  }
};

document.getElementById('closeContact').addEventListener("click", function(){
  document.getElementById('contactUsButton').style.display = "block";
  document.getElementById('contactUs').style.display = "none";
});

document.getElementById('contactUsButton').addEventListener("click", function(){
  document.getElementById('contactUsButton').style.display = "none";
  document.getElementById('contactUs').style.display = "block";
});

document.getElementById('closeSuggestions').addEventListener("click", function(){
  document.getElementById('SuggestionsButton').style.display = "block";
  document.getElementById('Suggestions').style.display = "none";
});

document.getElementById('SuggestionsButton').addEventListener("click", function(){
  document.getElementById('SuggestionsButton').style.display = "none";
  document.getElementById('Suggestions').style.display = "block";
});

document.getElementById('fullSize').addEventListener("click", function(){
  document.getElementById('contactUs').style.display = "none";
  document.getElementById('contactUsButton').style.display = "block";
  document.getElementById('SuggestionsButton').style.display = "block";
  document.getElementById('Suggestions').style.display = "none";
});


document.getElementById('sub').addEventListener("click", function(e){
  var name = document.getElementById('name'),
      email = document.getElementById('email'),
      message = document.getElementById('message');
      e.preventDefault();
  if (name.value != "" && email.value != "" && message.value != "")
  {
    Email.send({
      Host: "smtp.gmail.com",
      Username : "karimwas@gmail.com",
      Password : "password",
      To : "karimwas@gmail.com",
      From : email.value,
      Subject : "From Al Aalmien Web Site",
      Body : message.value,
      }).then(
        message => alert("mail sent successfully")
      );
    name.innerHTML = "";
    email.innerHTML = "";
    message.innerHTML = "";
  }
  else
  {
    alert("Please Fill all Sections")
  }
});
</body>  <script src="//code.tidio.co/pttkxcowktms3oonx7t0w1a9ehacv66c.js" async></script>
  }
