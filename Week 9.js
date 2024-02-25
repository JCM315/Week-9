/* This code is used to implement the game of Blackjack, where the objective is to get a hand value as close to 21 without going over, and to beat the dealer's hand.
*/
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    /* The code uses a series of if statements to determine the value of each rank, with special cases for Aces and Face cards. 
    This is a common approach to card value calculation in blackjack, and is used to ensure that Aces count as 1 or 11, 
    depending on whether they can be used to form a blackjack (a hand of an Ace and a 10-value card).*/
    getValue() {
        if (this.rank === 'A') {
            return 14;
        } else if (this.rank === 'K') {
            return 13;
        } else if (this.rank === 'Q') {
            return 12;
        } else if (this.rank === 'J') {
            return 11;
        } else {
            return parseInt(this.rank);
        }
    }
}

/*The selected code is a part of the Deck class in the Blackjack game. It defines the constructor(), which initializes an array called cards and creates four strings called suits and
 ranks that represent the four suits in a deck of cards (hearts, diamonds, clubs, and spades) and the ten ranks (2, 3, 4, 5, 6, 7, 8, 9, 10, and J, Q, K, and A). 
 The for loop then iterates over each suit and rank, creating a new Card object with each combination of suit and rank.
 */
class Deck {
    constructor() {
        this.cards = [];
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }

    /*the code creates two new Player objects named player1 and player2. The Player constructor takes a name argument and initializes the player's hand and score properties to empty arrays and 0, respectively.
 */
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    /* The selected code is a part of the Player class in the Blackjack game. It defines the playCard() method, which is responsible for removing a card from the player's hand and returning it.*/
    playCard() {
        return this.hand.pop();
    }
}

let deck = new Deck();
deck.shuffle();
let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

/* this code is used to implement the game of Blackjack, where the objective is to get a hand value as close to 21 without going over, and to beat the dealer's hand.
*/
for (let i = 0; i < 26; i++) {
    player1.hand.push(deck.deal());
    player2.hand.push(deck.deal());
}

for (let i = 0; i < 26; i++) {
    let card1 = player1.playCard();
    let card2 = player2.playCard();
    if (card1.getValue() > card2.getValue()) {
        player1.score++;
    } else if (card1.getValue() < card2.getValue()) {
        player2.score++;
    }
}

/* In this case, the code is used to print out the score of each player at the end of the game.*/

console.log(`Player 1 score: ${player1.score}`);
console.log(`Player 2 score: ${player2.score}`);
if (player1.score > player2.score) {
    console.log("Player 1 is the winner!");
} else if (player1.score < player2.score) {
    console.log("Player 2 is the winner!");
} else {
    console.log("It's a tie!");
}
