function menuToggle() {
    document.getElementById("nav-slide").classList.toggle("menu-slide-main-on");
    document.getElementById("menu-bg").classList.toggle("menu-slide-bg-on");
    document.getElementById("nav-slide").classList.toggle("menu-slide-main-off");
    document.getElementById("menu-bg").classList.toggle("menu-slide-bg-off");
}

function carouselPositionOne() {
    document.getElementById("carouselSlide").classList.add("carousel-position-one");
    document.getElementById("carouselSlide").classList.remove("carousel-position-two");
    document.getElementById("carouselSlide").classList.remove("carousel-position-three");

    document.getElementById("dot-one").classList.add("active");
    document.getElementById("dot-two").classList.remove("active");
    document.getElementById("dot-three").classList.remove("active");
}

function carouselPositionTwo() {
    document.getElementById("carouselSlide").classList.remove("carousel-position-one");
    document.getElementById("carouselSlide").classList.add("carousel-position-two");
    document.getElementById("carouselSlide").classList.remove("carousel-position-three");

    document.getElementById("dot-one").classList.remove("active");
    document.getElementById("dot-two").classList.add("active");
    document.getElementById("dot-three").classList.remove("active");
}

function carouselPositionThree() {
    document.getElementById("carouselSlide").classList.remove("carousel-position-one");
    document.getElementById("carouselSlide").classList.remove("carousel-position-two");
    document.getElementById("carouselSlide").classList.add("carousel-position-three");

    document.getElementById("dot-one").classList.remove("active");
    document.getElementById("dot-two").classList.remove("active");
    document.getElementById("dot-three").classList.add("active");
}