$(document).ready(function(){
	
	console.log(document.title)
	
	var linklist = document.getElementsByClassName("hlink")
	switch(document.title) {
		case "Start - Natur- und Heimatverein Lüllingen":
			var currentlink = linklist[0]
			break
		case "News - Natur- und Heimatverein Lüllingen":
			var currentlink = linklist[1]
			break
	}
	$(currentlink).css( "border-bottom-width", "3px")
	$(currentlink).css( "border-bottom-style", "solid")
	$(currentlink).css( "border-bottom-color", "orange")
	

});