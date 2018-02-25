document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("main").style.display ="block";
	document.getElementById("headPics").style.display ="block";
	
});
document.getElementById("bg2").addEventListener("click", function(){
    document.getElementById("main").style.display ="block";
	document.getElementById("bodyPics").style.display ="block";
});
document.getElementById("bg3").addEventListener("click", function(){
    document.getElementById("main").style.display ="block";
	document.getElementById("legPics").style.display ="block";
});
document.getElementById("bg4").addEventListener("click", function(){
    document.getElementById("main").style.display ="block";
	document.getElementById("footPics").style.display ="block";
});
document.getElementById("main").addEventListener("click", function(){
	document.getElementById("main").style.display ="none";
	document.getElementById("footPics").style.display ="none";
 	document.getElementById("bodyPics").style.display ="none";
	document.getElementById("legPics").style.display ="none";
	document.getElementById("headPics").style.display ="none";
});