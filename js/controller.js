angular
	.module('TicTacToe')
	.controller('MainController', MainController);

	function MainController() {
		var self = this;

		self.test = "Testing controller"

		self.gameboard = [
			{name: "one", picked: true},
			{name: "two", picked: true},
			{name: "three", picked: true},
			{name: "four", picked: true},
			{name: "five", picked: true},
			{name: "six", picked: true},
			{name: "seven", picked: true},
			{name: "eight", picked: true},
			{name: "nine", picked: true}
		
		]


		
	} //end of MainController function

