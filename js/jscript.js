function headerChange() {
	$(document).ready(function(){
		var interval;

		function headerChange()
		{
			var img = $('.underheader img:first');
			img.hide();
			
			$('.underheader' ).append(img);
			img.fadeIn()
		};

		interval = setInterval( function() 
		{
			headerChange();
		}, 15000 );
	});
}

function headerLink(){
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
		$(currentlink).css( "border-bottom-color", "rgb(252,173,24)")
	});
}

function termine() {
	$(document).ready(function(){
		$.getJSON("json/termine.json", function(data){
			
			var table = document.getElementById("termTab");

			for(i= 0; i < data.termine.length ; i++)
			{
				var reihe = table.insertRow(i+1);
				
				if(i%2 == 0)
				{
					reihe.style.backgroundColor = "#d3d3d3";
				}
				
				var datumSpalte = reihe.insertCell(0);
				var ereignisSpalte = reihe.insertCell(1);
				var ortSpalte = reihe.insertCell(2);
				
				datumSpalte.style.padding = "5px";
				ereignisSpalte.style.padding = "5px";
				ortSpalte.style.padding = "5px";

				datumSpalte.innerHTML = data.termine[i][0];
				ereignisSpalte.innerHTML = data.termine[i][1];
				ortSpalte.innerHTML = data.termine[i][2];
			}
		});
	});
}

