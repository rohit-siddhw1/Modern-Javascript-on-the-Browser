class Card {
    constructor(suite, rank) {
        this.suite = suite;
        this.rank = rank;
    }

    get log() {
        return  `You picked : ${this.suite}${this.rank}`;
    }
}

function shuffle(cards) {
    cards.sort(() => Math.random() - 0.5);
    return cards;
}

function getCardStack() {
    const suites = "♥️|♦️|♠️|♣️".split("|");
    const ranks = "A|1|2|3|4|5|6|7|8|9|10|K|Q|J".split("|");
    const cards = [];
    
    for (let suite of suites) {
    	for (let rank of ranks) {
            const card = new Card(suite, rank);
            cards.push(card);
        }
    }
    
    return shuffle([...cards]);
}

function *getCardDrawer() {
    const cardStack = getCardStack();
    
    for (let card of cardStack) {
        yield card;
    }
}

const log = console.log;


const dealer = getCardDrawer();
log(dealer.next().value.log);
log(dealer.next().value.log);
log(dealer.next().value.log);
log(dealer.next().value.log);
log(dealer.next().value.log);


