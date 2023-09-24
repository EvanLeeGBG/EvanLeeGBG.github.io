const imageUrls = [
   "images/img_all/GBG_logo.png", // default URL
   "images/img_portfolio/metrowest2.png",
   "images/img_portfolio/gatepost_round.png",
   "images/img_portfolio/fsu_round.png"
];
const links = document.getElementsByTagName("a");
const imageEl = document.getElementById("my-img");
imageEl.setAttribute('src', imageUrls[0]); // Set default image

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseenter", (e) => {
     imageEl.src = imageUrls[i];
  });
  links[i].addEventListener("mouseleave", (e) => {
     imageEl.setAttribute('src', imageUrls[0])
  });
}