// Get the container element
var btnContainer = document.getElementById("tab__list");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tab__item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("tab__item-active");
    current[0].className = current[0].className.replace(" tab__item-active", "");
    this.className += " tab__item-active";
  });
}

var btnContainerSwichToggle = document.getElementById("purchase__switch-toggle-btn");

var btnsSwichToggle = btnContainerSwichToggle.getElementsByClassName("purchase__switch-toggle-btn-item");

for (var i = 0; i < btnsSwichToggle.length; i++) {
  btnsSwichToggle[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("purchase__switch-toggle-btn-item-active");
    current[0].className = current[0].className.replace(" purchase__switch-toggle-btn-item-active", "");
    this.className += " purchase__switch-toggle-btn-item-active";
  });
}

var brnSlideShow = document.getElementById("slide-show");

var btnLeftArrow = document.getElementById("slide-show__left-arrow");
var btnRightArrow = document.getElementById("slide-show__right-arrow");

var slideShow = document.getElementsByClassName("slide-show__item");
var slideShowContent = document.getElementsByClassName("review__list");

var slideShowIndex = 0;

btnLeftArrow.addEventListener("click", function () {
  slideShowIndex--;
  if (slideShowIndex < 0) {
    slideShowIndex = slideShow.length - 1;
  }
  for (var i = 0; i < slideShow.length; i++) {
    slideShow[i].className = slideShow[i].className.replace(" slide-show__item-active", "");
  }
  slideShow[slideShowIndex].className += " slide-show__item-active";
  slideShowContent[0].style.transform = "translateX(" + slideShowIndex * -100 + "%)";
});

btnRightArrow.addEventListener("click", function () {
  slideShowIndex++;
  if (slideShowIndex > slideShow.length - 1) {
    slideShowIndex = 0;
  }
  for (var i = 0; i < slideShow.length; i++) {
    slideShow[i].className = slideShow[i].className.replace(" slide-show__item-active", "");
  }
  slideShow[slideShowIndex].className += " slide-show__item-active";
  slideShowContent[0].style.transform = "translateX(" + slideShowIndex * -100 + "%)";
});