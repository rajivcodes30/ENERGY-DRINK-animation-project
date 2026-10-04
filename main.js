
// HERO ANIMATION

const tl = gsap.timeline();

tl.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 0.8
});

tl.from(".small-text", {
    y: 30,
    opacity: 0,
    duration: 0.5
});

tl.from("h1", {
    y: 100,
    opacity: 0,
    duration: 1
});

// CAN INTRO ANIMATION

gsap.from(".can", {
    y: 100,
    opacity: 0,
    rotation: -15,
    duration: 1.2,
    ease: "power3.out"
});

// CAN FLOATING ANIMATION


gsap.to(".can", {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});


// ==============================
// GREEN GLOW ANIMATION
// ==============================

gsap.to(".glow", {
    scale: 1.2,
    opacity: 0.7,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// ==============================
// EXPLORE BUTTON INTRO
// ==============================

gsap.from(".explore-btn", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    ease: "back.out(1.7)"
});


// ==============================
// SCROLLTRIGGER
// ==============================

gsap.registerPlugin(ScrollTrigger);


// ==============================
// FEATURE CARDS SCROLL ANIMATION
// ==============================

gsap.from(".feature", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,

    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});


// ==============================
// CAN SCROLL EFFECT
// ==============================

gsap.to(".can", {
    rotation: 10,
    scale: 1.05,

    scrollTrigger: {
        trigger: ".product",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    }
});


// ==============================
// EXPLORE BUTTON HOVER
// ==============================

const exploreBtn = document.querySelector(".explore-btn");

exploreBtn.addEventListener("mouseenter", () => {
    gsap.to(exploreBtn, {
        scale: 1.08,
        duration: 0.3
    });
});

exploreBtn.addEventListener("mouseleave", () => {
    gsap.to(exploreBtn, {
        scale: 1,
        duration: 0.3
    });
});


// ==============================
// MOUSE MOVEMENT
// ==============================

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX - window.innerWidth / 2) / 20;

    gsap.to(".can", {
        x: x,
        duration: 0.5,
        overwrite: false,
        ease: "power2.out"
    });

});

// ==============================
// HEADING SCROLL EFFECT
// ==============================

gsap.to("h1", {
    scale: 0.9,
    opacity: 0.4,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});


// ==============================
// FEATURE CARD HOVER
// ==============================

const features = document.querySelectorAll(".feature");

features.forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -10,
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out"
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3
        });

    });

});


// ==============================
// CTA SCROLL ANIMATION
// ==============================

gsap.from(".cta", {
    y: 100,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".cta",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    gsap.to(cursorGlow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out"
    });
});
// HERO PARALLAX EFFECT

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;

    gsap.to(".hero-text", {
        x: x,
        y: y,
        duration: 0.6,
        ease: "power2.out"
    });

    gsap.to(".can-container", {
        x: -x * 1.5,
        y: -y * 1.5,
        duration: 0.6,
        ease: "power2.out"
    });

});
// SMOOTH SCROLL

document.querySelectorAll('.navbar a').forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// PRODUCT SECTION REVEAL

gsap.from(".product h2", {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".product",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".product > p", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".product",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});
// CTA TEXT REVEAL

gsap.from(".cta h2", {
    y: 70,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".cta",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".cta p", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".cta",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});
// PAGE LOADER

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

    const loaderTL = gsap.timeline();

    loaderTL.to(".loader h1", {
        scale: 1.2,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
    });

    loaderTL.to(".loader", {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut"
    });

});
