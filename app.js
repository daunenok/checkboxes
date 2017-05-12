var lastChecked;
var inBetween;

var checks = document.querySelectorAll("input");
checks.forEach(function(item) {
	item.addEventListener("click", handleCheck);
});

function handleCheck(event) {
	var that = this;
	if (event.shiftKey) {
		inBetween = false;
		checks.forEach(function(elem) {
			if (elem == that || elem == lastChecked)
				inBetween = !inBetween;
			if (inBetween) 
				elem.checked = true;
		});
	}
	if (this.checked) lastChecked = this;
}