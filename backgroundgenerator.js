var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");

// console.log(body); This is just to test it in the console

function setColorGradient (){
	body.style.background= "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setColorGradient)
// 	function(){
// 	body.style.background= "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// })

color2.addEventListener("input", setColorGradient)
// 	// function(){
// 	// // console.log(color2.value); This is just to test it in the console
// 	// body.style.background= "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// });