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

function donateAmountOne() {
    document.getElementById("buttonOne").classList.add("clicked");
    document.getElementById("buttonTwo").classList.remove("clicked");
    document.getElementById("buttonThree").classList.remove("clicked");
    document.getElementById("buttonFour").classList.remove("clicked");
}

function donateAmountTwo() {
    document.getElementById("buttonOne").classList.remove("clicked");
    document.getElementById("buttonTwo").classList.add("clicked");
    document.getElementById("buttonThree").classList.remove("clicked");
    document.getElementById("buttonFour").classList.remove("clicked");
}

function donateAmountThree() {
    document.getElementById("buttonOne").classList.remove("clicked");
    document.getElementById("buttonTwo").classList.remove("clicked");
    document.getElementById("buttonThree").classList.add("clicked");
    document.getElementById("buttonFour").classList.remove("clicked");
}

function donateAmountFour() {
    document.getElementById("buttonOne").classList.remove("clicked");
    document.getElementById("buttonTwo").classList.remove("clicked");
    document.getElementById("buttonThree").classList.remove("clicked");
    document.getElementById("buttonFour").classList.add("clicked");
}

function donateToggle() {
    document.getElementById("donateArrow").classList.toggle("flipped");
    document.getElementById("donate-section-one").classList.toggle("slid");
    document.getElementById("donate-section-two").classList.toggle("slid");
    document.getElementById("donate-section-one").classList.toggle("slidBack");
    document.getElementById("donate-section-two").classList.toggle("slidBack");
}

function chatToggle() {
    document.getElementById("inactive-click-tic").classList.toggle("inactive");
    document.getElementById("inactive-click-chat").classList.toggle("inactive");
    document.getElementById("ticbox").classList.toggle("inactive");
    document.getElementById("chatbox").classList.toggle("inactive");
    document.getElementById("ticbox").classList.toggle("active");
    document.getElementById("chatbox").classList.toggle("active");
}