var icons = document.querySelectorAll(".icon");
var shadow = document.querySelector("#shadow");

icons.forEach(function(val, index){
    val.addEventListener("click",function(){

        dullBright();

        gsap.to("#shadow",{
            x: index*100,
            ease: Expo.easeInOut,
            duration: .23
        })
        gsap.to(this.children,{
            opacity: 1,
        })
    })
})
function dullBright(){
    gsap.to(".icon i",{
        opacity: .3,
    })
}