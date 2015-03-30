angular
	.module('TicTacToe')
	.controller('MainController', MainController);

	function MainController() {
		var self = this;

		self.gameboard = [
			{name: "", picked: true, alias: "a"},
			{name: "", picked: true, alias: "b"},
			{name: "", picked: true, alias: "c"},
			{name: "", picked: true, alias: "d"},
			{name: "", picked: true, alias: "e"},
			{name: "", picked: true, alias: "f"},
			{name: "", picked: true, alias: "g"},
			{name: "", picked: true, alias: "h"},
			{name: "", picked: true, alias: "i"}
		];

		self.picked = true;


		function testClick() {
			console.log("hello world");
		};

		/*self.wins = [
			win1 = abc && cba,
			win2 = def && fed, 
			win3 = ghi && ihg,
			win4 = adg && gda, 
			win5 = beh && heb,
			win6 = cfi && ifc,
			win7 = gec && ceg,
			win8 = aei && iea,
		]*/

		/*self.testWin() {
			if player_one_pick === win1 {
				console.log("win!")
			};

			else {
				console.log("not win!")
			}
		}*/


		
	} //end of MainController function

