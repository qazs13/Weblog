window.onload = function()
{
  if (screen.width <= 990)
  {
    document.getElementById('c').style.display = "block";
    document.getElementById('c').style.height = "110px";
    document.getElementById('c').style.lineHeight = "110px";
    document.getElementById('b').style.marginRight = "5%";
    document.getElementsByClassName('navabrDesgin')[0].style.height = "auto";
  }
  else
  {
    document.getElementsByClassName('navabrDesgin')[0].style.height = "18%";
  }
};