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