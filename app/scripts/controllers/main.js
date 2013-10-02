'use strict';

// angular.module('newTicApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'ice-cream - HTML5 Boilerplate',
//       'beer - AngularJS',
//       'chocolate - Karma'
//     ];
//   });



<script>


    var player_turn = 1;


var cellArray = [0,1,2,3,4,5,6,7,8];





    function playBox() {


      if (event.target.innerHTML != "X" && event.target.innerHTML != "O") {

      if (player_turn % 2) {

      event.target.innerHTML="X";
      }


    else {
    event.target.innerHTML = "O";
    }
    
    document.getElementById("notification").innerHTML = "Player "+((player_turn % 2)+1)+" - your turn!";

    player_turn++;




      for (i=0; i<9; ++i)
      {
   
      cellArray[i] =  document.getElementById("cell1_"+(i+1)).innerHTML;

    
    }   

  

   
    // WHAT HAPPENS IF YOU WIN / TIE

         

      function win()
       {

        document.getElementById("message_overlay").style.zIndex = "2";
        document.getElementById("message_overlay").innerHTML = "Player "+ ((player_turn % 2)+1) + " wins! " +"<br/>"+ "<input type='button' id='btn2' value='Start Again' onclick='startAgain()'/>";
        document.getElementById("notification").innerHTML = "";
     
        }

        function tie()
        {
           document.getElementById("message_overlay").style.zIndex = "2";
           document.getElementById("message_overlay").innerHTML = "You both tied! " +"<br/>"+ "<input type='button' id='btn2' value='Start Again' onclick='startAgain()'/>";
           document.getElementById("notification").innerHTML = "";

        }

      // end test to see if they clicked an already filled block
     } 


        // TEST FOR WIN

        if ( player_turn > 4 )
        {


        
         
          if (cellArray[0] == cellArray[3] && cellArray[3] != "" && cellArray[3] == cellArray[6])
              win();
            
          else if (cellArray[1] == cellArray[4] && cellArray[4] != "" && cellArray[4] == cellArray[7])
              win();

          else if (cellArray[2] == cellArray[5] && cellArray[5] != "" && cellArray[5] == cellArray[8])
            { 
             
              win();
            }
          else if (cellArray[0] == cellArray[1] && cellArray[1] != "" && cellArray[1] == cellArray[2])
            { 
            
              win();
            }
          else if (cellArray[3] == cellArray[4] && cellArray[4] != "" && cellArray[4] == cellArray[5])
            { 
            
              win();
            }
          else if (cellArray[6] == cellArray[7] && cellArray[7] != "" && cellArray[7] == cellArray[8])
            { 
             
              win();
            }
          else if (cellArray[0] == cellArray[4] && cellArray[4] != "" && cellArray[4] == cellArray[8])
            { 
            
              win();
            }
          else if (cellArray[2] == cellArray[4] && cellArray[4] != "" && cellArray[4] == cellArray[6])
            { 
           
              win();
            } 
          else if (player_turn > 9)
            {
             
              tie(); 

            }

          }

       // end playBox
  }




    function startAgain() {

    location.href="index.html";

  }


  

</script>