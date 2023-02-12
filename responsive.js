var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        pin:true,
        scrub:1,
        // markers:true
    }
})
tl.set("#centerdiv",{
    x:450,
})
tl.to("#centerdiv",{
    x:0,
})
.to("#circle",{
    scale:.2,
    ease: Linear.easeNone,
},"same")
.to("#centerdiv #text",{
    opacity:0,
    duration:.1
},"same")
.to("#centerdiv #image img",{
    scale:0,
    duration:.4,
    delay:.1
},"same")
.to("#text1 h1",{
    bottom:"-20%"
},"same")
.to("#pinkcircle",{
    scale:1,
    top:"40%"
},"same")
.to("#smc",{
    scale:.6,
},"same")
.to("#pinkcircle",{
   opacity:0,
},"abcd")

.to("#text2 h1",{
    bottom:"10%",
    duration:1.2,
    rotate:0
},"same")

.to("#btmc img",{
    rotate:"-180deg",
    stagger:.05,
},"same")
.to("#circle,#smc",{
    scale:0,
    delay:.3
},"abcd")
.to("#purplebox",{
    top:"-70%",
    duration:5
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#second",
        start:"top top",
        pin:true,
        scrub:1,
        // markers:true
    }
})
tl2.set("#circle2",{
    left:"65%"
})
.set("#circle1",{
    left:"45%"
})
.to("#circle2",{
    left:"58%"
})
.to(".circle",{
    stagger:.2,
    top:"50%"
})
.to(".circle",{
    left:"50%"
})
.to(".circle",{
    scale:.6
})
.to(".circle",{
    scale:8
},"same1")
.to("#top h1",{
    left:"-60%",
    delay:1,
    duration:4
},"same1")

.to(".boxes",{
    bottom:0,
    stagger:.05,
    ease:Expo.easeInOut
})
.to("#btm #btmh1",{
    opacity:0,
    delay:2
},"same1")
.to("#btm #btmh2",{
    opacity:1,
    delay:2.4
},"same1")
.to(".f1",{
    left:"-42%",
})
.to(".f2",{
    left:"-35%",
})