// Get the container element
var btnContainer = document.getElementById("tab__list");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tab__item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tab__item-active");
    current[0].className = current[0].className.replace(" tab__item-active", "");
    this.className += " tab__item-active";
    console.log("Hello");
  });
}