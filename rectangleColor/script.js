var rect = document.querySelector(".center")

rect.addEventListener("mousemove", function(details){
    var rectangleLocation = rect.getBoundingClientRect() // gets to locations of anything u apply it

    var mouseLocation = details.clientX; // position of mouse in X axis

    const insideLoc = mouseLocation - rectangleLocation.left; // calculating where's mouse inside


    if (insideLoc < rectangleLocation.width/2) {
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideLoc)

        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        })
    }else{
        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideLoc)

        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        })
    }

    
})

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white",
    })
})