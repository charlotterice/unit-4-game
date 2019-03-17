    var computerChoice = Math.floor(Math.random()*120)+19;
    var greenCrystal =Math.floor(Math.random()*12)+1;
    var yellowCrystal =Math.floor(Math.random()*12)+1;
    var blueCrystal =Math.floor(Math.random()*12)+1;
    var redCrystal =Math.floor(Math.random()*12)+1;
    var wins =0;
    var losses =0;
    var userTotal=0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    $(document).ready(function() {
        console.log(computerChoice);
        $("#computer-result").text(computerChoice);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#user-result").text(userTotal);
    });
    function win(){
        alert("You won!");
          wins++; 
          $("#wins").text(wins);
        //   reset();
        }
        function lose(){
        alert ("You lose!");
          losses++;
          $("#losses").text(losses);
        //   reset()
        }
 $("#button-green").on("click",function(){
     console.log(greenCrystal);
     userTotal = userTotal + greenCrystal;
     console.log("New userTotal=" + userTotal);
     if (userTotal ==computerChoice){
         win();
     }
     else if(userTotal > computerChoice){
         lose();
     }
     });
 $("#button-yellow").on("click",function(){
     console.log(yellowCrystal);
     userTotal = userTotal + yellowCrystal;
     console.log("New userTotal=" + userTotal);
     if (userTotal ==computerChoice){
         win();
     }
     else if(userTotal > computerChoice){
         lose();
     }
     });
 $("#button-blue").on("click",function(){
     console.log(blueCrystal);
     userTotal = userTotal + blueCrystal;
     console.log("New userTotal=" + userTotal);
     if (userTotal ==computerChoice){
         win();
     }
     else if(userTotal > computerChoice){
         lose();
     }
     });
 $("#button-red").on("click",function(){
     console.log(redCrystal);
     userTotal = userTotal + redCrystal;
     console.log("New userTotal=" + userTotal);
     if (userTotal ==computerChoice){
         win();
     }
     else if(userTotal > computerChoice){
         lose();
     }
     });