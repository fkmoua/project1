 angular
	.module('TicTacToe')
	.controller('MainController', MainController);
	counter = 0;

	function MainController() {
		var self = this; 
		var player1 = "X";
		var player2 = "0";


		self.boxClicked = boxClicked;
		self.makeMove = makeMove;

		// setting the gameboard //
		self.gameboard = [
			{picked: false, alias: "a"},
			{picked: false, alias: "b"},
			{picked: false, alias: "c"},
			{picked: false, alias: "d"},
			{picked: false, alias: "e"},
			{picked: false, alias: "f"},
			{picked: false, alias: "g"},
			{picked: false, alias: "h"},
			{picked: false, alias: "i"}
		];

		// end of gameboard //
 
		function boxClicked($index) {
			var counter = 9;
			self.gameboard[$index].picked = true; // Setting the 'picked' property in the gameboard to true.
			
		};

		function makeMove($index) {
			if (self.gameboard[$index] = true) {
				alert("picked already!");
			}			else {
				console.log("TOMATOES!");
			}
		};

		
		// function makeMove($index) {

		// }

		//self.gameboard[0].picked = false;
	
	} //end of MainController function

