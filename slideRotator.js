/*
 
	SlideRotator jQuery Component
	
	Author: Christopher Rabl
	Website: http://www3.telus.net/crabl/
	
	This file is part of SlideRotator.

    SlideRotator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    SlideRotator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with SlideRotator. If not, see <http://www.gnu.org/licenses/>.
	
	REMEMBER: Include the latest version of the jQuery javascript library
	(available at http://www.jquery.com/) on pages with SlideRotator.

*/




// Locations of the slideshow image files
var slideArray = [
	"images/001.jpg",
	"images/002.jpg",
	// Add more images: "images/imagename.jpg", 
	"images/003.jpg"
];

var rotateInterval = 5000; // Time delay between images (in milliseconds) - default: 5000 (5 seconds)
var targetDiv = "slideRotator"; // ID of the HTML div containing the SlideRotator component (see index.htm) 





// Set some variables up and preload the images
var srLocation = "#"+targetDiv;
var pre = new Array();
var p = slideArray.length;
var j = 0;
for (i = 0; i < p; i++) {
	pre[i] = new Image();
	pre[i].src = slideArray[i];
}

// This is where the real magic happens!
function slideRotatorInit(){
   $("div").filter(srLocation).hide();
   document.images.slideRotator.src = pre[j].src;
   $("div").filter(srLocation).fadeIn();
   j++;
   if (j > (p-1)) { j = 0; }
   var timeout = setTimeout('slideRotatorInit();', rotateInterval);
}