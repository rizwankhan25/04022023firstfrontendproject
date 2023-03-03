var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})
var overlay1 = document.querySelector("#overlay1")
overlay1.addEventListener("mousemove",function(dets){
    document.querySelector("#elem1 img").style.scale = 1;
    document.querySelector("#elem1 img").style.opacity = 1;
    cursor.style.opacity = 0
    document.querySelector("#elem1 img").style.left = (dets.x - 100) + "px";
    document.querySelector("#elem1 img").style.top = (dets.y - 250)+ "px";
})
overlay1.addEventListener("mouseleave",function(dets){
    document.querySelector("#elem2 img").style.scale = 0;
    document.querySelector("#elem2 img").style.opacity = 0;
    cursor.style.opacity = 1
})
var overlay2 = document.querySelector("#overlay2")
overlay1.addEventListener("mousemove",function(dets){
    document.querySelector("#elem2 img").style.scale = 1;
    document.querySelector("#elem2 img").style.opacity = 1;
    cursor.style.opacity = 0
    document.querySelector("#elem2 img").style.left = (dets.x - 100) + "px";
    document.querySelector("#elem2 img").style.top = (dets.y - 1050)+ "px";
})
overlay2.addEventListener("mouseleave",function(dets){
    document.querySelector("#elem2 img").style.scale = 0;
    document.querySelector("#elem2 img").style.opacity = 0;
    cursor.style.opacity = 1
})

var overlay2 = document.querySelector("#overlay2")
overlay1.addEventListener("mousemove",function(dets){
    document.querySelector("#elem3 img").style.scale = 1;
    document.querySelector("#elem3 img").style.opacity = 1;
    cursor.style.opacity = 0
    document.querySelector("#elem3 img").style.left = (dets.x - 1100) + "px";
    document.querySelector("#elem3 img").style.top = (dets.y - 1250)+ "px";
})
overlay2.addEventListener("mouseleave",function(dets){
    document.querySelector("#elem3 img").style.scale = 0;
    document.querySelector("#elem3 img").style.opacity = 0;
    cursor.style.opacity = 1
})