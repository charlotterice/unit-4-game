    var computerChoice = Math.floor(Math.random()*101+19);
    var greenCrystal =Math.floor(Math.random()*12+1);
    var yellowCrystal =Math.floor(Math.random()*12+1);
    var blueCrystal =Math.floor(Math.random()*12+1);
    var redCrystal =Math.floor(Math.random()*12+1);
    var wins =0;
    var losses =0;
    var userTotal=0;

    $(document).ready(function() {
        console.log(computerChoice);
        $("#computer-result").text(computerChoice);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#user-result").text(userTotal);
    });
    function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $("#computer-result").text(computerChoice);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        userTotal= 0;
        $("#user-result").text(userTotal);
        } 
    function win(){
        alert("You win!");
          wins++; 
          $("#wins").text(wins);
          reset();
        }
        function lose(){
        alert ("You lost!");
          losses++;
          $("#losses").text(losses);
          reset()
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
     $("#user-result").text(userTotal);
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
     $("#user-result").text(userTotal);
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
     $("#user-result").text(userTotal);
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
     $("#user-result").text(userTotal);
     });