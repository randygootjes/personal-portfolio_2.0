// First define the nav element
var nav = document.getElementsByTagName("nav")[0];
// Then we bind a function to the window when it scrolls
window.onscroll = function(){
	// Check if the window has scrolled
	if(window.scrollY > 200){
		// Add the class 'hasBackground' to the nav element
		nav.classList.add("hasBackground");
	} else {
		// Remove the class 'hasBackground' from the nav element
		nav.classList.remove("hasBackground");
	}
};