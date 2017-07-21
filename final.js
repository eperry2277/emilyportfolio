$("#button1").click(function(){
    var userinput="spinning";
    var userinput="circles";
    var userinput="shifting";
    var userinput="turning";
    var userinput="favorite";

    
   if(userinput==="spinning"){
       $("#1").show();
       $("#2").show();
       $("#3").show();
       $("#4").show();
        $("#5").hide();
        $("#6").show();
        $("#7").hide();
        $("#8").show();
        $("#9").hide();
        $("#10").show();
        $("#11").hide(); 
        $("#12").hide(); 
   }
   else if(userinput==="circles"){
        $("#1").hide();
        $("#2").hide();
        $("#4").hide();
        $("#5").hide();
        $("#7").hide();
        $("#8").hide(); 
        $("#9").hide();
        $("#10").hide(); 
        $("#11").hide(); 
        $("#12").hide(); 
   }
    else if(userinput==="shifting"){
        $("#1").hide();
        $("#2").hide();
        $("#3").hide();
        $("#4").hide();
        $("#6").hide();
        $("#8").hide(); 
        $("#10").hide();  
        $("#12").hide(); 
   }
   else if(userinput==="turning"){
        $("#5").hide();
        $("#7").hide();
        $("#9").hide();
        $("#11").hide();
        $("#12").hide();
   }
   else if(userinput==="favorite"){
        $("#4").hide();
        $("#5").hide();
        $("#7").hide();
        $("#8").hide(); 
        $("#10").hide(); 
        $("#11").hide();
        $("#12").hide(); 
   }
   else{
       $("#searchbar").append("No results");
   }
});


$("#1").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide(); 
    $("#8").hide(); 
    $("#9").hide();
    $("#10").hide(); 
    $("#11").hide(); 
    $("#12").hide(); 
    $("#1").attr("style","1");
});

$("#2").click(function(){
    $("#1").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();
    $("#8").hide();
    $("#9").hide();
    $("#10").hide();
    $("#11").hide();
    $("#12").hide();
    $("#2").attr("style","1");
});

$("#3").click(function(){
    $("#2").hide();
    $("#1").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();
    $("#8").hide();
    $("#9").hide();
    $("#10").hide();
    $("#11").hide();
    $("#12").hide();
    $("#3").attr("style","1");
});

$("#4").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#1").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();
    $("#8").hide();
    $("#9").hide();
    $("#10").hide();
    $("#11").hide();
    $("#12").hide();
    $("#4").attr("style","1");
});

$("#5").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#1").hide();
    $("#6").hide();
    $("#7").hide();
    $("#8").hide();
    $("#9").hide();
    $("#10").hide();
    $("#11").hide();
    $("#12").hide();
    $("#5").attr("style","1");
});

$("#6").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#1").hide();
    $("#7").hide();
    $("#8").hide();
    $("#9").hide();
    $("#10").hide();
    $("#11").hide();
    $("#12").hide();
    $("#6").attr("style","1");
});

$("#7").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#1").hide();
    $("#8").hide();
    $("#9").hide();
    $("#10").hide();
    $("#11").hide();
    $("#12").hide();
    $("#7").attr("style","1");
});

$("#8").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();
    $("#1").hide();
    $("#9").hide();
    $("#10").hide();
    $("#11").hide();
    $("#12").hide();
    $("#8").attr("style","1");
});

$("#9").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();
    $("#8").hide();
    $("#1").hide();
    $("#10").hide();
    $("#11").hide();
    $("#12").hide();
    $("#9").attr("style","1");
});

$("#10").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();
    $("#8").hide();
    $("#9").hide();
    $("#1").hide();
    $("#11").hide();
    $("#12").hide();
    $("#10").attr("style","1");
});

$("#11").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();
    $("#8").hide();
    $("#9").hide();
    $("#10").hide();
    $("#1").hide();
    $("#12").hide();
    $("#11").attr("style","1");
});

$("#12").click(function(){
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#6").hide();
    $("#7").hide();
    $("#8").hide();
    $("#9").hide();
    $("#10").hide();
    $("#11").hide();
    $("#1").hide();
    $("#12").attr("style","1");
});
