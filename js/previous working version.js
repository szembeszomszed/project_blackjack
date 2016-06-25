var main = function() {

	var name = prompt("Please enter your name");
	var day = new Date();
	var hours = day.getHours();
	var stack = 100;
	
	function Card(color, rank, value, altValue, image, holeCard) {
		this.color = color;
		this.rank = rank;
		this.value = value;
		this.altValue = altValue;
		this.image = image;
		this.holeCard = holeCard;
	};

	var cardDeck = [];
	cardDeck[0] = new Card('Clubs', 'Ace', 11, 1, 'img/ace_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[1] = new Card('Clubs', '2', 2, 2, 'img/2_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[2] = new Card('Clubs', '3', 3, 3, 'img/3_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[3] = new Card('Clubs', '4', 4, 4, 'img/4_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[4] = new Card('Clubs', '5', 5, 5, 'img/5_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[5] = new Card('Clubs', '6', 6, 6, 'img/6_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[6] = new Card('Clubs', '7', 7, 7, 'img/7_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[7] = new Card('Clubs', '8', 8, 8, 'img/8_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[8] = new Card('Clubs', '9', 9, 9, 'img/9_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[9] = new Card('Clubs', '10', 10, 10, 'img/10_of_clubs.svg', 'img/holecard.jpg');
	cardDeck[10] = new Card('Clubs', 'Jack', 10, 10, 'img/jack_of_clubs2.svg', 'img/holecard.jpg');
	cardDeck[11] = new Card('Clubs', 'Queen', 10, 10, 'img/queen_of_clubs2.svg', 'img/holecard.jpg');
	cardDeck[12] = new Card('Clubs', 'King', 10, 10, 'img/king_of_clubs2.svg', 'img/holecard.jpg');
	cardDeck[13] = new Card('Diamonds', 'Ace', 11, 1, 'img/ace_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[14] = new Card('Diamonds', '2', 2, 2, 'img/2_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[15] = new Card('Diamonds', '3', 3, 3, 'img/3_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[16] = new Card('Diamonds', '4', 4, 4, 'img/4_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[17] = new Card('Diamonds', '5', 5, 5, 'img/5_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[18] = new Card('Diamonds', '6', 6, 6, 'img/6_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[19] = new Card('Diamonds', '7', 7, 7, 'img/7_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[20] = new Card('Diamonds', '8', 8, 8, 'img/8_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[21] = new Card('Diamonds', '9', 9, 9, 'img/9_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[22] = new Card('Diamonds', '10', 10, 10, 'img/10_of_diamonds.svg', 'img/holecard.jpg');
	cardDeck[23] = new Card('Diamonds', 'Jack', 10, 10, 'img/jack_of_diamonds2.svg', 'img/holecard.jpg');
	cardDeck[24] = new Card('Diamonds', 'Queen', 10, 10, 'img/queen_of_diamonds2.svg', 'img/holecard.jpg');
	cardDeck[25] = new Card('Diamonds', 'King', 10, 10, 'img/king_of_diamonds2.svg', 'img/holecard.jpg');
	cardDeck[26] = new Card('Hearts', 'Ace', 11, 1, 'img/ace_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[27] = new Card('Hearts', '2', 2, 2, 'img/2_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[28] = new Card('Hearts', '3', 3, 3, 'img/3_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[29] = new Card('Hearts', '4', 4, 4, 'img/4_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[30] = new Card('Hearts', '5', 5, 5, 'img/5_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[31] = new Card('Hearts', '6', 6, 6, 'img/6_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[32] = new Card('Hearts', '7', 7, 7, 'img/7_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[33] = new Card('Hearts', '8', 8, 8, 'img/8_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[34] = new Card('Hearts', '9', 9, 9, 'img/9_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[35] = new Card('Hearts', '10', 10, 10, 'img/10_of_hearts.svg', 'img/holecard.jpg');
	cardDeck[36] = new Card('Hearts', 'Jack', 10, 10, 'img/jack_of_hearts2.svg', 'img/holecard.jpg');
	cardDeck[37] = new Card('Hearts', 'Queen', 10, 10, 'img/queen_of_hearts2.svg', 'img/holecard.jpg');
	cardDeck[38] = new Card('Hearts', 'King', 10, 10, 'img/king_of_hearts2.svg', 'img/holecard.jpg');
	cardDeck[39] = new Card('Spades', 'Ace', 11, 1, 'img/ace_of_spades.svg', 'img/holecard.jpg');
	cardDeck[40] = new Card('Spades', '2', 2, 2, 'img/2_of_spades.svg', 'img/holecard.jpg');
	cardDeck[41] = new Card('Spades', '3', 3, 3, 'img/3_of_spades.svg', 'img/holecard.jpg');
	cardDeck[42] = new Card('Spades', '4', 4, 4, 'img/4_of_spades.svg', 'img/holecard.jpg');
	cardDeck[43] = new Card('Spades', '5', 5, 5, 'img/5_of_spades.svg', 'img/holecard.jpg');
	cardDeck[44] = new Card('Spades', '6', 6, 6, 'img/6_of_spades.svg', 'img/holecard.jpg');
	cardDeck[45] = new Card('Spades', '7', 7, 7, 'img/7_of_spades.svg', 'img/holecard.jpg');
	cardDeck[46] = new Card('Spades', '8', 8, 8, 'img/8_of_spades.svg', 'img/holecard.jpg');
	cardDeck[47] = new Card('Spades', '9', 9, 9, 'img/9_of_spades.svg', 'img/holecard.jpg');
	cardDeck[48] = new Card('Spades', '10', 10, 10, 'img/10_of_spades.svg', 'img/holecard.jpg');
	cardDeck[49] = new Card('Spades', 'Jack', 10, 10, 'img/jack_of_spades2.svg', 'img/holecard.jpg');
	cardDeck[50] = new Card('Spades', 'Queen', 10, 10, 'img/queen_of_spades2.svg', 'img/holecard.jpg');
	cardDeck[51] = new Card('Spades', 'King', 10, 10, 'img/king_of_spades2.svg', 'img/holecard.jpg');

	console.log(cardDeck[0]);


	/*
	for (var i in cards) {
		console.log(i);
		console.log(cards[i]);
	};
	*/

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
		$('.buttons').show();	
	};

	// trigger game by clicking on #yesbtn

	$('#yesbtn').click(function startGame() {
		$('h1.welcome').text("Alright " + name + "! Let's play! ");
		$('p').hide();
		$('.buttons').hide();
		$('.game-buttons').show();
		$('.stackbet').show();
		$('#section4').show();
		$('#stackvalue').text(stack);
		console.log(stack);
		newBetting();
	});
	


	function newBetting() {

		// by pressing enter submit betValue to #betting-box	
		$('form').show();
		$('form').submit(function(event) {
			event.preventDefault();
			var betValue = $('input[type="number"]').val();
			if (betValue > stack) {
				$('#message').text("Oops, you don't seem to have enough money");
			} else if (betValue <= 0) {
				$('#message').text("Your bet has to be at least 1 dollar");
			} else if (betValue !== "") {
				$('#betting-box h1').text(betValue);
				//var bettingBox = $('<h1>').text(betValue);
				//$('#betting-box').append(bettingBox);
				$('form').hide();
				stack -= betValue;
				$('#stackvalue').text(stack);

				console.log(stack);

				$('#message').text("");

				newRound();	
			};		
			$('input[type="number"]').val("");				
		});

		// by clicking on #betsubmit submit betValue to #betting-box

		$('#betsubmit').click(function(){
			var betValue = $('input[type="number"]').val();
			if (betValue > stack) {
				$('#message').text("Oops, you don't seem to have enough money");
			} else if (betValue <= 0) {
				$('#message').text("Your bet has to be at least 1 dollar");				
			} else if (betValue !== "") {
				$('#betting-box h1').text(betValue);
				//var bettingBox = $('<h1>').text(betValue); // ERROR: this creates new h1 on every click
				//$('#betting-box').append(bettingBox);
				$('form').hide();
				stack -= betValue;
				$('#stackvalue').text(stack);

				console.log(stack);

				$('#message').text("");

				newRound();	// call newRound
			};		
			$('input[type="number"]').val("");	// clear form			
		});
	};

	
	var uniqueRandoms = [];
	var numRandoms = 52;	

	function refillUniqueRandoms() { // refill the array with values from 0 to 51
		if (!uniqueRandoms.length) {
			for (var i = 0; i < numRandoms; i++) {
				uniqueRandoms.push(i);
			}
		}
	}

	

	function makeUniqueRandom() { //select a value from 0 to 51 then remove it from the array
		var index = Math.floor(Math.random() * uniqueRandoms.length);
		var val = uniqueRandoms[index];

		uniqueRandoms.splice(index, 1);

		return val;

	}

	function newRound() {
		refillUniqueRandoms();


		var playerHandValues = [];
		var dealerHandValues = [];

		var playerHandSum = 0;
		var dealerHandSum = 0;

		var playerCard1Index = 0;
		var dealerCard1Index = 0;
		var playerCard2Index = 0;
		var dealerCard2Index = 38;

		var playerCard1 = cardDeck[playerCard1Index];
		var playerCard2 = cardDeck[playerCard2Index];
		var dealerCard1 = cardDeck[dealerCard1Index];
		var dealerCard2 = cardDeck[dealerCard2Index];

		sumPlayerCards();
		addNewPlayerCard(playerCard1);
		addNewPlayerCard(playerCard2);
		playerAceCheck();
		
		sumDealerCards();
		addNewDealerCard(dealerCard1);
		addNewDealerCard(dealerCard2);
		dealerAceCheck();
		
		// FUNCTIONS FOR DEALING CARDS

    	function sumPlayerCards() {
    		playerHandSum = 0;
			
			for (var i = 0; i < playerHandValues.length; i++) {
				playerHandSum += playerHandValues[i];
			};

			console.log("playerHandSum: " + playerHandSum);
			return playerHandSum;
    	}

    	function addNewPlayerCard(card) {

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

    	function addNewDealerCard(card) {
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

    		if (playerHandSum > 21) {

    			function playerBust() {
					$('#message').text("BUST! This is too much for you. :( ");
					console.log("stack: " + stack);
					bettingBox = 0;
					$('#betting-box h1').text(bettingBox);    		
    			}

    		} else if (playerHandSum === 21) {

    			if (dealerHandSum > 21) {

    			    function dealerBust() {
    			  		$('#message').text("Dealer got busted! You've won!");
    			  		var bettingBox = $('#betting-box h1').text();
    					stack += bettingBox * 2;
    					console.log("stack: " + stack);
    					bettingBox -= bettingBox;
    					console.log("bettingBox:" + bettingBox);
    					$('#betting-box h1').text(bettingBox);
    					$('#stackvalue').text(stack);  		
    			    }	

    			} else if (dealerHandSum === playerHandSum) {

    				function tie21() {
    					$('#message').text("PUSH! Wow, you both have 21. You get your money back.");
    					var bettingBox = $('#betting-box h1').text();
    					stack += bettingBox * 1; // otherwise bettingBox is not considered as number - other solution could be to use parseInt(bettingBox, 10)
    					console.log("stack: " + stack);
    					bettingBox -= bettingBox;
    					console.log("bettingBox:" + bettingBox);
    					$('#betting-box h1').text(bettingBox);
    					$('#stackvalue').text(stack);	
    				}
    			
    			} else if (dealerHandSum < playerHandSum) {

    			   function playerWins() {
			    		$('#message').text("What a play! You've won!");
			    		var bettingBox = $('#betting-box h1').text();
						stack += bettingBox * 2;
						console.log("stack: " + stack);
						bettingBox -= bettingBox;
						console.log("bettingBox:" + bettingBox);
						$('#betting-box h1').text(bettingBox);
						$('#stackvalue').text(stack);
    				}

    			}

    		} else if (playerHandSum < 21) {

    			if (dealerHandSum > 21) {

    			    function dealerBust() {
    			  		$('#message').text("Dealer got busted! You've won!");
    			  		var bettingBox = $('#betting-box h1').text();
    					stack += bettingBox * 2;
    					console.log("stack: " + stack);
    					bettingBox -= bettingBox;
    					console.log("bettingBox:" + bettingBox);
    					$('#betting-box h1').text(bettingBox);
    					$('#stackvalue').text(stack);  		
    			    }	

    			} else if (dealerHandSum === playerHandSum) {

			    	function tie() {
				    	$('#message').text("PUSH! Exactly the same! You get your money back.");
				    	var bettingBox = $('#betting-box h1').text();
				    	stack += bettingBox * 1; // otherwise bettingBox is not considered as number - other solution could be to use parseInt(bettingBox, 10)
				    	console.log("stack: " + stack);
				    	bettingBox -= bettingBox;
				    	console.log("bettingBox:" + bettingBox);
				    	$('#betting-box h1').text(bettingBox);
				    	$('#stackvalue').text(stack);
			    	}
    			
    			} else if (dealerHandSum < playerHandSum) {

    			   function playerWins() {
			    		$('#message').text("What a play! You've won!");
			    		var bettingBox = $('#betting-box h1').text();
						stack += bettingBox * 2;
						console.log("stack: " + stack);
						bettingBox -= bettingBox;
						console.log("bettingBox:" + bettingBox);
						$('#betting-box h1').text(bettingBox);
						$('#stackvalue').text(stack);
    				}

    			} else if (dealerHandSum > playerHandSum) {
    				
    				function dealerWins() {
    					$('#message').text("Oh, this is not enough. You've lost this round. :( ");
    					console.log("stack: " + stack);
    					bettingBox = 0;
    					$('#betting-box h1').text(bettingBox);
    					console.log("bettingBox: " + bettingBox);
    				}
    			}
    		}
    	}


    	function playerBust() {
			$('#message').text("BUST! This is too much for you. :( ");
			console.log("stack: " + stack);
			bettingBox = 0;
			$('#betting-box h1').text(bettingBox);    		
    	}

    	function playerWins() {
    		$('#message').text("What a play! You've won!");
    		var bettingBox = $('#betting-box h1').text();
			stack += bettingBox * 2;
			console.log("stack: " + stack);
			bettingBox -= bettingBox;
			console.log("bettingBox:" + bettingBox);
			$('#betting-box h1').text(bettingBox);
			$('#stackvalue').text(stack);
    	}

    	function dealerBust() {
  			$('#message').text("Dealer got busted! You've won!");
  			var bettingBox = $('#betting-box h1').text();
			stack += bettingBox * 2;
			console.log("stack: " + stack);
			bettingBox -= bettingBox;
			console.log("bettingBox:" + bettingBox);
			$('#betting-box h1').text(bettingBox);
			$('#stackvalue').text(stack);  		
    	}

    	function dealerWins() {
			$('#message').text("Oh, this is not enough. You've lost this round. :( ");
			console.log("stack: " + stack);
			bettingBox = 0;
			$('#betting-box h1').text(bettingBox);
			console.log("bettingBox: " + bettingBox);
    	}

    	function dealerBlackjack() { // only dealer has Blackjack
    		$('#message').text("Ouch! Blackjack rules... :( ");
    		console.log("stack: " + stack);
			bettingBox = 0;
			$('#betting-box h1').text(bettingBox);
			console.log("bettingBox: " + bettingBox);
    	}

    	function tie() {
	    	$('#message').text("PUSH! Exactly the same! You get your money back.");
	    	var bettingBox = $('#betting-box h1').text();
	    	stack += bettingBox * 1; // otherwise bettingBox is not considered as number - other solution could be to use parseInt(bettingBox, 10)
	    	console.log("stack: " + stack);
	    	bettingBox -= bettingBox;
	    	console.log("bettingBox:" + bettingBox);
	    	$('#betting-box h1').text(bettingBox);
	    	$('#stackvalue').text(stack);
    	}

    	function tie21() {
		    $('#message').text("PUSH! Wow, you both have 21. You get your money back.");
		    var bettingBox = $('#betting-box h1').text();
		    stack += bettingBox * 1; // otherwise bettingBox is not considered as number - other solution could be to use parseInt(bettingBox, 10)
		    console.log("stack: " + stack);
		    bettingBox -= bettingBox;
		    console.log("bettingBox:" + bettingBox);
		    $('#betting-box h1').text(bettingBox);
		    $('#stackvalue').text(stack);	
		}

		setTimeout(function() {
			$('#playercard1 img').attr({src:playerCard1.image, height:'130px', width: '90px'}); 
		}, 800);				
						
		setTimeout(function() {
			$('#dealercard1 img').attr({src:dealerCard1.image, height:'130px', width: '90px'});
		}, 1600);

		setTimeout(function() {
			$('#playercard2 img').attr({src:playerCard2.image, height:'130px', width: '90px'});
		}, 2400);
		
			
		setTimeout(function() {

			if(playerHandSum === 21) { // player has Blackjack
				$('#dealercard2 img').attr({src:cardDeck[dealerCard2].image, height:'130px', width: '90px'});
								
				if(dealerHandSum === 21) { // dealer has Blackjack too
					$('#message').text("Omg! You both have Blackjack! You get your money back.");
					var bettingBox = $('#betting-box h1').text();
					stack += parseInt(bettingBox, 10);
					console.log(stack)
					bettingBox -= bettingBox;
					console.log("bettingBox:" + bettingBox);
					$('#betting-box h1').text(bettingBox);
					$('#stackvalue').text(stack);					
				} else { // dealer has no Blackjack
					$('#message').text("Wow, you have Blackjack! Congratulations!");
					var bettingBox = $('#betting-box h1').text();
					stack += bettingBox * 1.5;
					bettingBox -= bettingBox;
					console.log("bettingBox:" + bettingBox);
					$('#betting-box h1').text(bettingBox);
					$('#stackvalue').text(stack);
				};

			} else { // player has no Blackjack, game continues
				var bettingBox = $('#betting-box h1').text(); // defined again to make it available in this function
				$('#dealercard2 img').attr({src:dealerCard2.holeCard, height:'130px', width: '90px'});
				$('#hitbtn').addClass('active')
								.removeAttr('disabled');
				$('#standbtn').addClass('active')
								.removeAttr('disabled');
				
				if (bettingBox <= stack) { // #doublebtn can only be active if there is enough stack - now making it active
					$('#doublebtn').addClass('active')
						.removeAttr('disabled');
				};

				$('#surrenderbtn').addClass('active') // surrender is also possible at this stage
								.removeAttr('disabled');							
			};

				// DOUBLE SCENARIO

				$('#doublebtn').click(function() { // after clicking on #doublebtn, player is not allowed to press any buttons
					$('#hitbtn').removeClass('active')
									.attr('disabled', true);
					$('#standbtn').removeClass('active')
									.attr('disabled', true);
					$('#doublebtn').removeClass('active')
									.attr('disabled', true);
					$('#surrenderbtn').removeClass('active')
									.attr('disabled', true);

					var doubleBet = bettingBox * 2; // define doubleBet to make calculation more straightforward
					
					stack -= bettingBox;
					bettingBox = doubleBet;

					$('#betting-box h1').text(bettingBox);
					$('#stackvalue').text(stack);

					var playerCard3Index = 8; // random select player's third card after clicking on #doublebtn
					var playerCard3 = cardDeck[playerCard3Index]; // define playerCard3 which is the actual third card
					addNewPlayerCard(playerCard3);
					playerAceCheck();

									

					setTimeout(function() { // show playerCard3 with some delay
						$('#playercard3 img').attr({src:playerCard3.image, height:'130px', width: '90px'}); 
						}, 800);

					

					if (playerHandSum > 21) { // player busted, this round finished
							setTimeout(function() {
							playerBust();
							},1200);	

					} else { // player is still in the game with the third card - dealer can show their hand

						setTimeout(function() { // show dealerCard2 (the hole card) with some delay
						$('#dealercard2 img').attr({src:dealerCard2.image, height:'130px', width: '90px'}); 
						}, 1600);

						setTimeout(function() {
							if (dealerHandSum === 21) { // dealer has Blackjack with their first two cards -- note: no one can't bust with two cards
								dealerBlackjack();
							
							} else if (dealerHandSum >= 17 && dealerHandSum <= 20) { // dealer is between 17 and 20 meaning they stand							
								
								if (playerHandSum > dealerHandSum) { // player has higher value so wins the round
									playerWins();
								
								} else if (playerHandSum === dealerHandSum) { // player and dealer have equal value
									tie();
								
								} else { // dealer has higher value
									dealerWins();
								};
							
							} else { // dealerHandSum is below 17 meaning dealer has to take another card
								
								var dealerCard3Index = 12;
								var dealerCard3 = cardDeck[dealerCard3Index];
								addNewDealerCard(dealerCard3);
								dealerAceCheck();

								$('#dealercard3 img').attr({src:dealerCard3.image, height:'130px', width: '90px'});
						
								if (dealerHandSum > 21) { // dealer busted
									dealerBust();

								} else if (dealerHandSum === 21) { // dealer has 21 after dealing their third card

									if (playerHandSum === dealerHandSum) {
										tie21();	

									} else {
										dealerWins();
									}

								} else if (dealerHandSum >= 17 && dealerHandSum <= 20) { // dealer is between 17 and 20 meaning they stand
									
									if (playerHandSum > dealerHandSum) { // player has higher value so wins the round
										playerWins();
									
									} else if (playerHandSum === dealerHandSum) { // player and dealer have equal value)
										tie();
									
									} else { // dealer has higher value
										dealerWins();
									}								
								
								} else { // dealerHandSum is below 17 meaning dealer has to take another card
									var dealerCard4Index = 7;
									var dealerCard4 = cardDeck[dealerCard4Index];
									addNewDealerCard(dealerCard4);
									dealerAceCheck();
										$('#dealercard4 img').attr({src:dealerCard4.image, height:'130px', width: '90px'});

									if (dealerHandSum > 21) { // dealer busted
										dealerBust();

									} else if (dealerHandSum === 21) { // dealer has 21 after dealing their fourth card

										if (playerHandSum === dealerHandSum) {
											tie21();

										} else {
											dealerWins();
										}

									} else if (dealerHandSum >= 17 && dealerHandSum <= 20) { // dealer is between 17 and 20 meaning they stand

										if (playerHandSum > dealerHandSum) { // player has higher value so wins the round
											playerWins();

										} else if (playerHandSum === dealerHandSum) { // player and dealer have equal value)
											tie();

										} else { // dealer has higher value
											dealerWins();
										}

									} else { // dealerHandSum is below 17 meaning dealer has to take another card
										var dealerCard5Index = 42;
										var dealerCard5 = cardDeck[dealerCard5Index];
										addNewDealerCard(dealerCard5);
										dealerAceCheck();										
										$('#dealercard5 img').attr({src:dealerCard5.image, height:'130px', width: '90px'});
									}
								}
							};							
						}, 2400);						
					};
				});

				// END OF DOUBLE SCENARIO

		}, 3200);
	}

		
	
		

	welcomeMsg();

	/* NEXT
	
	go on with making scenarios simple; playerBust and playerWins is ok, -- > dealerWins, dealerBust, tie still to go;
	bettingbox might have to be redefined
	a new card functiont meg lehethe úgy csinálni, hogy a paraméter az adott kártya száma és a játékos(?) legyen
	newRound - clear thumbnails, check stack != 0 (put this in the beginning of scenarios)
	finish last dealercard scenario with action
	dealerCard3 in double scenario - show dealerCard2 only at the end
	close this scenario


	new game btn
	new round starts only if stack>0
	exit button?

	*/
}



$(document).ready(main);