const blogImages = [
   "images/objects/audio/cassette/c-60.jpg",// Default 
   "images/blog_teasers/walkman.jpg", //Hobbies
   "images/scenery/hiking/backpack2.png", // Adventures
   "images/objects/audio/cassette/OutrunInsta.png", // Creative
   "images/objects/vehicles/bikes/i_went_this_way.jpg",// Opinion
   "images/objects/vehicles/postal/snowLLV.jpg",  // Personal
   "images/scenery/urban/ashland_mbta.jpg" // News
   
];
const blogLinks = document.getElementsByTagName("hoverB");
const blogImage = document.getElementById("imgB");
blogImage.setAttribute('src', blogImages[0]); // Set default image

for(let i = 0; i < blogLinks.length; i++) {
  blogLinks[i].addEventListener("mouseenter", (e) => {
     blogImage.src = blogImages[i];
	 topicImage[i].style.opacity = 1;
	 
  });
}
