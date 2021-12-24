const slideshowImages = document.querySelectorAll(".intro .slideshow-img");

const slideshowtext = document.querySelectorAll(".intro .intro-text");

const nextImageDelay = 5000;

let currentImageCounter= 0;

let currentTextCounter = 0;


slideshowImages[currentImageCounter].style.opacity = 1;
slideshowtext[currentTextCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);
setInterval(nextText, nextImageDelay);

function nextImage(){
	slideshowImages[currentImageCounter].style.opacity = 0;
	currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
	slideshowImages[currentImageCounter].style.opacity = 1;
}





function nextText(){
	slideshowtext[currentTextCounter].style.opacity = 0;
	currentTextCounter = (currentTextCounter + 1) % slideshowtext.length;
	slideshowtext[currentTextCounter].style.opacity = 1;
}

var slide= document.getElementbyId("slide");





function btn1(){
	var btn = document.getElementsByClassName("btn");
	btn[0].classList.add("btn-active");
	btn[1].classList.remove("btn-active");
	btn[2].classList.remove("btn-active");
	var test = document.getElementsByClassName("Test-col");
  	test[0].style.display = "block";
  	test[1].style.display = "none";
  	test[2].style.display = "none";

}
function btn2(){
		var btn = document.getElementsByClassName("btn");
	btn[1].classList.add("btn-active");
	btn[0].classList.remove("btn-active");
	btn[2].classList.remove("btn-active");
	var test = document.getElementsByClassName("Test-col");
	test[1].style.display = "block";
  	test[0].style.display = "none";
  	test[2].style.display = "none";
}
function btn3(){
		var btn = document.getElementsByClassName("btn");
	btn[2].classList.add("btn-active");
	btn[1].classList.remove("btn-active");
	btn[0].classList.remove("btn-active");
	var test = document.getElementsByClassName("Test-col");
  	test[0].style.display = "none";
  	test[1].style.display = "none";
  	test[2].style.display = "block";
}


