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