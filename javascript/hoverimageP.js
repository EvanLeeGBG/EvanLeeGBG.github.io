const portfolioImages = [
   "images/logos/gbg/GBG_round.png", // default URL
   "images/logos/portfolio/metrowest_round.png",
   "images/logos/portfolio/gatepost_round2.png",
   "images/logos/portfolio/fsu+city.png"
];
const portfolioLinks = document.getElementsByTagName("hoverP");
const portfolioImage = document.getElementById("imgP");
portfolioImage.setAttribute('src', portfolioImages[0]); // Set default image

for(let i = 0; i < portfolioLinks.length; i++) {
  portfolioLinks[i].addEventListener("mouseenter", (e) => {
     portfolioImage.src = portfolioImages[i];
  });
}

