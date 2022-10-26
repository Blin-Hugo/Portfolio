// JavaScript Document
function myFunction1() {
  document.getElementById("change").style.backgroundColor = "#5D81A3";
  document.getElementById("change").style.color = "white";

  
}
function myFunction2() {
  document.getElementById("change").style.backgroundColor = "rgba(255, 255, 255, .0)";
  document.getElementById("change").style.color = "black";
  document.getElementById("vm1").style.backgroundColor = "rgba(255, 255, 255, .0)";
  document.getElementById("vm1").style.color = "black";
  document.getElementById("vm2").style.backgroundColor = "rgba(255, 255, 255, .0)";
  document.getElementById("vm2").style.color = "black";
}
	
	
function Change_vm1(){
	document.getElementById("vm1").style.backgroundColor = "#5D81A3";
  document.getElementById("vm1").style.color = "white";
}
	
function Change_vm2(){
	document.getElementById("vm2").style.backgroundColor = "#5D81A3";
  document.getElementById("vm2").style.color = "white";
}
	

function myFunction5() {
  document.getElementById("1").style.borderColor = "#5D81A3";
}
function myFunction6() {
  document.getElementById("1").style.borderColor = "rgba(255, 255, 255, .0)";
}
function myFunction7() {
  document.getElementById("2").style.borderColor = "#5D81A3";
}
function myFunction8() {
  document.getElementById("2").style.borderColor = "rgba(255, 255, 255, .0)";
}
function myFunction9() {
  document.getElementById("3").style.borderColor = "#5D81A3";
}
function myFunction10() {
  document.getElementById("3").style.borderColor = "rgba(255, 255, 255, .0)";
}
function myFunction11() {
  document.getElementById("4").style.borderColor = "#5D81A3";
}
function myFunction12() {
  document.getElementById("4").style.borderColor = "rgba(255, 255, 255, .0)";
}

function Transition() {
  const element = document.documentElement;
  let x = element.scrollLeft;
  let y = element.scrollTop;
if (y/255 < 1) {
	 document.getElementById("teste").style.opacity = y/255;
	document.getElementById("teste2").style.opacity = 1-(y/255);
	
        document.getElementById("myDIV").style.backgroundColor = "rgba(0,0,0," + (y/255) + ")" ;
		document.getElementById("ecrit").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
		document.getElementById("ecrit2").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	document.getElementById("ecrit3").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	document.getElementById("ecrit4").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
		document.getElementById("vm1").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
		document.getElementById("vm2").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	document.getElementById("vm3").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	document.getElementById("vm4").style.color = "rgba(" + y + "," + y + "," + y + "," + 1 + ")" ;
	
} else {
	document.getElementById("teste3").style.opacity = 3-(y/255);
	document.getElementById("teste").style.opacity = 4.5-(y/255);
	document.getElementById("teste4").style.opacity = ((y/255)-3);
	document.getElementById("myDIV").style.backgroundColor = "rgba(0,0,0," + (2-(y/255)) + ")" ;
		document.getElementById("ecrit").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
		document.getElementById("ecrit2").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("ecrit3").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("ecrit4").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("vm1").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
		document.getElementById("vm2").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("vm3").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
	document.getElementById("vm4").style.color = "rgba(" + (510-y) + "," + (510-y) + "," + (510-y) + "," + 1 + ")" ;
}
}
