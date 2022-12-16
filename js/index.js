
$( document ).ready( initPos() );

function initPos() {

	var M = (window.innerWidth - 1000) * 0.7;
	var L = (window.innerHeight - 600) * 0.5;
	
	$('#gameFrame').css('position', "absolute");
	$('#gameFrame').css('left', M + "px");
	$('#gameFrame').css('top', L + "px");
	
	$('#example').css('position', "absolute");
	$('#example').css('left', "20px");
	$('#example').css('top', L + "px");

	// var frame = document.getElementById("gameFrame");
	// frame.style.position = "absolute";
	// frame.style.left = M + "px";
	// frame.style.top = L + "px";
	window.addEventListener("resize",initPos,true);
}

