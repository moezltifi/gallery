contentImg = document.getElementById("contentImg");
for (let i = 1; i < 5; i++) {
  img = document.getElementById("h" + i);
  img.addEventListener("click", function () {
    contentImg.src = "img/" + i + ".jpg";
  });
}
for (let i = 1; i < 5; i++) {
  img = document.getElementById("f" + i);
  img.addEventListener("mouseover", function () {
    contentImg.src = "img/" + i + ".jpg";
  });
}
