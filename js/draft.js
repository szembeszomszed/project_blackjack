/*

tehát a dolog valahogy így nézne ki:

dealerCard2Index = makeUniqueRandom();
dealerCard2 = cardDeck[dealerCard2Index];

var dealerHandTotal = 0;
for (var i = 0; i < dealerHand.length; i++) {
	dealerHandTotal += dealerHand[i];
}

if (dealerHandTotal <= 10) {
	dealerHand.push(dealerCard.value);
} else {
	dealerHand.push(dealerCard.altValue);
};

*/




$(document).ready(function() {
	var myArray = [2];
	myArray.sort(function(a, b) {return a-b});
	console.log("sorted array: " + myArray);

	var sum = 0;
	for (var i = 0; i < myArray.length; i++) {
		sum += myArray[i];
	}

	console.log("sum of original array: " + sum);
	
	for (var i = 0; i < myArray.length; i++) {
    	if(myArray[i] === 11 && sum > 21){
        	myArray[i] = 1;
        }
    }
    console.log("original array after change: " + myArray);


    if (sum > 10) {
    	myArray.push(1);
   	} else {
   		myArray.push(11);
   	};
	
	console.log("new element in array: " + myArray);

	myArray.sort(function(a, b) {return a-b});
	console.log("sorted array with new element: " + myArray);
	
	var sum = 0;
	for (var i = 0; i < myArray.length; i++) {
		sum += myArray[i];
	}
	console.log("sum: " + sum);

	 if (sum > 10) {
    	myArray.push(1);
   	} else {
   		myArray.push(11);
   	};
	
	console.log("new element in array: " + myArray);

	myArray.sort(function(a, b) {return a-b});
	console.log("sorted array with new element: " + myArray);
	
	var sum = 0;
	for (var i = 0; i < myArray.length; i++) {
		sum += myArray[i];
	}
	console.log("sum: " + sum);

	myArray.push(10);

	var sum = 0;
	for (var i = 0; i < myArray.length; i++) {
		sum += myArray[i];
	}
	

	for (var i = 0; i < myArray.length; i++) {
    	if(myArray[i] === 11 && sum > 21){
        	myArray[i] = 1;
        }
    }

    console.log("array when 10 arrives: " + myArray);

    console.log("very new array:" + myArray);


    function total () {
    	var sum = 0;
		for (var i = 0; i < myArray.length; i++) {
		sum += myArray[i];
		}
		console.log("functionsum: " + sum);
    }

    total();

    function teszt(darab) {
    	darab+"al()";
    }

    teszt("tot");
    
   


	/* WORKING BUT HORRIBLY LONG

	sum = 0;
	for (var i = 0; i < myArray.length; i++) {
	sum += myArray[i];

	}
	console.log("sum: " + sum);
	
	if (sum > 21) {
		console.log("bust");
		var index = myArray.indexOf(11)
			if (index != -1) {
				myArray[index] = 1;
			}
		myArray.sort(function(a, b) {return a-b});
		console.log("new array: " + myArray);
	}

	sum = 0;
	for (var i = 0; i < myArray.length; i++) {
	sum += myArray[i];

	}
	console.log("sum: " + sum);

	if (sum > 21) {
		console.log("bust");
		var index = myArray.indexOf(11)
			if (index != -1) {
				myArray[index] = 1;
			}
		myArray.sort(function(a, b) {return a-b});
		console.log("even newer array: " + myArray);
	}

	sum = 0;
	for (var i = 0; i < myArray.length; i++) {
	sum += myArray[i];

	}
	console.log("sum: " + sum);

	if (sum > 21) {
		console.log("bust");
		var index = myArray.indexOf(11)
			if (index != -1) {
				myArray[index] = 1;
			}
		myArray.sort(function(a, b) {return a-b});
		console.log("even newer-newer array: " + myArray);
	}

	*/
	


	/* INFINITE LOOP!
	var index = myArray.indexOf(11);

	
	while (sum > 21 && index != -1) {
		myArray[index] = 1;
		sum = 0;
			
		for (var i = 0; i < myArray.length; i++) {
				sum += myArray[i];
		};
		
		console.log("new array: " + myArray);
		
	};
	*/

});





		/*function playerAceCheck (card) {
			if (card.rank === 'Ace') {
				playerAces.push(card);
			}
			if (playerAces.length === 1 && playerHandTotal > 21) { // value over 21 with 1 Ace
					playerHandTotal -= 10;	
			} else if (playerAces.length === 2 && playerHandTotal > 21 && playerHandTotal <= 31) { // value between 22 and 31 with 2 Aces
					playerHandTotal -= 10;
			} else if (playerAces.length === 2 && playerHandTotal > 31) { // value over 31 with 2 Aces
					playerHandTotal -= 10;
			} else if (playerAces.length === 3) { // 3 Aces (meaning value === 33)
					playerHandTotal -= 10;
			} else if (playerAces.length === 4) { // 4 Aces (meaning value === 44)
					playerHandTotal -= 10;
			};
			console.log("playerHandTotal: " + playerHandTotal);
			console.log("playerAces.length: " + playerAces.length);
		}
		*/


			// kell egy playerHandTotals array
			// minden húzás után bele kell dobni az aktuális card.value-t
			// létrejön egy array számokkal
			// ezeket kell a lenti kód segítségével totálozni
			// meg kell nézni minden húzás után, hogy mennyi a totál
			// és ez alapján kicserélni a 11-eseket 1-esekre
			/*
			if (dealerHandTotal + card.value > 21) {
				var lastAceValue = dealerAces[dealerAces.length-1].value;
				var lastAceAltValue = dealerAces[dealerAces.length-1].altValue;
				card.value = lastAceAltValue;
				dealerHandTotal += card.value;
				if(dealerHandTotal > 21) {
					for (var j = 0; j < dealerAces.length; j++) {
						if (dealerAces[j].value) {}
					}
				}
			}
			*/		

			/*if (card.rank === 'Ace') {
				dealerAces.push(card);
			}
			if (dealerAces.length === 1 && dealerHandTotal > 21) { // value over 21 with 1 Ace
				dealerHandTotal -= 10;	
			} else if (dealerAces.length === 2 && dealerHandTotal > 21 && dealerHandTotal <= 31) { // value between 22 and 31 with 2 Aces
				dealerHandTotal -= 10;
			} else if (dealerAces.length === 2 && dealerHandTotal > 31) { // value over 31 with 2 Aces
				dealerHandTotal -= 10;
			} else if (dealerAces.length === 3) { // 3 Aces (meaning value === 33)
				dealerHandTotal -= 10;
			} else if (dealerAces.length === 4) { // 4 Aces (meaning value === 44)
				dealerHandTotal -= 10;
			};*/

								/*
					for (var i = 0; i < playerHand.length; i++) { // loop through playerHand[], find Aces and put them into playerAces[]; 
						if (playerHand[i].rank === 'Ace' ) {
							playerAces.push(playerHand[i]);
							console.log(playerAces.length);
						}
					}
					

					if (playerAces.length === 1 && playerHandTotal > 21) { // value over 21 with 1 Ace
						playerHandTotal -= 10;	
					} else if (playerAces.length === 2 && playerHandTotal > 21 && playerHandTotal <= 31) { // value between 22 and 31 with 2 Aces
						playerHandTotal -= 10;
					} else if (playerAces.length === 2 && playerHandTotal > 31) { // value over 31 with 2 Aces
						playerHandTotal -= 20;
					} else if (playerAces.length === 3) { // 3 Aces (meaning value === 33)
						playerHandTotal -= 20;
					} else if (playerAces.length === 4) { // 4 Aces (meaning value === 44)
						playerHandTotal -= 30;
					};

					console.log(playerHandTotal);

					console.log(playerAces);

					*/


											/*
						for (var j = 0; j < dealerHand.length; j++) { // loop through dealerHand[], find Aces and put them into dealerAces[]; 
							if (dealerHand[j].rank === 'Ace') {
								dealerAces.push(dealerHand[j]);
								console.log(dealerAces.length);
							};
						};

						
						if (dealerAces.length === 1 && dealerHandTotal > 21) { // value over 21 with 1 Ace
							dealerHandTotal -= 10;	
						} else if (dealerAces.length === 2 && dealerHandTotal > 21 && dealerHandTotal <= 31) { // value between 22 and 31 with 2 Aces
							dealerHandTotal -= 10;
						} else if (dealerAces.length === 2 && dealerHandTotal > 31) { // value over 31 with 2 Aces
							dealerHandTotal -= 20;
						} else if (dealerAces.length === 3) { // 3 Aces (meaning value === 33)
							dealerHandTotal -= 20;
						} else if (dealerAces.length === 4) { // 4 Aces (meaning value === 44)
							dealerHandTotal -= 30;
						};

						console.log(dealerHandTotal);
						console.log(dealerAces.length);
						*/

/*

		for (var i = 0; i < playerHand.length; i++) { // loop through playerHand[], find Aces and put them into playerAces[]; 
			if (playerHand[i].rank === 'Ace' ) {
				playerAces.push(playerHand[i]);
				console.log(playerAces.length);
			}
		}

		if (playerAces.length === 1 && playerHandSum > 21) { // value over 21 with 1 Ace
			playerHandSum -= 10;	
		} else if (playerAces.length === 2 && playerHandSum > 21 && playerHandSum <= 31) { // value between 22 and 31 with 2 Aces
			playerHandSum -= 10;
		} else if (playerAces.length === 2 && playerHandSum > 31) { // value over 31 with 2 Aces
			playerHandSum -= 20;
		} else if (playerAces.length === 3) { // 3 Aces (meaning value === 33)
			playerHandSum -= 20;
		} else if (playerAces.length === 4) { // 4 Aces (meaning value === 44)
			playerHandSum -= 30;
		};

		console.log(playerHandSum);
		console.log(playerAces);

		for (var j = 0; j < dealerHand.length; j++) { // loop through dealerHand[], find Aces and put them into dealerAces[]; 
			if (dealerHand[j].rank === 'Ace') {
				dealerAces.push(dealerHand[j]);
				console.log(dealerAces.length);
			};
		};

		if (dealerAces.length === 1 && dealerHandSum > 21) { // value over 21 with 1 Ace
			dealerHandSum -= 10;	
		} else if (dealerAces.length === 2 && dealerHandSum > 21 && dealerHandSum <= 31) { // value between 22 and 31 with 2 Aces
			dealerHandSum -= 10;
		} else if (dealerAces.length === 2 && dealerHandSum > 31) { // value over 31 with 2 Aces
			dealerHandSum -= 20;
		} else if (dealerAces.length === 3) { // 3 Aces (meaning value === 33)
			dealerHandSum -= 20;
		} else if (dealerAces.length === 4) { // 4 Aces (meaning value === 44)
			dealerHandSum -= 30;
		};

		console.log(dealerHandSum);
		console.log(dealerAces.length);
		*/


		/*azt kéne feltételül szabni, hogy ha jön új lap, amivel túllépjük a 21-et, és még van ász, amiből nem vontunk le 10-et, akkor vonjuk le. ha nincs, akkor ne
	vagy
	minden húzásnál bekerül a kártya az ace array-be, ha ász. és ezért minden húzás után meg lehetne nézni, hogy mennyi az összértéke a lapoknak.
	és akkor egy for looppal végigmenni az ászokon, hogy ahol 11 a value, ott legyen value = altValue, attól függően, hogy mennyi az összérték
	ezt lehetne úgy, hogy mondjuk minden egyes bust esetén az ace array utolsó pozíciójában lévő ész értékét módosítsa az altvalue-ra. 
	aztán ha még mindig 21 fölött van a pont, akkor végigmehetne az ászokon (vagy talán elég lenne kiválasztani az elsőt, hiszen az összes többivel
	már foglalkoztunk, és akkor annak is módosítani az értékét.)

	vagy lehetne úgy, hogy ha az array hossza 1, akkor a 0. pozícióban lévőt módosítom, ha több, akkor az utolsót. és hogy ha mondjuk A A 2 K helyzet áll elő,
	akkor vissza lehet nyúlni megint az elsőhöz (tehát ha még mindig >21)

	vagy

	becavarjuk egy array-be a kihúzott kártyák value-jit, és ennek az arraynek az elemi fognak összeadódni, abból lesz a handvalue. és akkor
	a loop megnézhetné, hogy háyn 11-es van az arrayben, és a lapok összértéke alapján kicserélné sorban a 11-eseket 1-esekre, igény szerint

			var total = 0;
			$.each(arr,function() {
		    total += this;
			}); */


		/*
		function dealerAceCheck () {
			var dealerSum = 0;

			for (var i = 0; i < dealerCardValues.length; i++) {
				dealerSum += dealerCardValues[i];
			};

			if(dealerSum > 21 && dealerSum < 32) {
				var index = dealerCardValues.indexOf(11);
				if (index !== -1) {
    				dealerCardValues[index] = 1;
    			}
    		}
    	*/



// DEALER TURN

/*
							if (dealerHandSum > 16) {
								roundOutcomes();

							} else { // dealerHandSum is below 17 meaning dealer has to take another card
								
								var dealerCard3Index = makeUniqueRandom();
								var dealerCard3 = cardDeck[dealerCard3Index];
								addCardToDealerHand(dealerCard3);
								dealerAceCheck();

								$('#dealercard3 img').attr({src:dealerCard3.image, height:'130px', width: '90px'});
						
								if (dealerHandSum > 16) {
									roundOutcomes();

								} else { // dealerHandSum is below 17 meaning dealer has to take another card

									var dealerCard4Index = makeUniqueRandom();
									var dealerCard4 = cardDeck[dealerCard4Index];
									addCardToDealerHand(dealerCard4);
									dealerAceCheck();
									$('#dealercard4 img').attr({src:dealerCard4.image, height:'130px', width: '90px'});

									if (dealerHandSum > 16) { // ITT VAJON MI A BAJ?
										roundOutcomes();

									} else { // dealerHandSum is below 17 meaning dealer has to take another card

										var dealerCard5Index = makeUniqueRandom();
										var dealerCard5 = cardDeck[dealerCard5Index];
										addCardToDealerHand(dealerCard5);
										dealerAceCheck();										
										$('#dealercard5 img').attr({src:dealerCard5.image, height:'130px', width: '90px'});

										if (dealerHandSum > 16) {
											roundOutcomes();
										
										} else { // dealerHandSum is below 17 meaning dealer has to take another card

											var dealerCard6Index = makeUniqueRandom();
											var dealerCard6 = cardDeck[dealerCard6Index];
											addCardToDealerHand(dealerCard6);
											dealerAceCheck();										
											$('#dealercard6 img').attr({src:dealerCard6.image, height:'130px', width: '90px'});	

											if (dealerHandSum > 16) {
												roundOutcomes();

											} else { // dealerHandSum is below 17 meaning dealer has to take another card

												var dealerCard7Index = makeUniqueRandom();
												var dealerCard7 = cardDeck[dealerCard7Index];
												addCardToDealerHand(dealerCard7);
												dealerAceCheck();										
												$('#dealercard7 img').attr({src:dealerCard7.image, height:'130px', width: '90px'});	

												if (dealerHandSum > 16) {
													roundOutcomes();

												} else { // dealerHandSum is below 17 meaning dealer has to take another card

													var dealerCard8Index = makeUniqueRandom();
													var dealerCard8 = cardDeck[dealerCard8Index];
													addCardToDealerHand(dealerCard8);
													dealerAceCheck();										
													$('#dealercard8 img').attr({src:dealerCard8.image, height:'130px', width: '90px'});	

													if (dealerHandSum > 16) {
														roundOutcomes();
													
													} else { // dealerHandSum is below 17 meaning dealer has to take another card
													
														var dealerCard9Index = makeUniqueRandom();
														var dealerCard9 = cardDeck[dealerCard9Index];
														addCardToDealerHand(dealerCard9);
														dealerAceCheck();										
														$('#dealercard9 img').attr({src:dealerCard9.image, height:'130px', width: '90px'});	

														roundOutcomes();
													}
												}
											}										
										}
									}
								}
							};	*/					



				/*var count = 3;
				
				while (dealerHandSum <= 16) {
						
				    var dealerCardIndex = 1;
				    var dealerCard = cardDeck[dealerCardIndex];
				    addCardToDealerHand(dealerCard);
				    dealerAceCheck();
				    var selector = '#dealercard' + count + ' img';
				    ++count;
				    
				    $(selector).attr({src:dealerCard.image, height:'130px', width: '90px'});
				    
				}*/


						// by clicking on #betsubmit submit betValue to #betting-box

	/*
	$('#betsubmit').click(function(){
		$('#message').text("");
		var betValue = $('input[type="number"]').val();
		if (betValue > stack) {
			$('#message').text("Oops, you don't seem to have enough money");
		} else if (betValue <= 0) {
			$('#message').text("Your bet has to be at least 1 dollar");
			console.log('betValue: ' + betValue);				
		} else if (betValue !== "") {
			$('#betting-box h1').text(betValue);
			//var betValue = $('<h1>').text(betValue); // ERROR: this creates new h1 on every click
			//$('#betting-box').append(betValue);
			$('form').hide();
			stack -= betValue;
			$('#stackvalue').text(stack);
			console.log(stack);
			$('#message').text("");
			newRound();	// call newRound
		};		
			//$('input[type="number"]').val("");	// clear form			
	});
	*/


	