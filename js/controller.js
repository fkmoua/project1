 angular
	.module('TicTacToe')
	.controller('MainController', MainController);
	
	MainController.$inject = ['$firebaseObject'];

	function MainController($firebaseObject) {
		var self = this; 
		self.syncFirebaseGameboard = syncFirebaseGameboard(); // will return gameObject (the firebase object) //
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
			if ((self.syncFirebaseGameboard.gameboard[$index].clicked_player_one != true) && (self.syncFirebaseGameboard.gameboard[$index].clicked_player_two != true)) {
				if (self.syncFirebaseGameboard.counter % 2 === 0) {
					self.syncFirebaseGameboard.gameboard[$index].clicked_player_one = true; // Setting the 'picked' property in the gameboard to true.	
					self.syncFirebaseGameboard.$save();
				} else if (self.syncFirebaseGameboard.counter % 2 != 0 ) {
					self.syncFirebaseGameboard.gameboard[$index].clicked_player_two = true; // Setting the 'picked' property in the gameboard to true.	
					self.syncFirebaseGameboard.$save();
				} else 	{
					alert("Tomatoes!")
				}
			} // end of checking if box is empty.
			else {
				alert("pick again!")
				self.syncFirebaseGameboard.counter--   // alerts player to pick again because box is not empty; counter goes down by 1
				}	
			self.syncFirebaseGameboard.counter++;
			checkWinner();	
			self.syncFirebaseGameboard.$save();
			
		} // end of boxClicked function


		function checkWinner() {
			//player one//
			var zero = self.syncFirebaseGameboard.gameboard[0].clicked_player_one;
			var one = self.syncFirebaseGameboard.gameboard[1].clicked_player_one;
			var two = self. syncFirebaseGameboard.gameboard[2].clicked_player_one;
			var three = self.syncFirebaseGameboard.gameboard[3].clicked_player_one;
			var four = self.syncFirebaseGameboard.gameboard[4].clicked_player_one;
			var five = self.syncFirebaseGameboard.gameboard[5].clicked_player_one;
			var six = self.syncFirebaseGameboard.gameboard[6].clicked_player_one;
			var seven = self.syncFirebaseGameboard.gameboard[7].clicked_player_one;
			var eight = self.syncFirebaseGameboard.gameboard[8].clicked_player_one;

			//player two//
			var zero2 = self.syncFirebaseGameboard.gameboard[0].clicked_player_two;
			var one2 = self.syncFirebaseGameboard.gameboard[1].clicked_player_two;
			var two2 = self. syncFirebaseGameboard.gameboard[2].clicked_player_two;
			var three2 = self.syncFirebaseGameboard.gameboard[3].clicked_player_two;
			var four2 = self.syncFirebaseGameboard.gameboard[4].clicked_player_two;
			var five2 = self.syncFirebaseGameboard.gameboard[5].clicked_player_two;
			var six2 = self.syncFirebaseGameboard.gameboard[6].clicked_player_two;
			var seven2 = self.syncFirebaseGameboard.gameboard[7].clicked_player_two;
			var eight2 = self.syncFirebaseGameboard.gameboard[8].clicked_player_two;
			
			console.log("Hello World") 

			// thee rows across for player one //
			if ((zero != false) && (one != false) && (two != false)) {	
				alert("Player One Wins!")	
			} else if ((three != false) && (four != false) && (five != false)) {
				alert("Player One Wins!")
			} else if ((six != false) && (seven != false) && (eight != false)) {
				alert("Player One Wins!")
			//three columns for player one //
			} else if ((zero != false) && (three != false) && (six != false)) {
				alert("Player One Wins!")
			} else if ((one != false) && (four != false) && (seven != false)) {
				alert("Player One Wins!")
			} else if ((two != false) && (five != false) && (eight != false)) {
				alert("Player One Wins!")
			// two diagonals for player one //
			} else if ((zero != false) && (four != false) && (eight != false)) {
				alert("Player One Wins!")
			} else if ((two != false) && (four != false) && (six != false)) {
				alert("Player One Wins!")
			}

			//three rows across for player two//
			else if ((zero2 != false) && (one2 != false) && (two2 != false)) {	
				alert("Player Two Wins!")	
			} else if ((three2 != false) && (four2 != false) && (five2 != false)) {
				alert("Player Two Wins!")
			} else if ((six2 != false) && (seven2 != false) && (eight2 != false)) {
				alert("Player Two Wins!")
			//three columns for player two //
			} else if ((zero2 != false) && (three2 != false) && (six2 != false)) {
				alert("Player Two Wins!")
			} else if ((one2 != false) && (four2 != false) && (seven2 != false)) {
				alert("Player Two Wins!")
			} else if ((two2 != false) && (five2 != false) && (eight2 != false)) {
				alert("Player Two Wins!")
			// two diagonals for player three //
			} else if ((zero2 != false) && (four2 != false) && (eight2 != false)) {
				alert("Player Two Wins!")
			} else if ((two2 != false) && (four2 != false) && (six2 != false)) {
				alert("Player Two Wins!")
			} 
		} // end of checkWinner function.		
	} //end of MainController function.















