document.getElementById('pizza').addEventListener('click', function () {
    document.getElementById("pizza").classList.add("active");
    document.getElementById("salads").classList.remove("active");
    document.getElementById("starter").classList.remove("active");
    document.getElementById('menu_pizza').classList.remove("menu_pizza_none");
    document.getElementById('menu_salads').classList.add("menu_salads_none");
    document.getElementById('menu_starter').classList.add("menu_starter_none");
});
document.getElementById('salads').addEventListener('click', function () {
    document.getElementById("pizza").classList.remove("active");
    document.getElementById("salads").classList.add("active");
    document.getElementById("starter").classList.remove("active");
    document.getElementById('menu_pizza').classList.add("menu_pizza_none");
    document.getElementById('menu_salads').classList.remove("menu_salads_none");
    document.getElementById('menu_starter').classList.add("menu_starter_none");
});
document.getElementById('starter').addEventListener('click', function () {
    document.getElementById("pizza").classList.remove("active");
    document.getElementById("salads").classList.remove("active");
    document.getElementById("starter").classList.add("active");
    document.getElementById('menu_pizza').classList.add("menu_pizza_none");
    document.getElementById('menu_salads').classList.add("menu_salads_none");
    document.getElementById('menu_starter').classList.remove("menu_starter_none");
});

//menu barai tik.
// var section = document.getElementById("myDIV");
// var btns = section.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }
