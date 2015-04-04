 angular
	.module('TicTacToe')
	.controller('MainController', MainController);
	
	MainController.$inject = ['$firebaseObject'];

	function MainController($firebaseObject) {
		var self = this; 

		// self.boxClicked = boxClicked;
		self.syncFirebaseGameboard = syncFirebaseGameboard(); // essentially self.synchFirebasegameboard is gameObject;

		self.boxClicked = boxClicked;
		// setting the gameboard //
		

		function syncFirebaseGameboard() {
			var ref = new Firebase('http://fancy-tictactoe.firebaseio.com')
			var gameObject = $firebaseObject(ref);

			gameObject.$loaded(function() {
				gameObject.counter = 0;
				gameObject.gameboard = [
					{clicked_player_one: false, clicked_player_two: false, alias: "a"},
		            		{clicked_player_one: false, clicked_player_two: false, alias: "b"},
				           {clicked_player_one: false, clicked_player_two: false, alias: "c"},
				           {clicked_player_one: false, clicked_player_two: false, alias: "d"},
				           {clicked_player_one: false, clicked_player_two: false, alias: "e"},
				           {clicked_player_one: false, clicked_player_two: false, alias: "f"},
				           {clicked_player_one: false, clicked_player_two: false, alias: "g"},
				           {clicked_player_one: false, clicked_player_two: false, alias: "h"},
				           {clicked_player_one: false, clicked_player_two: false, alias: "i"}
				  ] // end of gameObject.gameboard
				gameObject.$save()
				} 

			) // end of $loaded function.
			return gameObject;
		} // end of function syncFirebaseGameboard()
		
		function boxClicked($index) {
			console.log("hello world")
			// self.syncFirebaseGameboard.gameboard[$index].clicked_player_one = false;
			// self.syncFirebaseGameboard.gameboard[$index].clicked_player_one = false;
			if (self.syncFirebaseGameboard.counter % 2 === 0) {
				self.syncFirebaseGameboard.gameboard[$index].clicked_player_one = true; // Setting the 'picked' property in the gameboard to true.	
				self.syncFirebaseGameboard.$save();
			} else if (self.syncFirebaseGameboard.counter % 2 != 0 ) {
				self.syncFirebaseGameboard.gameboard[$index].clicked_player_two = true; // Setting the 'picked' property in the gameboard to true.	
				self.syncFirebaseGameboard.$save();
				
			} else {
				alert("pick again!")
			}
			self.syncFirebaseGameboard.counter++;
			self.syncFirebaseGameboard.$save();
			pickWinner;
		} // end of boxClicked function

		function pickWinner() {
			
			if ((self.syncFirebaseGameboard.gameboard[0].clicked_player_one = true) && (self.syncFirebaseGameboard.gameboard[1].clicked_player_one = true) && (self.syncFirebaseGameboard.gameboard[2].clicked_player_one = true)) {
				console.log("Winner!")		
				alert("Winner!")	
			}
		}
	} //end of MainController function

