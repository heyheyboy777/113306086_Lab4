document.addEventListener("keydown", function (event)
{
	if(event.key === 'w'){
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
		animation("w");}
	if(event.key === 'a'){
		var kickBass = new Audio("sounds/kick-bass.mp3");
		kickBass.play();
		animation("a");}
	if(event.key === 's'){
		var snare = new Audio("sounds/snare.mp3");
		snare.play();
		animation("s");}
	if(event.key === 'd'){
		var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
		animation("d");}
	if(event.key === 'j'){
		var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
		animation("j");}
	if(event.key === 'k'){
		var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
		animation("k");}
	if(event.key === 'l'){
		var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
		animation("l");}

	});
	
var drum = document.getElementById("w");
w.addEventListener("click",function(){
	var crash = new Audio("sounds/crash.mp3");
		crash.play();
		animation("w");
});
var drum = document.getElementById("a");
a.addEventListener("click",function(){
	var kickBass = new Audio("sounds/kick-bass.mp3");
		kickBass.play();
		animation("a");
});
var drum = document.getElementById("s");
s.addEventListener("click",function(){
	var snare = new Audio("sounds/snare.mp3");
		snare.play();
		animation("s");
});
var drum = document.getElementById("d");
d.addEventListener("click",function(){
	var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
		animation("d");
});
var drum = document.getElementById("j");
j.addEventListener("click",function(){
	var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
		animation("j");
});
var drum = document.getElementById("k");
k.addEventListener("click",function(){
	var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
		animation("k");
});
var drum = document.getElementById("l");
l.addEventListener("click",function(){
	var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
		animation("l");
});
function animation(word){
	var drum = document.getElementById(word);
	drum.classList.add('pressed');
	setTimeout(function (){
    drum.classList.remove("pressed");
  },100);
}



	
	








