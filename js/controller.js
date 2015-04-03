 angular
	.module('TicTacToe')
	.controller('MainController', MainController);
	counter = 0;

	function MainController() {
		var self = this; 
		var player1 = "X";
		var player2 = "0";


		self.boxClicked = boxClicked;
		// self.makeMove = makeMove;

		// setting the gameboard //
		self.gameboard = [
			{clicked_player_one: false, clicked_player_two: false, alias: "a"},
			{clicked_player_one: false, clicked_player_two: false, alias: "b"},
			{clicked_player_one: false, clicked_player_two: false, alias: "c"},
			{clicked_player_one: false, clicked_player_two: false, alias: "d"},
			{clicked_player_one: false, clicked_player_two: false, alias: "e"},
			{clicked_player_one: false, clicked_player_two: false, alias: "f"},
			{clicked_player_one: false, clicked_player_two: false, alias: "g"},
			{clicked_player_one: false, clicked_player_two: false, alias: "h"},
			{clicked_player_one: false, clicked_player_two: false, alias: "i"}
		];

		// end of gameboard //
 		var counter = 0;
 		// if ((self.gameboard[$index].clicked_player_one = false) && (self.gameboard[$index].clicked_player_two = false)) {
		function boxClicked($index) {
	
			if (counter % 2 === 0) {
				self.gameboard[$index].clicked_player_one = true; // Setting the 'picked' property in the gameboard to true.	
			} else if (counter % 2 != 0 ) {
				self.gameboard[$index].clicked_player_two = true; // Setting the 'picked' property in the gameboard to true.	
				// counter++;
			} else {
				alert("pick again!")
				// counter++;
			}
			counter++;
		}
		

		// function makeMove($index) {
		// 	// var counter = 9;
		// 	// for (var i = counter; i < counter.length; i--) {
		// 	// 	console.log("hello world")
		// 	// }
		// 	// if (self.gameboard[$index] = true) {
		// 	// 	alert("picked already!");
		// 	// }			else {
		// 	// 	console.log("TOMATOES!");
		// 	// }
		// };

		
		// function makeMove($index) {

		// }

		//self.gameboard[0].picked = false;
	
	} //end of MainController function

