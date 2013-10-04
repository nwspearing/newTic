// 'use strict';

angular.module('newTicApp').controller('MainCtrl', function($scope) {

   var player_turn = 1;

$scope.ticTacToe= [['','',''],['','',''],['','','']];

$scope.clickSquare = function(row, column) { 
   


    // console.log(row);
    // console.log(column);

     

     // $scope.cell.innerHTML = "X";
     //      this.turnNum++;
     // if(this.turnNum % 2 = 1)

     // this.ticTacToe[row][column]= "X";
     // else
     //  this.ticTacToe[row][column]="O";
      // event.target.innerHTML = "<img src='batman.jpg'>"





 


// var cellArray = [0,1,2,3,4,5,6,7,8];





    // function playBox() {


      if (event.target.innerHTML != "X" && event.target.innerHTML != "O") {

      if (player_turn % 2) {


      // <img src="{{m=ticTacToe[$parent.$index][$index];(m=='X'?'imgX.png':(m=='O'?'imgY.png':'blank.png'))}}" />
      // event.target.innerHTML="X";
      this.ticTacToe[row][column]= "X";
      
      }


    else {
  
    // event.target.innerHTML = "O";

    this.ticTacToe[row][column]="O";
     
    }
    
    document.getElementById("notification").innerHTML = "Player "+((player_turn % 2)+1)+" - your turn!";

    player_turn++;




    //   for (i=0; i<9; ++i)
    //   {
   
    //   cellArray[i] =  document.getElementById("cell1_"+(i+1)).innerHTML;

    
    // }   

  

   
    // WHAT HAPPENS IF YOU WIN / TIE

         // "<input type='button' value='Start Again' ng-click='startAgain()'/>"
         // <button ng-click='startAgain()'>Start Again</button>;
         // ng-show   ng-hide

      function win()
       {

        document.getElementById("message_overlay").style.zIndex = "2";
        document.getElementById("message_overlay").innerHTML = "Player "+ ((player_turn % 2)+1) + " wins! " +"<br/>";
        document.getElementById("notification").innerHTML = "";
      
        }

        function tie()
        {
           document.getElementById("message_overlay").style.zIndex = "2";
           document.getElementById("message_overlay").innerHTML = "You both tied! " +"<br/>"+ "<input type='button' value='Start Again' ng-click='startAgain()'/>";
           document.getElementById("notification").innerHTML = "";

        }

      // end test to see if they clicked an already filled block
     } 


        // TEST FOR WIN

        if ( player_turn > 4 )
        {


          
            

          
          if ($scope.ticTacToe[0][0] == $scope.ticTacToe[0][1] && $scope.ticTacToe[0][1]  != "" && $scope.ticTacToe[0][1]  == $scope.ticTacToe[0][2] )
              win();

           if ($scope.ticTacToe[1][0] == $scope.ticTacToe[1][1] && $scope.ticTacToe[1][1]  != "" && $scope.ticTacToe[1][1]  == $scope.ticTacToe[1][2] )
              win();
          if ($scope.ticTacToe[2][0] == $scope.ticTacToe[2][1] && $scope.ticTacToe[2][1]  != "" && $scope.ticTacToe[2][1]  == $scope.ticTacToe[2][2] )
              win();
          if ($scope.ticTacToe[0][0] == $scope.ticTacToe[1][0] && $scope.ticTacToe[1][0]  != "" && $scope.ticTacToe[1][0]  == $scope.ticTacToe[2][0] )
              win();
          if ($scope.ticTacToe[0][1] == $scope.ticTacToe[1][1] && $scope.ticTacToe[1][1]  != "" && $scope.ticTacToe[1][1]  == $scope.ticTacToe[2][1] )
              win();  
          if ($scope.ticTacToe[0][2] == $scope.ticTacToe[1][2] && $scope.ticTacToe[1][2]  != "" && $scope.ticTacToe[1][2]  == $scope.ticTacToe[2][2] )
              win(); 
            if ($scope.ticTacToe[0][0] == $scope.ticTacToe[1][1] && $scope.ticTacToe[1][1]  != "" && $scope.ticTacToe[1][1]  == $scope.ticTacToe[2][2] )
              win();
             if ($scope.ticTacToe[0][2] == $scope.ticTacToe[1][1] && $scope.ticTacToe[1][1]  != "" && $scope.ticTacToe[1][1]  == $scope.ticTacToe[2][0] )
              win();

       
          else if (player_turn > 9)
            {
             
              tie(); 

            }
              
            // end testing for win

          }

       // end playBox
  // }

  // end TicTacCtrl

   }


    $scope.startAgain =function() {

    location.href="index.html";

     };


});

