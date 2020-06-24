//Jquery for First Draft

$(document).ready(function(){
    //declare variable for soundclip
    let thudClipElement =  document.getElementById("thudSound");
    let chairClipElement = document.getElementById("chairSound");
    let drawerClipElement = document.getElementById("drawerSound");
    
    //turning the sound on and off on click
    $("#soundControl1").click(function(){
       if (thudClipElement.paused) {
           $("#thudSound").trigger("play");
           $("#soundControl1").attr("src", "assets/speakerOn.png")
       } else {
           $("#thudSound").trigger("pause");
           $("#soundControl1").attr("src", "assets/speakerOff.png") 
       }
    });
    //when the Thud Clip Ends, turn speaker icon to off.
    thudClipElement.onended = function(){
            $("#soundControl1").attr("src", "assets/speakerOff.png")
    };
    
    
    
    $("#soundControl2").click(function(){
       if (chairClipElement.paused) {
           $("#chairSound").trigger("play");
           $("#soundControl2").attr("src", "assets/speakerOn.png")
       } else {
           $("#chairSound").trigger("pause");
           $("#soundControl2").attr("src", "assets/speakerOff.png") 
       }
    });
    //when the Chair Clip Ends, turn speaker icon to off.
    chairClipElement.onended = function(){
            $("#soundControl2").attr("src", "assets/speakerOff.png")
    };
    
    
    //Drawer Sound
        $("#soundControl3").click(function(){
       if (drawerClipElement.paused) {
           $("#drawerSound").trigger("play");
           $("#soundControl3").attr("src", "assets/speakerOn.png")
       } else {
           $("#drawerSound").trigger("pause");
           $("#soundControl3").attr("src", "assets/speakerOff.png") 
       }
    });
    //when the Drawer Clip Ends, turn speaker icon to off.
    drawerClipElement.onended = function(){
            $("#soundControl3").attr("src", "assets/speakerOff.png")
    };
    
});