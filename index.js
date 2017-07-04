<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<style>
	* {
		margin: 0; padding: 0;
	}
	html, body {
		height: 100%;
		width: 100%;
	}
	canvas {
		display: block;
	}
</style>
</head>

<body>
	<canvas id="myCanvas" width="400" height="400"></canvas>
	<script type="text/javascript">
	
		var canvas = $("#myCanvas");
		var ctx = canvas.get(0).getContext("2d");
        
        $(window).resize(resizeCanvas);
        function resizeCanvas() {
	        canvas.attr("width", $(window).get(0).innerWidth);
	        canvas.attr("height", $(window).get(0).innerHeight);
        }
        resizeCanvas();
        
      	var mouseX = 0;
		var mouseY = 0;
		
    	$(document).mousemove(function(event){ 
         	$("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
        	mouseX = event.pageX;
	        mouseY = event.pageY;
    	});
    	
    	var dx = 32;
    	var dy = 28;
    	var r = Math.floor(Math.random()*256);
	    var g = Math.floor(Math.random()*256);
	    var b = Math.floor(Math.random()*256);

    	
    	function drawSite(x,y) {
	    	var weight = dx*128/(32 + Math.sqrt((x - mouseX)*(x - mouseX) + (y - mouseY)*(y - mouseY)));
	    	if(weight > 1) {
		    	var radius = weight;
		    	ctx.beginPath();
		    	ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		    	var rgb = "rgba("+129+","+37+","+36+","+0.2+")";
                ctx.fillStyle = rgb;
                ctx.fill();
	    	}
    	}
    	function draw() {
	    	ctx.clearRect(0,0,canvas.width(), canvas.height());
	    	for(var y = 0; y < canvas.height(); y+= dy) {
		    	for(var x = 0; x < canvas.width(); x+=dx) {
			    	drawSite(x,y);
		    	}
	    	}
	    	y+=dy;
	    	for(var x = 0.5*dx; x < canvas.width() + dx; x+=dx) {
		    	drawSite(x,y);
	    	}
    	}
    	setInterval(draw, 30);
    	console.log(mouseX);
	console.log(mouseY);
	    
</script>

</body>
</html>
