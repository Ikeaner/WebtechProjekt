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
		case "Dorf - Natur- und Heimatverein Lüllingen":
			var currentlink = linklist[2]
			break
		case "Verein - Natur- und Heimatverein Lüllingen":
			var currentlink = linklist[3]
			break;
		case "Termine - Natur- und Heimatverein Lüllingen":
			var currentlink = linklist[4]
			break;
		
	}
	$(currentlink).css( "border-bottom-width", "3px")
	$(currentlink).css( "border-bottom-style", "solid")
	$(currentlink).css( "border-bottom-color", "orange")
	

});