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
/*
document.getElementById('sub').addEventListener("click", function(e){
  var name = document.getElementById('name'),
      email = document.getElementById('email'),
      message = document.getElementById('message');
      e.preventDefault();
  if (name.value != "" && email.value != "" && message.value != "")
  {
    name.innerHTML = "";
    email.innerHTML = "";
    message.innerHTML = "";
  }
  else
  {
    alert("Please Fill all Sections")
  }
});*/
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "amrwsk2@hotmail.com",
	Password : "amrwsk",
	To : 'amrwsk@gmail.com',
	From : "amrwsk2@hotmail.com",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}