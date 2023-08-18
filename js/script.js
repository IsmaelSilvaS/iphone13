console.log("aqui tudo ok")

var green = document.getElementById("green");
var silver = document.getElementById("silver");
var golden = document.getElementById("golden");
var grafite = document.getElementById("grafite");
var blue = document.getElementById("blue");

var image = document.getElementById("product-image")

var imgGreen = "img/iphone_green.jpg";
var imgSilver = "img/iphone_silver.jpg";
var imgGolden = "img/iphone_golden.jpg";
var imgGrafite = "img/iphone_grafite.jpg";
var imgBlue = "img/iphone_blue.jpg";

green.addEventListener("click",function(){
    image.classList.add("changing");
    setTimeout(function () {
        image.src = imgGreen;
        image.classList.remove("changing");
    }, 500);
});

silver.addEventListener("click",function(){
    image.classList.add("changing");
    setTimeout(function () {
        image.src = imgSilver;
        image.classList.remove("changing");
    }, 500);
});

golden.addEventListener("click",function(){
    image.classList.add("changing");
    setTimeout(function () {
        image.src = imgGolden;
        image.classList.remove("changing");
    }, 500);
});

grafite.addEventListener("click",function(){
    image.classList.add("changing");
    setTimeout(function () {
        image.src = imgGrafite;
        image.classList.remove("changing");
    }, 500);
});

blue.addEventListener("click",function(){
    image.classList.add("changing");
    setTimeout(function () {
        image.src = imgBlue;
        image.classList.remove("changing");
    }, 500);
});