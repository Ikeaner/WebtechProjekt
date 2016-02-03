//JavaScript Datei, die drei Funktionen enthält. 
//Zwei dieser Funktionen werden auf fast allen Seiten geladen, die dritte Funktion nur auf einer Seite.

//Die "headerChange" Funktion regelt den Durchlauf verschiedener Bilder für den das Bild unter dem Header.
function headerChange() {
	$(document).ready(function(){
		var interval;
		//Zirkelt durch die vorhandenen Bilder.
		function headerChange()
		{
			var img = $('.underheader img:first');
			img.hide();
			$('.underheader' ).append(img);
			img.fadeIn()
		};
		//Setzt den Intervall für den Zyklus.
		interval = setInterval( function() 
		{headerChange();}, 15000 );
	});
}

//Die "headerLink" Funktion stellt sicher, dass im Header der Link zu der Aktuellen Seite Unterstrichen wird.
function headerLink(){
	$(document).ready(function(){	
		//Fasst alle Links in eine Liste "linklist" zusammen. Erstellt auch die leere Variable "currentlink".
		var linklist = document.getElementsByClassName("hlink");
		var currentlink = null;
		//Überprüft den "title" des Dokuments. Basierend darauf wird "currentlink" auf einen der Links aus "linklist" gesetzt.
		switch(document.title) {
			case "Start - Natur- und Heimatverein Lüllingen":
				currentlink = linklist[0]
				break
			case "News - Natur- und Heimatverein Lüllingen":
				currentlink = linklist[1]
				break
			case "Dorf - Natur- und Heimatverein Lüllingen":
				currentlink = linklist[2]
				break
			case "Verein - Natur- und Heimatverein Lüllingen":
				currentlink = linklist[3]
				break;
			case "Termine - Natur- und Heimatverein Lüllingen":
				currentlink = linklist[4]
				break;
		}
		//Weist dem "currentlink" die nötigen CSS Elemente zu, damit er unterstrichen erscheint.
		$(currentlink).css( "border-bottom-width", "3px")
		$(currentlink).css( "border-bottom-style", "solid")
		$(currentlink).css( "border-bottom-color", "rgb(252,173,24)")
	});
}

//Die Funktion "termine" wird nur in "termine.html" benutzt. 
//Diese Funktion lädt die Termine aus einer externen JSON Datei und erstellt daraus eine Tabelle.
function termine() {
	$(document).ready(function(){
		//Lädt die JSON Datei.
		$.getJSON("json/termine.json", function(data){
			//Verweist eine Variable "table" auf die korrekte Tabelle.
			var table = document.getElementById("termTab");
			//Durchläuft alle Termine in der JSON Datei.
			for(i= 0; i < data.termine.length ; i++)
			{
				//Variable "zeile" wird erstellt für eine neue Zeile, 
				//welche unter der aktuellen Zeile von "table" eingesetzt wird.
				var zeile = table.insertRow(i+1);
				//Ist die Zeile eine gerade Zeile in der Aufzählung, wird sie grau hinterlegt.
				if(i%2 == 0)
				{
					zeile.style.backgroundColor = "#d3d3d3";
				}
				//Erstellt Variablen für neue Zellen in den Zeilen
				var datumSpalte = zeile.insertCell(0);
				var ereignisSpalte = zeile.insertCell(1);
				var ortSpalte = zeile.insertCell(2);
				//Gibt den Zellen ein padding
				datumSpalte.style.padding = "5px";
				ereignisSpalte.style.padding = "5px";
				ortSpalte.style.padding = "5px";
				//Weist den Zellen die jeweiligen Werte zu
				datumSpalte.innerHTML = data.termine[i][0];
				ereignisSpalte.innerHTML = data.termine[i][1];
				ortSpalte.innerHTML = data.termine[i][2];
			}
		});
	});
}