$(document).ready(function(){	
	$.getJSON("termine.json", function(data){
		
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