var bgText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var picChooser = document.getElementById("picChooser");

var numUse = 0;

picChooser.addEventListener("change", function(){
    var picNum = parseInt(picChooser.value);
    
    if(picNum >3){
        picChooser.value =1;
        
    }
    else if(picNum <1){
        picChooser.value = 3;
    }
        prevDiv.style.backgroundImage = "url("+picChooser.value+".png)";
});

bgText.addEventListener("keyup", function(ev){
    console.log(ev.keyCode);
    if(ev.keyCode == 13) {
        
        
        console.log(c1.checked, c2.checked, c3.checked)
        if(c1.checked){
            //document.body.style.backgroundColor = bgText.value;
            if(bgText.value == "obama") {
                document.body.style.backgroundImage = "url(1.png)";
            }
            else if(bgText.value =="hilary"){
                document.body.style.backgroundImage = "url(3.png)";
            }
            else if(bgText.value =="trump"){
                document.body.style.backgroundImage = "url(2.png)";
            }
            else {
                document.body.style.backgroundColor = bgText.value;
            }
        }
        
        else if(c2.checked){
            //prevDiv.style.backgroundColor = bgText.value;
            if(bgText.value == "obama") {
                prevDiv.style.backgroundImage = "url(1.png)";
            }
            else if(bgText.value =="hilary"){
                prevDiv.style.backgroundImage = "url(3.png)";
            }
            else if(bgText.value =="trump"){
                prevDiv.style.backgroundImage = "url(2.png)";
            }
            else {
                prevDiv.style.backgroundColor = bgText.value;
            }
        }
        else if(c3.checked){
            //menu.style.backgroundColor =bgText.value;
            if(bgText.value == "obama") {
                menu.style.backgroundImage = "url(1.png)";
            }
            else if(bgText.value =="hilary"){
                menu.style.backgroundImage = "url(3.png)";
            }
            else if(bgText.value =="trump"){
                menu.style.backgroundImage = "url(2.png)";
            }
            else {
                menu.style.backgroundColor = bgText.value;
            }
        }
        else{
            alert("Choose an option");
        }
    //prevDiv.style.backgroundColor = bgText.value;
    bgText.value ="";
    
    
    numUse++;
    console.log(numUse);
    if(numUse > 5){
        //alert("you've reached the limit. Please pay to use more!!!");
        document.getElementById("display").innerHTML = ("You've reached the limit, pay to use more!");
    }
    
    }
});