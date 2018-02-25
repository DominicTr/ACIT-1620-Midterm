var textComs = document.getElementById("textCombos");
var head = document.getElementById("HEAD");
var shirt = document.getElementById("SHIRT");
var pants = document.getElementById("PANTS");
var shoes = document.getElementById("SHOES");
var Rhead = document.getElementById("headR");
var Rbody = document.getElementById("bodyR");
var Rleg = document.getElementById("legR");
var Rfoot = document.getElementById("footR");
var prevB = document.getElementById("prev");
var nextB = document.getElementById("next");

var Himage = 1;
var Bimage = 1;
var Limage = 1;
var Fimage = 1;



textComs.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		if(textComs.value == "combo1"){
			Himage = 1;
			Bimage = 1;
			Limage = 1;
			Fimage = 1;
			head.src = "imgs/gears/h" + Himage + ".png";
			shirt.src = "imgs/gears/b" + Bimage + ".png";
			pants.src = "imgs/gears/l" + Limage + ".png";
			shoes.src = "imgs/gears/f" + Fimage + ".png";
		}
		else if(textComs.value == "combo2"){
			Himage = 2;
			Bimage = 2;
			Limage = 2;
			Fimage = 2;
			head.src = "imgs/gears/h" + Himage + ".png";
			shirt.src = "imgs/gears/b" + Bimage + ".png";
			pants.src = "imgs/gears/l" + Limage + ".png";
			shoes.src = "imgs/gears/f" + Fimage + ".png";
		}
		else if(textComs.value == "combo3"){
			Himage = 3;
			Bimage = 3;
			Limage = 3;
			Fimage = 3;
			head.src = "imgs/gears/h" + Himage + ".png";
			shirt.src = "imgs/gears/b" + Bimage + ".png";
			pants.src = "imgs/gears/l" + Limage + ".png";
			shoes.src = "imgs/gears/f" + Fimage + ".png";
		}
		else if(textComs.value == "random"){
			Himage = Math.floor(Math.random() * 3) + 1;
			Bimage = Math.floor(Math.random() * 3) + 1;
			Limage = Math.floor(Math.random() * 3) + 1;
			Fimage = Math.floor(Math.random() * 3) + 1;
			head.src = "imgs/gears/h" + Himage + ".png";
			shirt.src = "imgs/gears/b" + Bimage + ".png";
			pants.src = "imgs/gears/l" + Limage + ".png";
			shoes.src = "imgs/gears/f" + Fimage + ".png";
		}
		
		
		
		
		
		textComs.value ="";
	}
});
prevB.addEventListener("click", function(){
	if(Rhead.checked){
		Himage = Himage - 1;
		if(Himage < 1){
			Himage = 3;
		}
		head.src = "imgs/gears/h" + Himage + ".png";
	}
	else if(Rbody.checked){
		Bimage = Bimage - 1;
		if(Bimage < 1){
			Bimage = 3;
		}
		shirt.src = "imgs/gears/b" + Bimage + ".png";
	
	}
	else if(Rleg.checked){
		Limage = Limage - 1;
		if(Limage < 1){
			Limage = 3;
		}
		pants.src = "imgs/gears/l" + Limage + ".png";
	}
	else if(Rfoot.checked){
		Fimage = Fimage - 1;
		if(Fimage < 1){
			Fimage = 3;
		}
		shoes.src = "imgs/gears/f" + Fimage + ".png";

	}
	else{
		alert("Choose something")
	}
});

nextB.addEventListener("click", function(){
	if(Rhead.checked){
		Himage = Himage + 1;
		if(Himage > 3){
			Himage = 1;
		}
		head.src ="imgs/gears/h" + Himage + ".png";
	}
	else if(Rbody.checked){
		Bimage = Bimage + 1;
		if(Bimage > 3){
			Bimage = 1;
		}
		shirt.src ="imgs/gears/b" + Bimage + ".png";
	}
	else if(Rleg.checked){
		Limage = Limage + 1;
		if(Limage >3 ){
			Limage = 1;
		}
		pants.src = "imgs/gears/l" + Limage + ".png";
		
	}
	else if(Rfoot.checked){
		Fimage = Fimage - 1;
		if(Fimage > 3){
			Fimage = 1;
		}
		shoes.src = "imgs/gears/f" + Fimage + ".png";
	}
	else{
		alert("Choose something")
	}
});
