// scripts for my first draft

$(document).ready(function(){
    
    let beepsoundElement = document.getElementById("beepsound");
    
    $("#soundcontrol").click(function(){
        if (beepsoundElement.paused) {
            $("#beepsound").trigger("play");
            $("#soundcontrol").attr("src", "assets/2H.gif");
        } else {
            $("#beepsound").trigger("pause");
            $("#soundcontrol").attr("src", "2G_scan_button.jpg");
        }
    });
    
    
});
