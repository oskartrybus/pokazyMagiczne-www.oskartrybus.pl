//fade-in on load
$(document).ready(function(){
	$('body').css('display', 'none');
	$('.main').css('display', 'none');
	$('.main-photo').css('display', 'none');
	$('.rest-content').css('display', 'none');
	$('body').fadeIn(400);
	$('.main').delay(500).fadeIn(500);
	$('.main-photo').delay(1000).fadeIn(600);
	$('.rest-content').delay(1500).fadeIn(400);
	setSlide(1);
	setSlide2(2);
	setSlide3(3);
}); 

// Sticky Navbar
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
window.onscroll = function() {checkSticky()};
function checkSticky() {
  if (window.pageYOffset > (sticky)) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
} 

// Making navbar responsive
function showNavBar() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav" || x.className === "topnav sticky" ) {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

//Slider 1
var number=1;
var timer1 =0;
var timer2= 0;
function setSlide(nrSlide) {
		clearTimeout(timer1);
		clearTimeout(timer2); 
		number = nrSlide;
		hide();
		setTimeout("changeSlide()", 500);
}
function hide() {
	$("#slider").fadeOut(500);
}
function changeSlide() {
	if(number>5) number=1;
	var file = "<img src=\"img/"+number+".jpg\"  />";
	document.getElementById("slider").innerHTML = file;
	$("#slider").fadeIn(500);
	timer1 = setTimeout("changeSlide()", 5000);
	timer2 = setTimeout("hide();", 4500);
	var x = document.getElementById("dot1-"+ number);
	x.className = " grey-dot";
	var step;
	for (step = 1; step < 6; step++) {
		if(step!=number) {
			document.getElementById("dot1-".concat(step.toString())).className=" ";
		}
	}
	number++;
}

//Slider 2
var number2=1;
var timer3 =0;
var timer4= 0;
function setSlide2(nrSlide) {
		clearTimeout(timer3);
		clearTimeout(timer4); 
		number2 = nrSlide;
		hide2();
		setTimeout("changeSlide2()", 500);
}
function hide2() {
	$("#slider2").fadeOut(500);
}
function changeSlide2() {
	if(number2>5) number2=1;
	var file = "<img src=\"img/"+number2+".jpg\"  />";
	document.getElementById("slider2").innerHTML = file;
	$("#slider2").fadeIn(500);
	timer3 = setTimeout("changeSlide2()", 5000);
	timer4 = setTimeout("hide2();", 4500);
	var x = document.getElementById("dot2-"+ number2);
	x.className += " grey-dot";
	for (step = 1; step < 6; step++) {
		if(step!=number2) {
			document.getElementById("dot2-".concat(step.toString())).className=" ";
		}
	}
	number2++;
}
//Slider 3
var number3=1;
var timer5 =0;
var timer6= 0;
function setSlide3(nrSlide) {
		clearTimeout(timer5);
		clearTimeout(timer6); 
		number3 = nrSlide;
		hide3();
		setTimeout("changeSlide3()", 500);
}
function hide3() {
	$("#slider3").fadeOut(500);
}
function changeSlide3() {
	if(number3>5) number3=1;
	var file = "<img src=\"img/"+number3+".jpg\"  />";
	document.getElementById("slider3").innerHTML = file;
	$("#slider3").fadeIn(500);
	timer5 = setTimeout("changeSlide3()", 5000);
	timer6 = setTimeout("hide3();", 4500);
	var x = document.getElementById("dot3-"+ number3);
	x.className = " grey-dot";
	for (step = 1; step < 6; step++) {
		if(step!=number3) {
			document.getElementById("dot3-".concat(step.toString())).className=" ";
		}
	}
	number3++;
}

//Sliders navigation
function nextSlide1() {
	clearTimeout(timer1);
	clearTimeout(timer2); 
	hide();
	setTimeout("changeSlide()", 500);
}
function nextSlide2() {
	clearTimeout(timer3);
	clearTimeout(timer4); 
	hide2();
	setTimeout("changeSlide2()", 500);
}
function nextSlide3() {
	clearTimeout(timer5);
	clearTimeout(timer6); 
	hide3()
	setTimeout("changeSlide3()", 500);
}
function previousSlide1() {
	number=number-2;
	if(number<1) number=5;
	clearTimeout(timer1);
	clearTimeout(timer2); 
	hide();
	setTimeout("changeSlide()", 500);
}
function previousSlide2() {
	number2=number2-2;
	if(number2<1) number2=5;
	clearTimeout(timer3);
	clearTimeout(timer4); 
	hide2();
	setTimeout("changeSlide2()", 500);
}
function previousSlide3() {
	number3=number3-2;
	if(number3<1) number3=5;
	clearTimeout(timer5);
	clearTimeout(timer6); 
	hide3()
	setTimeout("changeSlide3()", 500);
}

//Scrolling - navigation
jQuery(function($) {
			$.scrollTo(0);
			$('#home').click(function() { $.scrollTo(0, 500);});
			$('#contact').click(function() { $.scrollTo($('#contact1'), 800); document.getElementById("navbar").className = "topnav"; });
			$('#orderShow').click(function() { $.scrollTo($('#contact1'), 800); document.getElementById("navbar").className = "topnav";});
			$('#mymovie').click(function() { $.scrollTo($('#movie1'), 500);document.getElementById("navbar").className = "topnav"; });
			$('#myoffer').click(function() { $.scrollTo($('#offer1'), 500);document.getElementById("navbar").className = "topnav"; });
});
		
