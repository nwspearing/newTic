"use strict";angular.module("newTicApp",["firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newTicApp").controller("MainCtrl",["$scope","angularFire",function(a,b){a.rooms=[],a.queue={};var c=new Firebase("https://newtic-nws.firebaseio.com/rooms");new Firebase("https://newtic-nws.firebaseio.com/disconnectdata"),b(c,a,"rooms").then(function(){var c=new Firebase("https://newtic-nws.firebaseio.com/queue");b(c,a,"queue").then(function(){void 0==a.queue.gameId?(console.log("I'm player 1"),a.player="p1",a.rooms.push({player_turn:1,turn:"p1",ticTacToe:[[{val:"",r:0,c:0},{val:"",r:0,c:1},{val:"",r:0,c:2}],[{val:"",r:1,c:0},{val:"",r:1,c:1},{val:"",r:1,c:2}],[{val:"",r:2,c:0},{val:"",r:2,c:1},{val:"",r:2,c:2}]],players_in_room:0,gameWon:!1,gameTied:!1,game_ended:!1,waiting:!1}),a.gameId=a.rooms.length-1,a.queue.gameId=a.gameId,console.log("Player 1's game is: "+a.gameId)):(console.log("I'm player 2"),a.player="p2",a.gameId=a.queue.gameId,a.queue={},console.log("Player 2's game is: "+a.gameId),a.rooms[a.gameId].waiting=!1),console.log(a.rooms),console.log(a.rooms[a.gameId]);var b=a.rooms[a.gameId].game_ended;a.$watch("game_ended",function(){console.log("I'm watching game_ended before the if"),b&&(console.log("I'm going to display the win message"),a.showWinMessage=!0,a.showNotification=!1,a.showEndNotification=!0,console.log("I displayed the win message"),console.log(b+"awesome!"))})}),a.startGameMessage=!0,a.clickSquare=function(b){function c(){console.log("win function firing"),a.showWinMessage=!0,a.showNotification=!1,a.showEndNotification=!0,a.rooms[a.gameId].game_ended=!0,a.gameWon=!0,game_ended=!0}function d(){console.log("tie function firing"),a.showTieMessage=!0,a.showNotification=!1,a.showEndNotification=!0,a.rooms[a.gameId].game_ended=!0,a.gameTied=!0,game_ended=!0}if(console.log("click!"),console.log(a.rooms[a.gameId].player_turn),a.player==a.rooms[a.gameId].turn&&0==a.rooms[a.gameId].waiting&&(console.log(a.player),"X"!=b.val&&"O"!=b.val&&(console.log("I'm inside the X and O check"),b.val=1==a.rooms[a.gameId].player_turn%2?"X":"O",console.log("It was turn "+a.rooms[a.gameId].player_turn),a.rooms[a.gameId].player_turn++,console.log("It's now turn "+a.rooms[a.gameId].player_turn),a.rooms[a.gameId].turn="p1"==a.player?"p2":"p1")),a.rooms[a.gameId].player_turn>4)for(i=0,i=0;3>i;++i)a.rooms[a.gameId].ticTacToe[i][0].val==a.rooms[a.gameId].ticTacToe[i][1].val&&""!=a.rooms[a.gameId].ticTacToe[i][1].val&&a.rooms[a.gameId].ticTacToe[i][1].val==a.rooms[a.gameId].ticTacToe[i][2].val?(a.gameWon=!0,c(),a.rooms[a.gameId].gameWon=!0):a.rooms[a.gameId].ticTacToe[0][i].val==a.rooms[a.gameId].ticTacToe[1][i].val&&""!=a.rooms[a.gameId].ticTacToe[1][i].val&&a.rooms[a.gameId].ticTacToe[1][i].val==a.rooms[a.gameId].ticTacToe[2][i].val?(a.gameWon=!0,c(),a.rooms[a.gameId].gameWon=!0):a.rooms[a.gameId].ticTacToe[0][0].val==a.rooms[a.gameId].ticTacToe[1][1].val&&""!=a.rooms[a.gameId].ticTacToe[1][1].val&&a.rooms[a.gameId].ticTacToe[1][1].val==a.rooms[a.gameId].ticTacToe[2][2].val?(a.gameWon=!0,c(),a.rooms[a.gameId].gameWon=!0):a.rooms[a.gameId].ticTacToe[0][2].val==a.rooms[a.gameId].ticTacToe[1][1].val&&""!=a.rooms[a.gameId].ticTacToe[1][1].val&&a.rooms[a.gameId].ticTacToe[1][1].val==a.rooms[a.gameId].ticTacToe[2][0].val?(a.gameWon=!0,c(),a.rooms[a.gameId].gameWon=!0):a.rooms[a.gameId].player_turn>9&&(a.gameTied=!0,d(),a.rooms[a.gameId].gameTied=!0)},a.startAgain=function(){location.href="index.html"}})}]);