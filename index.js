var randomNumber1 = Math.random();
randomNumber1 = Math.floor(Math.random() * 6)+ 1; //This makes the random numbers to start from 1 -6

var randomImageSource = "./images/dice"+ randomNumber1+ ".png"; //Creates a variabel in the semblance of the image source 
//Dice image 1
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //this sets the src to the randdom generator

//dice image 2
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomImageSource2 = "./images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="🚩 Player 1 wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML ="Draw!";
}
