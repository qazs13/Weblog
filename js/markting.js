document.getElementById('viewPlan').addEventListener("click",function(e){
    console.log(e.pageY);
    document.getElementById('previewPicture').style.top = e.screenY;
    document.getElementById('previewPicture').style.display = "block";
    window.scroll(0, e.pageY+200);
});

document.getElementById('close').addEventListener("click",function(e){
    document.getElementById('previewPicture').style.display = "none";
});  
<script src="//code.tidio.co/pttkxcowktms3oonx7t0w1a9ehacv66c.js" async></script>
</body> 
}
