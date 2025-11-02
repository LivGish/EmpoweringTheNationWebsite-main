/*CODE ATTRIBUTION*/
/*TITLE: onclick event*/
/*AUTHOR: W3 schools*/
/*DATE: 20/10/2025*/
/*VERSION: 1.0*/
/*AVAILABLE: https://www.w3schools.com/jsref/event_onclick.asp*/

// This line runs when the JS file is loaded 
console.log("JavaScript is up and running!")

// Add Back button handler (uses history.back with a homepage fallback)
document.addEventListener('DOMContentLoaded', function () {
	const backBtn = document.getElementById('backBtn');
	if (!backBtn) return;
	backBtn.addEventListener('click', function () {
		// If there's a previous entry in the history, go back. Otherwise go to homepage.html
		if (window.history && window.history.length > 1) {
			window.history.back();
			// Some browsers may not navigate if no real previous page; set a short timeout fallback
			setTimeout(() => {
				if (document.visibilityState === 'visible') {
					window.location.href = 'homepage.html';
				}
			}, 250);
		} else {
			window.location.href = 'homepage.html';
		}
	});
});

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}