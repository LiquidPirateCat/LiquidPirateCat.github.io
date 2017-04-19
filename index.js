const img = document.getElementsByTagName("img")[0];

function sway(xPos, yPos) {
  let wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  
  let mx = (xPos - ww) / 35,
      my = - (yPos - wh) / 35;
  
  document.body.style.setProperty("--mouseX", mx+"deg");
  document.body.style.setProperty("--mouseY", my+"deg");
  document.body.style.setProperty("--glowX", (-mx * 8)+"px");
  document.body.style.setProperty("--glowY", (my * 8)+"px");
}

document.addEventListener("mousemove", function(e) {
  sway(e.clientX,e.clientY);
})

document.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
        sway(touch.pageX, touch.pageY);
    }
});