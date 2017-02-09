var c =document.getElementById("c");
c.width = innerWidth;
c.height = innerHeight;
var g = c.getContext("2d");


var segments = [
  {x:129, y:0,r:120,   a:-.07,  b:1.5 },
  {x:259, y:112,r:120, a:3.10,   b:4.62}, //leaf
  {x:154, y:117,r:45,  a:0.99,   b:2.40}, //top indent
  {x:0,   y:266,r:394, a:0.35,  b:0.76}, //bottom right
  {x:50,  y:257,r:130, a:4.0,   b:5.4},
  {x:77,  y:283,r:168, a:3,     b:3.98},
  {x:243, y:257,r:120, a:4.1,   b:5.7},
  {x:300, y:266,r:392, a:2.38,  b:3.06},
  {x:420, y:288,r:126, a:2.0,   b:4.05},
  {x:61,  y:480,r:71,  a:0.9,   b:2.25},
  {x:147, y:642,r:113, a:4.3,   b:5.3},
  {x:240, y:480,r:73,  a:.9,    b:2},
  


];


function repaint() {

  g.fillStyle = "rgba(255,255,255,0.175)";
  g.fillRect(0,0,c.width, c.height);
  g.strokeStyle = "rgba(0,0,0,0.127)";

  var scale = innerWidth/1408; //just the scale it happened to be at when I dropped these in!
  
  for(var i =0;i< segments.length;i++) {
    var sI = segments[i];
    g.beginPath();
    g.arc(scale*sI.x+innerWidth/2-scale*200, 
          scale*sI.y+50, 
          scale*sI.r, 
          sI.a+Math.sin(new Date().getTime()*0.005)*.5,
          sI.b+Math.sin(new Date().getTime()*0.005)*.5);
  g.stroke();

  } 
  
  requestAnimationFrame(repaint);
}

repaint();