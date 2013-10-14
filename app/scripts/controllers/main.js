// 'use strict';


angular.module('newTicApp').controller('MainCtrl', function($scope, angularFire) {

$scope.rooms = [];
$scope.queue = {};
// $scope.gameWon = false;
// $scope.gameTied = false;



var rooms = new Firebase("https://newtic-nws.firebaseio.com/rooms");
var disconnectRef = new Firebase('https://newtic-nws.firebaseio.com/disconnectdata');

angularFire(rooms, $scope, "rooms").then(function () {

  var queue = new Firebase("https://newtic-nws.firebaseio.com/queue");
  angularFire(queue, $scope, "queue").then(function () {
    if ($scope.queue.gameId == undefined) {
          console.log("I'm player 1");
          $scope.player = "p1";

          $scope.rooms.push({
  
            

            player_turn: 1,

            turn: 'p1',

            ticTacToe: [[{val:'', r:0,c:0},{val:'',r:0,c:1},{val:'',r:0,c:2}],
            [{val:'',r:1,c:0},{val:'',r:1,c:1},{val:'',r:1,c:2}],
            [{val:'', r:2,c:0},{val:'',r:2,c:1},{val:'',r:2,c:2}]],

            players_in_room: 0,

            // game_ended: false,

            // allowturn: true,

            // whoami: "X",


            gameWon: false,

            gameTied: false,


            game_ended: false,

            // game_state: "playing",

            // gameWon: false,

            // game_lost: false,

            // gameTied: false

            waiting: false

              });


$scope.gameId = $scope.rooms.length - 1;
          $scope.queue.gameId = $scope.gameId;
          console.log("Player 1's game is: " + $scope.gameId);

      } else {
          console.log("I'm player 2");
          $scope.player = "p2";

          $scope.gameId = $scope.queue.gameId;
          $scope.queue = {};
          console.log("Player 2's game is: " + $scope.gameId);
          $scope.rooms[$scope.gameId].waiting = false;
        }


console.log($scope.rooms);
console.log($scope.rooms[$scope.gameId]);
var game_ended = $scope.rooms[$scope.gameId].game_ended;

  $scope.$watch('game_ended', function(){ 
    console.log("I'm watching game_ended before the if");
    if(game_ended){
        console.log("I'm going to display the win message");
        $scope.showWinMessage = true;
        $scope.showNotification = false;
        $scope.showEndNotification = true;
        // $scope.rooms[$scope.gameId].game_ended=true;
         // $scope.win();
         console.log("I displayed the win message");


    console.log(game_ended+ "awesome!");
      }




      });




    });


    // this is where angular fire used to be





 

// code.angular.org
// $cookie
// $cookie.store



// var database = new Firebase("https://newtic-nws.firebaseio.com");
// var database = new Firebase("https://newtic-nws.firebaseio.com/rooms/"+ player1:player2);

//random math player 1
//random math player 2



// var $scope.rooms = database.child('rooms');



// $scope.player_turn = {turn: 1};

// var promise = angularFire(database, $scope, "ticTacToe");

// promise, then(function() {

// $scope.rooms=[];



// $scope.ticTacToe = [[{val:'', r:0,c:0},{val:'',r:0,c:1},{val:'',r:0,c:2}],
// [{val:'',r:1,c:0},{val:'',r:1,c:1},{val:'',r:1,c:2}],
// [{val:'', r:2,c:0},{val:'',r:2,c:1},{val:'',r:2,c:2}]];





// }; // end angularFire(database)



// var whoami = "O";

// function onlyonstart() {
//   if ($scope.rooms.players_in_room == 1)
//   whoami = "X";

//   $scope.rooms.players_in_room = 1;

// }

// NEW GAME INITIATLIZATION

 // $scope.startGameMessage = true;




$scope.startGameMessage = true;


// beginNewGame();

// $scope.beginNewGame = function() {

// // rooms.remove();
// $scope.startGameMessage = false;

//   if($scope.player == "p1")
//      $scope.rooms[$scope.gameId].waiting = true;
//    if($scope.player == "p2")
//     $scope.rooms[$scope.gameId].waiting = false;



// };




  // $scope.$watch('rooms.gameTied', function(){ 
  //   console.log("line 56")
  //   if($scope.rooms.game_ended){
  //       console.log("line 58")
  //       $scope.showWinMessage = true;
  //       $scope.showNotification = false;
  //       $scope.showEndNotification = true;
  //        // $scope.win();
  //        console.log("line 61")

  //   console.log($scope.rooms.game_ended+ "awesome!");
  //     }

  //   });





// angularFire(database, $scope, "rooms");
// angularFire(database, $scope, "player_turn");

// database.set('player_turn' + player_turn);

// document.onLoad(){
// $scope.startGameMessage 
// }





$scope.clickSquare = function(cell) { 
  console.log("click!");
  console.log($scope.rooms[$scope.gameId].player_turn);

  // alert("clicked!");
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


      // var isitmyturn;


if ($scope.player == $scope.rooms[$scope.gameId].turn && ($scope.rooms[$scope.gameId].waiting == false)) {


    console.log($scope.player);



      if (cell.val != "X" && cell.val != "O") {
        console.log("I'm inside the X and O check");

        // isitmyturn = ($scope.rooms.player_turn % 2 == 1 ? "X" : "O");
        
        // if (isitmyturn == whoami)  {



        cell.val = ($scope.rooms[$scope.gameId].player_turn % 2 == 1 ? "X" : "O");

        console.log("It was turn " +$scope.rooms[$scope.gameId].player_turn);
        $scope.rooms[$scope.gameId].player_turn++;
        console.log("It's now turn " +$scope.rooms[$scope.gameId].player_turn);

      if ($scope.player == 'p1') {
        $scope.rooms[$scope.gameId].turn = 'p2';
      }  else {
        $scope.rooms[$scope.gameId].turn = 'p1';
      }


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

    // $scope.rooms[$scope.gameId].player_turn++;





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

        console.log("win function firing");
        $scope.showWinMessage = true;
        $scope.showNotification = false;
        $scope.showEndNotification = true;
        // $scope.rooms.game_ended = true;
        $scope.rooms[$scope.gameId].game_ended = true;
        $scope.gameWon = true;
        game_ended = true;

        

        // $scope.game_ended = true;
        // document.getElementById("message_overlay").style.zIndex = "2";
        // document.getElementById("message_overlay").innerHTML = "Player "+ ((player_turn % 2)+1) + " wins! " +"<br/>";
        // document.getElementById("notification").innerHTML = "";
      
        }

        function tie()
        {
          console.log("tie function firing");
          $scope.showTieMessage = true;
          $scope.showNotification = false;
          $scope.showEndNotification = true;
          // $scope.rooms.game_ended = true;
          $scope.rooms[$scope.gameId].game_ended = true;
          $scope.gameTied = true;
          game_ended = true;



          // $scope.game_ended = true;
           // document.getElementById("message_overlay").style.zIndex = "2";
           // document.getElementById("message_overlay").innerHTML = "You both tied! " +"<br/>"+ "<input type='button' value='Start Again' ng-click='startAgain()'/>";
           // document.getElementById("notification").innerHTML = "";

        }


          //end isitmyturn
      // }

      // end test to see if they clicked an already filled block
     } 
    }   // end scope player check

        // TEST FOR WIN

      // .forEach(function(dir){
      //   tCol = cell.c;    // Start from where we are
      //   tRow = cell.r;
      // }


     


        if ($scope.rooms[$scope.gameId].player_turn > 4)
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


i = 0;
                for (i=0; i<3; ++i)
                  {
                if ($scope.rooms[$scope.gameId].ticTacToe[i][0].val == $scope.rooms[$scope.gameId].ticTacToe[i][1].val && $scope.rooms[$scope.gameId].ticTacToe[i][1].val != "" && $scope.rooms[$scope.gameId].ticTacToe[i][1].val == $scope.rooms[$scope.gameId].ticTacToe[i][2].val)
                  {
                    $scope.gameWon = true;

                  win();
                  $scope.rooms[$scope.gameId].gameWon = true;

                }
                  else if ($scope.rooms[$scope.gameId].ticTacToe[0][i].val == $scope.rooms[$scope.gameId].ticTacToe[1][i].val && $scope.rooms[$scope.gameId].ticTacToe[1][i].val != "" && $scope.rooms[$scope.gameId].ticTacToe[1][i].val == $scope.rooms[$scope.gameId].ticTacToe[2][i].val)
                  {
                  $scope.gameWon = true;
                  win();
                  $scope.rooms[$scope.gameId].gameWon = true;
                }
              else if ($scope.rooms[$scope.gameId].ticTacToe[0][0].val == $scope.rooms[$scope.gameId].ticTacToe[1][1].val && $scope.rooms[$scope.gameId].ticTacToe[1][1].val != "" && $scope.rooms[$scope.gameId].ticTacToe[1][1].val  == $scope.rooms[$scope.gameId].ticTacToe[2][2].val )
            {
              $scope.gameWon = true;
              win();
              $scope.rooms[$scope.gameId].gameWon = true;
                 // alert("diagonal win 1");
             }  
             else if ($scope.rooms[$scope.gameId].ticTacToe[0][2].val == $scope.rooms[$scope.gameId].ticTacToe[1][1].val && $scope.rooms[$scope.gameId].ticTacToe[1][1].val != "" && $scope.rooms[$scope.gameId].ticTacToe[1][1].val  == $scope.rooms[$scope.gameId].ticTacToe[2][0].val )
              {
              // alert("diagonal win 2");  
              $scope.gameWon = true;
              win();
              $scope.rooms[$scope.gameId].gameWon = true;
                // alert("test win 8--breaks it");
              }
              else if ($scope.rooms[$scope.gameId].player_turn > 9) 
                {
             // alert("tied");
             $scope.gameTied = true;
              tie();
              $scope.rooms[$scope.gameId].gameTied = true;
            // end testing for win
              }

            }
                         
               

          }


       // end playBox
  // }

  // end TicTacCtrl

   }



    $scope.startAgain =function() {

   



    // onlyonstart();

       // $scope.startGameMessage = false;
       // $scope.showWinMessage = false;
       //  $scope.showNotification = true;
       //  $scope.showEndNotification = false;

       // angularFire();

     location.href="index.html";

    // disconnectRef.onDisconnect().remove();

    // backbone.reset();


    // $route.reload();

     };




            // this is the end of angularFire
         
 });



});


// };


//execute function when data comes in (angular documentation); //  set variable on  ng-show - waiting on it


