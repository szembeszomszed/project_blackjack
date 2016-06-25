var main = function() {

	var name = prompt("Please enter your name");
	
	if (name == undefined) {
		name = "Player";
	}

	var day = new Date();
	var hours = day.getHours();
	var stack = 100;
	var betValue = 0;
	var playerHandValues = [];
	var dealerHandValues = [];

	var playerHandSum = 0;
	var dealerHandSum = 0;

	var playerCard1Index = 0;
	var dealerCard1Index = 0;
	var playerCard2Index = 0;
	var dealerCard2Index = 0;

	var playerCard1 = 0;
	var playerCard2 = 0;
	var dealerCard1 = 0;
	var dealerCard2 = 0;

	var uniqueRandoms = [];
	var numRandoms = 52;

	

	
	function Card(color, rank, value, altValue, image, holeCard) {
		this.color = color;
		this.rank = rank;
		this.value = value;
		this.altValue = altValue;
		this.image = image;
		this.holeCard = holeCard;
	};

	var cardDeck = [];
	cardDeck[0] = new Card('Clubs', 'Ace', 11, 1, 'img/ace_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[1] = new Card('Clubs', '2', 2, 2, 'img/2_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[2] = new Card('Clubs', '3', 3, 3, 'img/3_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[3] = new Card('Clubs', '4', 4, 4, 'img/4_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[4] = new Card('Clubs', '5', 5, 5, 'img/5_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[5] = new Card('Clubs', '6', 6, 6, 'img/6_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[6] = new Card('Clubs', '7', 7, 7, 'img/7_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[7] = new Card('Clubs', '8', 8, 8, 'img/8_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[8] = new Card('Clubs', '9', 9, 9, 'img/9_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[9] = new Card('Clubs', '10', 10, 10, 'img/10_of_clubs.svg', 'img/holecard0.jpg');
	cardDeck[10] = new Card('Clubs', 'Jack', 10, 10, 'img/jack_of_clubs2.svg', 'img/holecard0.jpg');
	cardDeck[11] = new Card('Clubs', 'Queen', 10, 10, 'img/queen_of_clubs2.svg', 'img/holecard0.jpg');
	cardDeck[12] = new Card('Clubs', 'King', 10, 10, 'img/king_of_clubs2.svg', 'img/holecard0.jpg');
	cardDeck[13] = new Card('Diamonds', 'Ace', 11, 1, 'img/ace_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[14] = new Card('Diamonds', '2', 2, 2, 'img/2_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[15] = new Card('Diamonds', '3', 3, 3, 'img/3_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[16] = new Card('Diamonds', '4', 4, 4, 'img/4_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[17] = new Card('Diamonds', '5', 5, 5, 'img/5_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[18] = new Card('Diamonds', '6', 6, 6, 'img/6_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[19] = new Card('Diamonds', '7', 7, 7, 'img/7_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[20] = new Card('Diamonds', '8', 8, 8, 'img/8_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[21] = new Card('Diamonds', '9', 9, 9, 'img/9_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[22] = new Card('Diamonds', '10', 10, 10, 'img/10_of_diamonds.svg', 'img/holecard0.jpg');
	cardDeck[23] = new Card('Diamonds', 'Jack', 10, 10, 'img/jack_of_diamonds2.svg', 'img/holecard0.jpg');
	cardDeck[24] = new Card('Diamonds', 'Queen', 10, 10, 'img/queen_of_diamonds2.svg', 'img/holecard0.jpg');
	cardDeck[25] = new Card('Diamonds', 'King', 10, 10, 'img/king_of_diamonds2.svg', 'img/holecard0.jpg');
	cardDeck[26] = new Card('Hearts', 'Ace', 11, 1, 'img/ace_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[27] = new Card('Hearts', '2', 2, 2, 'img/2_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[28] = new Card('Hearts', '3', 3, 3, 'img/3_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[29] = new Card('Hearts', '4', 4, 4, 'img/4_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[30] = new Card('Hearts', '5', 5, 5, 'img/5_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[31] = new Card('Hearts', '6', 6, 6, 'img/6_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[32] = new Card('Hearts', '7', 7, 7, 'img/7_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[33] = new Card('Hearts', '8', 8, 8, 'img/8_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[34] = new Card('Hearts', '9', 9, 9, 'img/9_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[35] = new Card('Hearts', '10', 10, 10, 'img/10_of_hearts.svg', 'img/holecard0.jpg');
	cardDeck[36] = new Card('Hearts', 'Jack', 10, 10, 'img/jack_of_hearts2.svg', 'img/holecard0.jpg');
	cardDeck[37] = new Card('Hearts', 'Queen', 10, 10, 'img/queen_of_hearts2.svg', 'img/holecard0.jpg');
	cardDeck[38] = new Card('Hearts', 'King', 10, 10, 'img/king_of_hearts2.svg', 'img/holecard0.jpg');
	cardDeck[39] = new Card('Spades', 'Ace', 11, 1, 'img/ace_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[40] = new Card('Spades', '2', 2, 2, 'img/2_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[41] = new Card('Spades', '3', 3, 3, 'img/3_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[42] = new Card('Spades', '4', 4, 4, 'img/4_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[43] = new Card('Spades', '5', 5, 5, 'img/5_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[44] = new Card('Spades', '6', 6, 6, 'img/6_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[45] = new Card('Spades', '7', 7, 7, 'img/7_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[46] = new Card('Spades', '8', 8, 8, 'img/8_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[47] = new Card('Spades', '9', 9, 9, 'img/9_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[48] = new Card('Spades', '10', 10, 10, 'img/10_of_spades.svg', 'img/holecard0.jpg');
	cardDeck[49] = new Card('Spades', 'Jack', 10, 10, 'img/jack_of_spades2.svg', 'img/holecard0.jpg');
	cardDeck[50] = new Card('Spades', 'Queen', 10, 10, 'img/queen_of_spades2.svg', 'img/holecard0.jpg');
	cardDeck[51] = new Card('Spades', 'King', 10, 10, 'img/king_of_spades2.svg', 'img/holecard0.jpg');

	
	// display welcome message to user after prompting their name

	function welcomeMsg() {
		if(hours >= 0 && hours < 4) {
			$('h1.welcome').text("Hey " + name + "!");
			$('p.welcome').text("Still not sleeping? Would you like to play Blackjack?");
		} else if (hours >= 4 && hours < 7) {
			$('h1.welcome').text("Good morning " + name + "!");
			$('p.welcome').text("It's never too early for a nice game! Would you like to play Blackjack?");
		} else if (hours >= 7 && hours < 12) {
			$('h1.welcome').text("Good morning " + name + "!");
			$('p.welcome').text("Let's start the day with a nice game! Would you like to play Blackjack?");
		} else if (hours >= 12 && hours < 18) {
			$('h1.welcome').text("Good afternoon " + name + "!");
			$('p.welcome').text("Time to take a break! Would you like to play Blackjack?");
		} else if (hours >= 18 && hours <= 24) {
			$('h1.welcome').text("Good evening " + name + "!");
			$('p.welcome').text("We still have plenty of time for a game! Would you like to play Blackjack?");
			};
		$('#buttons').show();	
	};


	function newGame() {
		//$('h1.welcome').text("Alright " + name + "! Let's play again! ");
		$('#nextroundbtn').removeClass('active')
				.attr('disabled', true);
		$('#displayplayerhandsum').text("")
			.css('color', '#000');
		$('#displaydealerhandsum').text("")
			.css('color', '#000');
		$('#message').text("Let's start with the betting!");
		stack = 100;
		betValue = 0;
		$('#betting-box h1').text(betValue);
    	$('#stackvalue').text(stack);
    	$('#betform').removeClass('transparent');
    	$('form').show();
    	$('input[type="number"]').val("");
    	$('#playername').text("");
		$('#dealername').text("");
    	$('#section4 img').removeAttr('src height width');
    }		
	

	function refillUniqueRandoms() { // refill the array with values from 0 to 51

		uniqueRandoms.length = 0;

		for (var i = 0; i < numRandoms; i++) {
			uniqueRandoms.push(i);
		}
	}	

	function makeUniqueRandom() { //select a value from 0 to 51 then remove it from the array
		var index = Math.floor(Math.random() * uniqueRandoms.length);
		var val = uniqueRandoms[index];

		uniqueRandoms.splice(index, 1);

		return val;

	}

	function newRound() {
		console.log('stack in new round: ' + stack);
		console.log('betValue in new round: ' + betValue);

		refillUniqueRandoms();
		console.log('uniqueRandoms.length: ' + uniqueRandoms.length);
		console.log('uniqueRandoms after refill: ' + uniqueRandoms);

		playerHandValues = [];
		dealerHandValues = [];

		playerHandSum = 0;
		dealerHandSum = 0;	
		

		setTimeout(function() {
			playerCard1Index = makeUniqueRandom();
			playerCard1 = cardDeck[playerCard1Index];
			addCardToPlayerHand(playerCard1);
			$('#playercard1 img').attr({src:playerCard1.image, height: '170px', width: '120px'});
			$('#playername').text(name); 
		}, 800);				
						
		setTimeout(function() {
			dealerCard1Index = makeUniqueRandom();
			dealerCard1 = cardDeck[dealerCard1Index];
			addCardToDealerHand(dealerCard1);
			$('#dealercard1 img').attr({src:dealerCard1.image, height: '170px', width: '120px'});
			$('#dealername').text('Dealer');
		}, 1600);

		setTimeout(function() {
			playerCard2Index = makeUniqueRandom();
			playerCard2 = cardDeck[playerCard2Index];
			addCardToPlayerHand(playerCard2);
			playerAceCheck();
			$('#playercard2 img').attr({src:playerCard2.image, height: '170px', width: '120px'});
			$('#displayplayerhandsum').css('display', 'block');
				setTimeout(function() { // avoid value to appear before card is displayed
					$('#displayplayerhandsum').text(playerHandSum);
				}, 200);
		}, 2400);

		setTimeout(function() {
			dealerCard2Index = makeUniqueRandom();
			dealerCard2 = cardDeck[dealerCard2Index];
			addCardToDealerHand(dealerCard2);
			dealerAceCheck();
			$('#dealercard2 img').attr({src:dealerCard2.holeCard, height: '170px', width: '120px'});

			console.log('playerCard1Index: ' + playerCard1Index);
			console.log('dealerCard1Index: ' + dealerCard1Index);
			console.log('playerCard2Index: ' + playerCard2Index);
			console.log('dealerCard2Index: ' + dealerCard2Index);
			console.log('uniqueRandoms after makeUniqueRandom: ' + uniqueRandoms);

		}, 3200);

		setTimeout(function() {

			
				if(playerHandSum === 21) { // player has Blackjack

					setTimeout(function() {

					$('#dealercard2 img').attr({src:dealerCard2.image, height: '170px', width: '120px'});
					
					setTimeout(function() { // avoid value to appear before card is displayed
						$('displaydealerhandsum').text(dealerHandSum);
					}, 200);

					if(dealerHandSum === 21) { // dealer has Blackjack too
						$('#message').text("Omg! You both have Blackjack! You get your money back.");
						var betValue = $('#betting-box h1').text();
						stack += parseInt(betValue, 10);
						console.log(stack)
						betValue -= betValue;
						console.log("betValue:" + betValue);
						$('#betting-box h1').text(betValue);
						$('#stackvalue').text(stack);					
					} else { // dealer has no Blackjack
						$('#message').text("Wow, you have Blackjack! Congratulations!");
						var betValue = $('#betting-box h1').text();
						stack += betValue * 1.5;
						betValue -= betValue;
						console.log("betValue:" + betValue);
						$('#betting-box h1').text(betValue);
						$('#stackvalue').text(stack);
					};

					stackCheck();

					}, 4600);

			} else { // player has no Blackjack, game continues
				betValue = $('#betting-box h1').text(); // defined again to make it available in this function
				
				$('#hitbtn').addClass('active')
								.removeAttr('disabled');
				$('#standbtn').addClass('active')
								.removeAttr('disabled');
				
				if (betValue <= stack) { // #doublebtn can only be active if there is enough stack
					$('#doublebtn').addClass('active')
						.removeAttr('disabled');
				};

				$('#surrenderbtn').addClass('active') // surrender is also possible at this stage
								.removeAttr('disabled');							
			}

		}, 4200);
	}

		
	// FUNCTIONS FOR DEALING CARDS

	function sumPlayerCards() {
		playerHandSum = 0;
		
		for (var i = 0; i < playerHandValues.length; i++) {
			playerHandSum += playerHandValues[i];
		};

		console.log("playerHandSum: " + playerHandSum);
		return playerHandSum;
	}

	function addCardToPlayerHand(card) {

  		playerHandSum = 0;
		
		for (var i = 0; i < playerHandValues.length; i++) {
			playerHandSum += playerHandValues[i];
		};

		console.log("playerHandSum: " + playerHandSum);
		
		if (playerHandSum <= 10) {
			playerHandValues.push(card.value);
		} else {
			playerHandValues.push(card.altValue);
		}
	}

	function playerAceCheck() {
 		playerHandSum = 0;
		
		for (var i = 0; i < playerHandValues.length; i++) {
			playerHandSum += playerHandValues[i];
		};

		console.log("playerHandSum: " + playerHandSum);

		for (var i = 0; i < playerHandValues.length; i++) {
			if (playerHandValues[i] === 11 && playerHandSum > 21) {
				playerHandValues[i] = 1;
			}
		}

		playerHandSum = 0;
		
		for (var i = 0; i < playerHandValues.length; i++) {
			playerHandSum += playerHandValues[i];
		};

		console.log("playerHandValues: " + playerHandValues);
		console.log("playerHandSum: " + playerHandSum);
	}

	function sumDealerCards() {
		dealerHandSum = 0;
		
		for (var i = 0; i < dealerHandValues.length; i++) {
			dealerHandSum += dealerHandValues[i];
		};

		console.log("dealerHandSum: " + dealerHandSum);
		return dealerHandSum;
	}

	function addCardToDealerHand(card) {
  		dealerHandSum = 0;
		
		for (var i = 0; i < dealerHandValues.length; i++) {
			dealerHandSum += dealerHandValues[i];
		};

		console.log("dealerHandSum: " + dealerHandSum);
		if (dealerHandSum <= 10) {
			dealerHandValues.push(card.value);
		} else {
			dealerHandValues.push(card.altValue);
		}
	}

	function dealerAceCheck() {
 		dealerHandSum = 0;
		
		for (var i = 0; i < dealerHandValues.length; i++) {
			dealerHandSum += dealerHandValues[i];
		};

		console.log("dealerHandSum: " + dealerHandSum);

		for (var i = 0; i < dealerHandValues.length; i++) {
			if (dealerHandValues[i] === 11 && dealerHandSum > 21) {
				dealerHandValues[i] = 1;
			}
		}

 		dealerHandSum = 0;
		
		for (var i = 0; i < dealerHandValues.length; i++) {
			dealerHandSum += dealerHandValues[i];
		};			
		
		console.log("dealerHandValues: " + dealerHandValues);
		console.log("dealerHandSum: " + dealerHandSum);
	} 

	// END OF FUNCTIONS FOR DEALING CARDS


	// FUNCTIONS TO HANDLE DIFFERENT OUTCOMES

	function roundOutcomes() {

		setTimeout(function() {

			if (playerHandSum > 21) {

				(function() { // player bust
					$('#displayplayerhandsum').css('color', '#ff0000');
					$('#message').text("BUST! This is too much for you. :( ");
					console.log("stack: " + stack);
					betValue = 0;
					$('#betting-box h1').text(betValue);    		
				})();

			} else if (playerHandSum === 21) {

				if (dealerHandSum > 21) {

				    (function() { // dealer bust
				    	$('#displaydealerhandsum').css('color', '#ff0000');
				  		$('#message').text("Dealer got busted! You've won!");
				  		var betValue = $('#betting-box h1').text();
						stack += betValue * 2;
						console.log("stack: " + stack);
						betValue -= betValue;
						console.log("betValue:" + betValue);
						$('#betting-box h1').text(betValue);
						$('#stackvalue').text(stack);  		
				    })();	

				} else if (dealerHandSum === playerHandSum && dealerHandValues.length !== 2) {

					(function() { // tie21
						$('#message').text("PUSH! Wow, you both have 21. You get your money back.");
						var betValue = $('#betting-box h1').text();
						stack += betValue * 1; // otherwise betValue is not considered as number - other solution could be to use parseInt(betValue, 10)
						console.log("stack: " + stack);
						betValue -= betValue;
						console.log("betValue:" + betValue);
						$('#betting-box h1').text(betValue);
						$('#stackvalue').text(stack);	
					})();

				} else if (dealerHandSum === playerHandSum && dealerHandValues.length === 2) {

					(function() { // only dealer has Blackjack
			    		$('#message').text("Ouch! Blackjack rules... :( ");
			    		console.log("stack: " + stack);
						betValue = 0;
						$('#betting-box h1').text(betValue);
						console.log("betValue: " + betValue);
					})();

				} else if (dealerHandSum < playerHandSum) {

				   (function() { // player wins
			    		$('#message').text("What a play! You've won!");
			    		var betValue = $('#betting-box h1').text();
						stack += betValue * 2;
						console.log("stack: " + stack);
						betValue -= betValue;
						console.log("betValue:" + betValue);
						$('#betting-box h1').text(betValue);
						$('#stackvalue').text(stack);
					})();

				}

			} else if (playerHandSum < 21) {

				if (dealerHandSum > 21) {

				    (function() { // dealer bust
				  		$('#message').text("Dealer got busted! You've won!");
				  		$('#displaydealerhandsum').css('color', '#ff0000');
				  		var betValue = $('#betting-box h1').text();
						stack += betValue * 2;
						console.log("stack: " + stack);
						betValue -= betValue;
						console.log("betValue:" + betValue);
						$('#betting-box h1').text(betValue);
						$('#stackvalue').text(stack);  		
				    })();

				} else if (dealerHandSum === 21 && dealerHandValues.length !== 2) {
			    	
			    	(function() { // dealer has 21 but not Blackjack	
			    		$('#message').text("Oh, this is not enough. You've lost this round. :( ");
			    		console.log("stack: " + stack);
						betValue = 0;
						$('#betting-box h1').text(betValue);
						console.log("betValue: " + betValue);
					})();

				} else if (dealerHandSum === 21 && dealerHandValues.length === 2) {

			    	(function() { // dealer has Blackjack	
			    		$('#message').text("Ouch! Blackjack rules... :( ");
			    		console.log("stack: " + stack);
						betValue = 0;
						$('#betting-box h1').text(betValue);
						console.log("betValue: " + betValue);
					})();
				
				} else if (dealerHandSum === playerHandSum) {

			    	(function() { // tie
				    	$('#message').text("PUSH! Exactly the same! You get your money back.");
				    	var betValue = $('#betting-box h1').text();
				    	stack += betValue * 1; // otherwise betValue is not considered as number - other solution could be to use parseInt(betValue, 10)
				    	console.log("stack: " + stack);
				    	betValue -= betValue;
				    	console.log("betValue:" + betValue);
				    	$('#betting-box h1').text(betValue);
				    	$('#stackvalue').text(stack);
			    	})();
				
				} else if (dealerHandSum < playerHandSum) {

				   (function() { // player wins
			    		$('#message').text("What a play! You've won!");
			    		var betValue = $('#betting-box h1').text();
						stack += betValue * 2;
						console.log("stack: " + stack);
						betValue -= betValue;
						console.log("betValue:" + betValue);
						$('#betting-box h1').text(betValue);
						$('#stackvalue').text(stack);
					})();

				} else if (dealerHandSum > playerHandSum) {
					
					(function() { // dealer wins
						$('#message').text("Oh, this is not enough. You've lost this round. :( ");
						console.log("stack: " + stack);
						betValue = 0;
						$('#betting-box h1').text(betValue);
						console.log("betValue: " + betValue);
					})();
				}
			}

		}, 400);

		stackCheck();
		
		
		cardNumber = 2; // set cardNumber to default at the end of round
		disableGameButtons(); // disable game buttons after each round

	}

	// checking remaining stack amount

	function stackCheck() {

		setTimeout(function() {

			console.log('stack while stackCheck: ' + stack);

			if (stack > 0) {
				$('#nextroundbtn').addClass('active')
						.removeAttr('disabled');
				
				//setTimeout(function() {
					$('#message').text("Click Next Round to continue.");
				//}, 3000);

			} else {
				//setTimeout(function() {
					$('#message').text("You've run out of money. Click New Game to try again.");
				//}, 3000);
			}

			console.log('stackCheck done')

		}, 2500);
	}


	// individual outcomes

	function playerBust() {
		$('#message').text("BUST! This is too much for you. :( ");
		console.log("stack: " + stack);
		betValue = 0;
		$('#betting-box h1').text(betValue);
		stackCheck(); 		
	}

	function playerWins() {
		$('#message').text("What a play! You've won!");
		var betValue = $('#betting-box h1').text();
		stack += betValue * 2;
		console.log("stack: " + stack);
		betValue -= betValue;
		console.log("betValue:" + betValue);
		$('#betting-box h1').text(betValue);
		$('#stackvalue').text(stack);
		stackCheck();
	}

	function dealerBust() {
		$('#message').text("Dealer got busted! You've won!");
		var betValue = $('#betting-box h1').text();
		stack += betValue * 2;
		console.log("stack: " + stack);
		betValue -= betValue;
		console.log("betValue:" + betValue);
		$('#betting-box h1').text(betValue);
		$('#stackvalue').text(stack);  		
	}

	function dealerWins() {
		$('#message').text("Oh, this is not enough. You've lost this round. :( ");
		console.log("stack: " + stack);
		betValue = 0;
		$('#betting-box h1').text(betValue);
		console.log("betValue: " + betValue);
	}

	function dealerBlackjack() { // only dealer has Blackjack
		$('#message').text("Ouch! Blackjack rules... :( ");
		console.log("stack: " + stack);
		betValue = 0;
		$('#betting-box h1').text(betValue);
		console.log("betValue: " + betValue);
	}

	function tie() {
    	$('#message').text("PUSH! Exactly the same! You get your money back.");
    	var betValue = $('#betting-box h1').text();
    	stack += betValue * 1; // otherwise betValue is not considered as number - other solution could be to use parseInt(betValue, 10)
    	console.log("stack: " + stack);
    	betValue -= betValue;
    	console.log("betValue:" + betValue);
    	$('#betting-box h1').text(betValue);
    	$('#stackvalue').text(stack);
	}

	function tie21() {
	    $('#message').text("PUSH! Wow, you both have 21. You get your money back.");
	    betValue = $('#betting-box h1').text();
	    stack += betValue * 1; // otherwise betValue is not considered as number - other solution could be to use parseInt(betValue, 10)
	    console.log("stack: " + stack);
	    betValue -= betValue;
	    console.log("betValue:" + betValue);
	    $('#betting-box h1').text(betValue);
	    $('#stackvalue').text(stack);	
	}

	// END OF FUNCTIONS TO HANDLE DIFFERENT OUTCOMES

	// function to handle game when dealer turns

	function dealerTurn() {

		setTimeout(function() { // show dealerCard2 (the hole card) with some delay
			$('#dealercard2 img').attr({src:dealerCard2.image, height: '170px', width: '120px'}); 
			$('#displaydealerhandsum').css('display', 'block');
			$('#displaydealerhandsum').text(dealerHandSum);
		}, 1600);

		setTimeout(function() {

			var count = 3
			var drawCardInterval = setInterval(function() { 
				if (dealerHandSum <= 16) { 
					console.log('dealerHandSum: ' + dealerHandSum); 
					var dealerCardIndex = makeUniqueRandom(); 
					console.log('uniqueRandoms: ' + uniqueRandoms);
					var dealerCard = cardDeck[dealerCardIndex]; 
					addCardToDealerHand(dealerCard); dealerAceCheck(); 
					var selector = '#dealercard' + count + ' img'; 
					++count; 
					$(selector).attr({src:dealerCard.image, height: '170px', width: '120px'});
					if (dealerHandSum > 21) {
						$('#displaydealerhandsum').text(dealerHandSum)
							.css('color', '#ff0000');
						} else {
							$('#displaydealerhandsum').text(dealerHandSum)
						}
				} else { 
					clearInterval(drawCardInterval); 
					console.log('interval cleared'); 
					roundOutcomes();
				} 

			}, 1200);

		}, 1400);
	}

	// BUTTON RELATED FUNCTIONS

	function disableGameButtons() {

		$('#hitbtn').removeClass('active')
						.attr('disabled', true);
		$('#standbtn').removeClass('active')
						.attr('disabled', true);
		$('#doublebtn').removeClass('active')
						.attr('disabled', true);
		$('#surrenderbtn').removeClass('active')
						.attr('disabled', true);

	}

	var cardNumber = 2;
	
	function clickCounter() { // support counting number of clicks on (hit) button
		
		cardNumber++;
		return cardNumber;
	}


	welcomeMsg();

	// slide toggle 'rules'

	$('#pull-me').click(function() {
		$('#panel').toggle(400);
		$(this).toggleClass('open');
		$('#arrow').toggleClass('open');
		$('#arrow').find('i').toggleClass('fa fa-angle-double-right fa-3x');
		$('#arrow').find('i').toggleClass('fa fa-angle-double-left fa-3x');
		return false;
	});

	$('#arrow').click(function() {
		$('#panel').toggle(400);
		$(this).toggleClass('open');
		$(this).find('i').toggleClass('fa fa-angle-double-right fa-3x');
		$(this).find('i').toggleClass('fa fa-angle-double-left fa-3x');
		$('#pull-me').toggleClass('open');
		return false;
	});

	// trigger game by clicking on #yesbtn

	$('#yesbtn').click(function() {
		//$('h1.welcome').text("Alright " + name + "! Let's play! ");
		$('#message').text("Let's start with the betting!");
		$('.welcome').hide();
		$('#buttons').hide();
		$('.game-buttons').show();
		$('.new-buttons').show();
		$('.stackbet').show();
		$('form').show();
		$('#stackvalue').text(stack);
		$('#section4').show();
		console.log(stack);
		$('#betting-box h1').text(betValue);
		$('#entry-content').show();
	});

	// start new game anytime by clicking on #newgamebtn

	$('#newgamebtn').click(function() {
		var confirmNewGame = confirm('Are you sure you want to quit this game and start a new one?');
		if (confirmNewGame) {
			newGame();
		}
	})

	// start next round by clicking on #nextroundbtn

	$('#nextroundbtn').click(function() {
		$('#nextroundbtn').removeClass('active')
				.attr('disabled', true);
		$('#playername').text("");
		$('#dealername').text("");
		$('#displayplayerhandsum').text("")
			.css('color', '#000');
		$('#displaydealerhandsum').text("")
			.css('color', '#000');
		$('#message').text("Let's start with the betting!");
		$('#betform').removeClass('transparent');
		$('form').show();
		$('input[type="number"]').val("");
		$('#section4 img').removeAttr('src height width');
		
	})

	// ROUND STARTS

	// form submits betValue to #betting-box

	$('form').submit(function(event) {
		event.preventDefault();
		$('#message').text("");
		var betValue = $('input[type="number"]').val();
		if (betValue > stack) {
			$('#message').text("Oops, you don't seem to have enough money");
			console.log('betValue: ' + betValue);
		} else if (betValue <= 0) {
			$('#message').text("Your bet has to be at least 1 dollar");
			console.log('betValue: ' + betValue);
		} else if (betValue !== "") {
			$('#betting-box h1').text(betValue);
			console.log('betValue: ' + betValue);
			//var betValue = $('<h1>').text(betValue);
			//$('#betting-box').append(betValue);
			$('form').hide();
			$('#betform').addClass('transparent');
			stack -= betValue;
			$('#stackvalue').text(stack);
			console.log('stack after betting: ' + stack);
			$('#message').text("");
			newRound();	// call newRound
			};		
			//$('input[type="number"]').val("");				
	});



	// DOUBLE SCENARIO

	$('#doublebtn').click(function() { // after clicking on #doublebtn, player is not allowed to press any buttons

		disableGameButtons();


		var stackUpdate = $('#stackvalue').text();
		console.log('stackUpdate: ' + stackUpdate);
		stack = parseInt(stackUpdate, 10); // stack has to be updated with the actual value on the page - this is important when new round/game starts
		console.log('stack before subtract: ' + stack);
		
		betValue = $('#betting-box h1').text(); // betValue has to be updated, too

		console.log('betValue before subtract' + betValue);

		stack -= betValue * 1;
		console.log('stack after subtract: ' + stack);

		console.log('betValue before double:' + betValue);
		var doubleBet = betValue * 2; // define doubleBet to make calculation more straightforward
		betValue = doubleBet;
		console.log('betValue after double:' + betValue);

		$('#betting-box h1').text(betValue);
		$('#stackvalue').text(stack);

		var playerCard3Index = makeUniqueRandom(); // random select player's third card after clicking on #doublebtn
		var playerCard3 = cardDeck[playerCard3Index]; // define playerCard3 which is the actual third card
		addCardToPlayerHand(playerCard3);
		playerAceCheck();


						

		setTimeout(function() { // show playerCard3 with some delay
			$('#playercard3 img').attr({src:playerCard3.image, height: '170px', width: '120px'}); 
			$('#displayplayerhandsum').text(playerHandSum);
			}, 1200);

		

		if (playerHandSum > 21) { // player busted, this round finished

			setTimeout(function() {
				roundOutcomes();
			}, 1200);

		} else { // player is still in the game with the third card - dealer can show their hand

			setTimeout(function() {
				dealerTurn();	
			}, 1200);
		}; 
		
	});

	// END OF DOUBLE SCENARIO

	
	// SURRENDER SCENARIO

	$('#surrenderbtn').click(function() { // after clicking on #surrenderbtn, player is not allowed to press any buttons

		disableGameButtons();

		$('#message').text("You've surrended");

		var stackUpdate = $('#stackvalue').text();
		console.log('stackUpdate: ' + stackUpdate);
		stack = parseInt(stackUpdate, 10); // stack has to be updated with the actual value on the page - this is important when new round/game starts
		
		betValue = $('#betting-box h1').text(); // betValue has to be updated, too

		console.log('stack before Surrender: ' + stack);
		stack += Math.ceil(betValue / 2);
		console.log('stack after Surrender: ' + stack);


		betValue = 0;
		console.log('betValue after Surrender:' + betValue);

		$('#betting-box h1').text(betValue);
		$('#stackvalue').text(stack);


		stackCheck();

	});

	// END OF SURRENDER SCENARIO


	// HIT

	$('#hitbtn').click(function() {

		if (document.activeElement != document.body) document.activeElement.blur(); // remove focus after click

		$('#doublebtn').removeClass('active')
						.attr('disabled', true);
		$('#surrenderbtn').removeClass('active')
						.attr('disabled', true);

		clickCounter();
		console.log('cardNumber: ' + cardNumber);

		var playerCardIndex = makeUniqueRandom();
		console.log('playerCardIndex: ' + playerCardIndex);
		var playerCard = cardDeck[playerCardIndex];
		addCardToPlayerHand(playerCard);
		playerAceCheck();
		var selector = '#playercard' + cardNumber + ' img';
		$(selector).attr({src:playerCard.image, height: '170px', width: '120px'});
		$('#displayplayerhandsum').text(playerHandSum); 

		if (playerHandSum > 21) {
			$('#displayplayerhandsum').css('color', '#ff0000')
			roundOutcomes();
		}

	});	

	// END OF HIT


	// STAND

	$('#standbtn').click(function() {

		disableGameButtons();

		dealerTurn();

	});

	// END OF STAND	
		
	
		

	

	/* NEXT
	
	mobilnézet
	var elnevezések
	kerekíteni a számokat
	individual outcomes törlése?
	zene
	
	exit button?

	*/
}



$(document).ready(main);