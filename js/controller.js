 angular
	.module('TicTacToe')
	.controller('MainController', MainController);

	function MainController() {
		var self = this; 
		var player1 = "X";
		var player2 = "0";

		self.boxClicked = boxClicked;

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
			//called self.gameboard and turn picked true?
			self.gameboard[$index].picked = true;
			console.log("Hello")
			// console.log(self.gameboard[$index].picked)

			// gameboard[$index]
		};

		// self.test = true;


		//self.gameboard[0].picked = false;
	
	} //end of MainController function

