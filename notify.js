//JavaScript document
//Notify JS developed by Graham O'Mahony
//Copyright 2019
var mobilenav = document.getElementById("mobilenav"), animate = document.getElementsByClassName("animate"), mask = document.getElementById("mask");
var menu = document.getElementById("menu");
mobilenav.onclick = function animate(){
  mobilenav.classList.toggle("animate");
  menu.classList.toggle("runin");
  mask.classList.add("modal");
  if(mobilenav.classList.contains("animate")){
} else{
  mask.classList.remove("modal");
}
}
mask.onclick = function(event){
  mobilenav.classList.remove("animate");
  mask.classList.remove("modal");
  menu.classList.remove("runin");
}