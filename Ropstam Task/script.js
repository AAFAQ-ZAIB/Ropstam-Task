function mobileMenu(){
    var menu = document.getElementById("mobMenu");

    if(menu.classList.contains("hidden")){
        menu.classList.add("flex");
        menu.classList.remove("hidden");
    }
    else{
        menu.classList.remove("flex");
        menu.classList.add("hidden");
    }
}

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}