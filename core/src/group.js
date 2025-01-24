export class CardGroup {
    constructor(name) {
        this.cards = {};
        this.numberOfCards = 0;
        this.name = name;
    }
    addCard(cardId, count) {
        this.cards[cardId] = count;
        this.numberOfCards += count;
    }
    removeCard(cardId, count) {
        if (this.cards[cardId]) {
            this.cards[cardId] -= count;
            this.numberOfCards -= count;
            if (this.cards[cardId] <= 0) {
                delete this.cards[cardId];
            }
        }
    }
    listCards() {
        return Object.entries(this.cards).reduce((acc, [cardId, count]) => {
            for (let i = 0; i < count; i++) {
                acc.push(parseInt(cardId));
            }
            return acc;
        }, []);
    }
    loadCardsFromMap(cards) {
        this.cards = cards;
        this.numberOfCards = Object.values(cards).reduce((acc, count) => acc + count, 0);
    }
    loadCardsFromList(cards) {
        this.cards = cards.reduce((acc, cardId) => {
            if (acc[cardId] === undefined) {
                acc[cardId] = 1;
            }
            else {
                acc[cardId] += 1;
            }
            return acc;
        }, {});
        this.numberOfCards = cards.length;
    }
    toStaticCardGroup() {
        return {
            name: this.name,
            cards: { ...this.cards },
        };
    }
}
