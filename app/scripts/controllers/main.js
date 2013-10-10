// 'use strict';


angular.module('newTicApp').controller('MainCtrl', function($scope, angularFire) {

var database = new Firebase("https://newtic-nws.firebaseio.com");
var disconnectRef = new Firebase('https://newtic-nws.firebaseio.com/disconnectdata');


// var database = new Firebase("https://newtic-nws.firebaseio.com");
// var database = new Firebase("https://newtic-nws.firebaseio.com/rooms/"+ player1:player2);

//random math player 1
//random math player 2




$scope.player_turn = {turn: 1};

// var promise = angularFire(database, $scope, "ticTacToe");

// promise, then(function() {

$scope.rooms=[];


$scope.ticTacToe= [[{val:'', r:0,c:0},{val:'',r:0,c:1},{val:'',r:0,c:2}],
[{val:'',r:1,c:0},{val:'',r:1,c:1},{val:'',r:1,c:2}],
[{val:'', r:2,c:0},{val:'',r:2,c:1},{val:'',r:2,c:2}]]; 

// }

angularFire(database, $scope, "ticTacToe");
// angularFire(database, $scope, "player_turn");

// database.set('player_turn' + player_turn);



$scope.clickSquare = function(cell) { 
   // $scope.clickSquare = function(row, column) { 

// console.log(cell);

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





    //   if(cell.val != "")
    //   return;
    // // And try to make the move
    // turnLetter = $scope.playerTurn % 2 == 1 ? "X" : "O";
    // 


      // ($scope.playerTurn % 2 == 1 ? "X" : "O");




      if (cell.val != "X" && cell.val != "O") {


        cell.val = ($scope.player_turn.turn % 2 == 1 ? "X" : "O");

      // if ($scope.player_turn % 2) {

             

        // cell.val = "X";

        



    //   // <img src="{{m=ticTacToe[$parent.$index][$index];(m=='X'?'imgX.png':(m=='O'?'imgY.png':'blank.png'))}}" />
    //   // event.target.innerHTML="X";
    //   this.ticTacToe[row][column].val= "X";
      
      // }


    // else {
  
        

        // cell.val = "O";

        

    // // event.target.innerHTML = "O";

    // this.ticTacToe[row][column].val="O";
     
    // }
    
    // document.getElementById("notification").innerHTML = "Player "+(($scope.player_turn % 2)+1)+" - your turn!";

    $scope.player_turn.turn++;




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

      
        $scope.showWinMessage = true;
        $scope.showNotification = false;
        $scope.showEndNotification = true;
        // document.getElementById("message_overlay").style.zIndex = "2";
        // document.getElementById("message_overlay").innerHTML = "Player "+ ((player_turn % 2)+1) + " wins! " +"<br/>";
        // document.getElementById("notification").innerHTML = "";
      
        }

        function tie()
        {

          $scope.showTieMessage = true;
          $scope.showNotification = false;
          $scope.showEndNotification = true;
           // document.getElementById("message_overlay").style.zIndex = "2";
           // document.getElementById("message_overlay").innerHTML = "You both tied! " +"<br/>"+ "<input type='button' value='Start Again' ng-click='startAgain()'/>";
           // document.getElementById("notification").innerHTML = "";

        }

      // end test to see if they clicked an already filled block
     } 


        // TEST FOR WIN

      // .forEach(function(dir){
      //   tCol = cell.c;    // Start from where we are
      //   tRow = cell.r;
      // }


     


        if ($scope.player_turn.turn > 4)
        {

           // console.log(this.ticTacToe[cell.r][cell.c].val);
          


          // if ($scope.ticTacToe[0][0].val == $scope.ticTacToe[0][1].val && $scope.ticTacToe[0][1].val != "" && $scope.ticTacToe[0][1].val  == $scope.ticTacToe[0][2].val )
          //     win();
          //     // alert("test win 1");

          //  else if ($scope.ticTacToe[1][0].val == $scope.ticTacToe[1][1].val && $scope.ticTacToe[1][1].val != "" && $scope.ticTacToe[1][1].val  == $scope.ticTacToe[1][2].val )
          //     win();
          //     // alert("test win 2");

          // else if ($scope.ticTacToe[2][0].val == $scope.ticTacToe[2][1].val && $scope.ticTacToe[2][1].val != "" && $scope.ticTacToe[2][1].val  == $scope.ticTacToe[2][2].val )
          //     // alert("test win 3 - breaks it" + $scope.ticTacToe[2][1].val);
          //     win();
          // else if ($scope.ticTacToe[0][0].val == $scope.ticTacToe[1][0].val && $scope.ticTacToe[1][0].val != "" && $scope.ticTacToe[1][0].val  == $scope.ticTacToe[2][0].val )
          //     win();
          //     // alert("test win 4");
          // else if ($scope.ticTacToe[0][1].val == $scope.ticTacToe[1][1].val && $scope.ticTacToe[1][1].val != "" && $scope.ticTacToe[1][1].val  == $scope.ticTacToe[2][1].val )
          //     win();  
          //    // alert("test win 5");
          // else if ($scope.ticTacToe[0][2].val == $scope.ticTacToe[1][2].val && $scope.ticTacToe[1][2].val != "" && $scope.ticTacToe[1][2].val  == $scope.ticTacToe[2][2].val )
          //     win();
          //     // alert("test win 6--breaks it"); 


                for (i=0; i<3; ++i)
                  {
                if ($scope.ticTacToe[i][0].val == $scope.ticTacToe[i][1].val && $scope.ticTacToe[i][1].val != "" && $scope.ticTacToe[i][1].val == $scope.ticTacToe[i][2].val)
                  win();
                  else if ($scope.ticTacToe[0][i].val == $scope.ticTacToe[1][i].val && $scope.ticTacToe[1][i].val != "" && $scope.ticTacToe[1][i].val == $scope.ticTacToe[2][i].val)
                  win();

              else if ($scope.ticTacToe[0][0].val == $scope.ticTacToe[1][1].val && $scope.ticTacToe[1][1].val != "" && $scope.ticTacToe[1][1].val  == $scope.ticTacToe[2][2].val )
            
              win();
                 // alert("diagonal win 1");
               
             else if ($scope.ticTacToe[0][2].val == $scope.ticTacToe[1][1].val && $scope.ticTacToe[1][1].val != "" && $scope.ticTacToe[1][1].val  == $scope.ticTacToe[2][0].val )
              
              // alert("diagonal win 2");  
              win();
                // alert("test win 8--breaks it");
              else if ($scope.player_turn.turn > 9) 
      
             // alert("tied");
              tie();
            // end testing for win

            }
                         
               

          }


       // end playBox
  // }

  // end TicTacCtrl

   }


    $scope.startAgain =function() {

    location.href="index.html";

    database.remove();

    
    // disconnectRef.onDisconnect().remove();

    // backbone.reset();


    // $route.reload();

     };


});

