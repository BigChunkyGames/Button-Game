var itsOKtoLeave = "yes";
var intervention;
var fire;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.load();
    }
}

function start() {
	document.getElementById("divlvl1").style.display = "block";
	document.getElementById("divstart").style.display = "none";	
}
function Victory() {
	document.getElementById('victoryScreen').style.display = "block";
}
function endVictory() {
	document.getElementById('victoryScreen').style.display = "none";
}
function victory1() {
	document.getElementById("divlvl1").style.display = "none";
	document.getElementById("divlvl2").style.display = "block";
}
function victory2() {
	document.getElementById('divlvl2').style.display = "none";
	document.getElementById('divlvl3').style.display = "block";
}
function lvl2prank() {
	document.getElementById('ch2prank').style.padding= "333px";
	document.getElementById('lvl2').innerHTML= "please dont do this";
	document.getElementById('lvl2').style.fontSize= "10px";	
}
function victory3() {
	document.getElementById('divlvl3').style.display = "none";
	document.getElementById('divlvl4').style.display = "block";
}
function victory4() {
	document.getElementById('divlvl4').style.display = "none";
	document.getElementById('divlvl5').style.display = "block";
	document.getElementById('healthBar').style.display = "block";
	document.getElementById('theEntireGame').style.width = "25%";
	document.getElementById('heart1').style.display = "inline";
	document.getElementById('heart2').style.display = "inline";
	document.getElementById('heart3').style.display = "inline";	
	fire = new sound("not the game/othershitidk/Through the Fire and Flames.mp3");
	intervention = new sound("not the game/othershitidk/intervention.mp3");
}
function lvl5prank() {
	document.getElementById('button5').style.visibility= "visible";
	document.getElementById('lvl5obstacle').style.visibility= "visible";

	fire.stop(); fire.play();
	document.getElementById('background').style.backgroundImage= "url('not the game/othershitidk/lava.gif')";
	itsOKtoLeave = "no";
	document.getElementById('lvl5helperbutton').innerHTML= "what have you done";
}
function loseLife() {
	document.getElementById('deathHeart').style.display = "inline";
	setTimeout(stopHeartDying, 1170)
	switch (document.getElementById('lives').value){
		case "3":
			document.getElementById('lives').value ="2";
			document.getElementById('heart3').style.display = "none";
			intervention.stop(); intervention.play(); 
			break;
		case "2":
			document.getElementById('lives').value ="1";
			document.getElementById('heart2').style.display = "none";
			intervention.stop(); intervention.play();
			break;
		case "1":
			document.getElementById('heart1').style.display = "none";
			document.getElementById('victoryScreen').style.display = "block";
			document.getElementById('victoryDiv').innerHTML = "you died";
			document.getElementById('victoryDiv').style.animationDuration  = "4s";
			document.getElementById('background').style.animationDuration= "0s";
			setTimeout(die, 4000);
			document.getElementById('background').style.backgroundColor  = "red";
			document.getElementById('theEntireGame').style.backgroundColor  = "red";
			intervention.stop(); intervention.play();
	}	
}
function stopHeartDying() {
	document.getElementById('deathHeart').style.display = "none";

}
function die() {
	location.reload()
}	
function victory5() {
	document.getElementById('divlvl5').style.display = "none";
	document.getElementById('victoryText').innerHTML = "thats the end of the game for now";
}
function leftTheEntireGame() {
	if (itsOKtoLeave === "no") {
		loseLife();
	}
}	