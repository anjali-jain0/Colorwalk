let array = []; 
let x = 0; 
let y = 0; 
let w = 0, h = 0;
let randColor = 0 , color = 0; 
let dist1 = 0, dist2 = 0, dist3 = 0; 
let score = 0 , flag = 1;

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth*0.45;
c.height = window.innerHeight*0.60;

function Cube(x, y, w, h, color){

	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.color = color;

	this.draw = function(){
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}

let selectColor = ["#14b19f","#f9ac00","#6c2275","#ec5257","#0e274e"];

for (let i = 0; i <= c.height; i += 20){
	for (let j = 0; j <= c.width; j += 20){
		x = j;
		y = i;
		w = 20;
        h = 20;
	    randColor = selectColor[Math.floor(Math.random()*(selectColor.length))];
	    array.push(new Cube(x,y,w,h,randColor));
	}
}

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	for(let k = 0; k < array.length; k++){
		array[0].color = "lightgrey";
		array[k].draw();
	}
}

animate();

function removeBlock(color){

	flag=1;
	for (let l = 0; l < array.length; l++){
		if (array[l].color != "lightgrey"){
			flag=0;
		}
	}

	if (flag == 1){
		document.getElementById("points").innerHTML = "WON!!";
	}

	score += 1;
	document.getElementById("points").innerHTML = score;

	for (let n = 1; n < array.length; n++){
		if (array[n].color == color){
		    dist1 = array[n].x;
		    dist2 = array[n].y - 20;
		    dist3 = array[n].y + 20;
		    if (array[n-1].color == "lightgrey"){
				array[n].color = "lightgrey";
		    } else {
		        for (let m = 0; m < array.length; m++){
		    		if (array[m].x ==dist1 && array[m].y == dist2 && array[m].color == "lightgrey")
		    			array[n].color = "lightgrey";
		    		else if (array[m].x == dist1 && array[m].y == dist3 && array[m].color == "lightgrey")
		    			array[n].color = "lightgrey";
		    	}}
	    }
	}
}