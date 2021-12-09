// Does the browser support the service workers?

if ("serviceWorker" in navigator) {
	// Defer service worker installation until page completes loading
	window.addEventListener("load", () => {
		// Then register our service worker
		navigator.serviceWorker
			.register("/sw.js")
			.then((reg) => {
				// Display a success message
				console.log(
					`Service Worker registration (Scope: ${reg.scope})`
				);
			})
			.catch((error) => {
				// Display an error message
				console.log(`Service Worker Error (${error})`);
			});
	});
} else {
	// Happens when the app isn't served over a TLS connection (HTTPS)
	// or if the browser doesn't support the service worker
	console.log("Service Worker not available.");
}

function changeState(clicked_id) {
	var cl = document.getElementById(clicked_id);
	console.log(cl.className);

	if (cl.className == "grid-item") {
		cl.classList.add("selected");
		console.log("changed to selected");
	} else if (cl.className == "grid-item selected") {
		cl.classList.remove("selected");
		cl.classList.add("dot");
	} else {
		cl.classList.remove("dot");
	}
}

var i = 0;
function resetButton() {
	while (i <= 24) {
		var cn = document.getElementsByClassName("grid-item");
		cn[i].classList.remove("selected");
		cn[i].classList.remove("dot");
		i++;
	}
	document.getElementById("message").innerHTML = "";
	i = 0;
}

function doneButton() {
	console.log("started checking");
	var cn = document.getElementsByClassName("grid-item");
	if (
		//Line 1
		cn[0].className == "grid-item" &&
		cn[1].className == "grid-item dot" &&
		cn[2].className == "grid-item selected" &&
		cn[3].className == "grid-item" &&
		cn[4].className == "grid-item dot" &&
		//Line 2
		cn[5].className == "grid-item selected" &&
		cn[6].className == "grid-item selected" &&
		cn[7].className == "grid-item selected" &&
		cn[8].className == "grid-item selected" &&
		cn[9].className == "grid-item selected" &&
		//Line 3
		cn[10].className == "grid-item" &&
		cn[11].className == "grid-item dot" &&
		cn[12].className == "grid-item selected" &&
		cn[13].className == "grid-item" &&
		cn[14].className == "grid-item selected" &&
		//Line 4
		cn[15].className == "grid-item selected" &&
		cn[16].className == "grid-item dot" &&
		cn[17].className == "grid-item dot" &&
		cn[18].className == "grid-item selected" &&
		cn[19].className == "grid-item selected" &&
		//Line 5
		cn[20].className == "grid-item selected" &&
		cn[21].className == "grid-item selected" &&
		cn[22].className == "grid-item selected" &&
		cn[23].className == "grid-item selected" &&
		cn[24].className == "grid-item"
	) {
		console.log("creating congrats message");
		document.getElementById("message").innerHTML =
			"Congrats! You solved the puzzle!";
	} else {
		document.getElementById("message").innerHTML = "Sorry, keep trying :(";
	}
}
