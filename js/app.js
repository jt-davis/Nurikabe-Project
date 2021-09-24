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
	i = 0;
}
