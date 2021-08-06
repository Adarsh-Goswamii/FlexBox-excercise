function splashAnimation() {
    let tl= gsap.timeline({defaults: {ease: "power1.out"}});
    tl.to(".splash-text", {y: "0%", duration: 1.0, stagger: 0.25});
    tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
    tl.to(".splash", {y: "-100%", duration: 1.5}, "-=1.2");
    console.log("ended");
}

splashAnimation();