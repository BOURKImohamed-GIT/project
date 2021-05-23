
document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
let galleryView = document.getElementById("galleryView")
let tilesView = document.getElementById("tilesView")
let outer = document.getElementById("outer3");
let slider = document.getElementById("slider3");
let tilesContainer = document.getElementById("tilesContainer");
if (slider.classList.contains("active")) {
slider.classList.remove("active");
outer.classList.remove("outerActive");
galleryView.style.display = "flex";
tilesView.style.display = "none";

while (tilesContainer.hasChildNodes()) {
tilesContainer.removeChild(tilesContainer.firstChild)
}  
} else {
slider.classList.add("active");
outer.classList.add("outerActive");
galleryView.style.display = "none";
tilesView.style.display = "flex";

for (let i = 0; i < imgObject.length - 1; i++) {
let tileItem = document.createElement("div");
tileItem.classList.add("tileItem");
tileItem.style.background =  "url(" + imgObject[i] + ")";
tileItem.style.backgroundSize = "contain";  
tilesContainer.appendChild(tileItem);      
}
};
}

let imgObject = [
    
"https://www.elsan.care/sites/default/files/inline-images/Chirurgie%20generale%20%28Personnalis%C3%A9%29.jpg",
"https://lh3.googleusercontent.com/proxy/ukh8aYX5o9mdKGJi7hSBzF1aoJs4QGATk0nx6JpO2job5eCY2Kb0rFmHRwo-ph77JLW8UV3QHluLw8H0SaTb_kb91TZWMH5Y6rWQu5e6qyO1MPM",
"https://t3.ftcdn.net/jpg/02/46/70/82/240_F_246708269_WzeXfbrGzkX5axOatRwF0kagyBtGjXh5.jpg",
"https://as2.ftcdn.net/v2/jpg/04/33/68/95/1000_F_433689516_8b9XxmoH3WljsADw5qQGXIh0Jt6QvaVu.jpg",
"https://as1.ftcdn.net/v2/jpg/01/77/09/00/1000_F_177090077_M15nAafBNSKMEoeYwsqVPN9O36Eg5SaH.jpg",
"https://as2.ftcdn.net/v2/jpg/01/81/92/69/1000_F_181926996_bFyKQDCtzakOLDduidJD9edPZRVooCmG.jpg",
"https://picsum.photos/id/1/450/450",
"https://picsum.photos/id/8/450/450",
"https://picsum.photos/id/12/450/450",
"https://picsum.photos/id/15/450/450",
"https://picsum.photos/id/5/450/450",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

let mainView = document.getElementById("mainView");
mainView.style.background = "url(" + imgObject[mainImg] + ")";

let leftView = document.getElementById("leftView");
leftView.style.background = "url(" + imgObject[prevImg] + ")";

let rightView = document.getElementById("rightView");
rightView.style.background = "url(" + imgObject[nextImg] + ")";

let linkTag = document.getElementById("linkTag")
linkTag.href = imgObject[mainImg];

};

function scrollRight() {

prevImg = mainImg;
mainImg = nextImg;
if (nextImg >= (imgObject.length -1)) {
nextImg = 0;
} else {
nextImg++;
}; 
loadGallery();
};

function scrollLeft() {
nextImg = mainImg
mainImg = prevImg;

if (prevImg === 0) {
prevImg = imgObject.length - 1;
} else {
prevImg--;
};
loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
if (e.keyCode === 37) {
scrollLeft();
} else if(e.keyCode === 39) {
scrollRight();
}
});

loadGallery();




