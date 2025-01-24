"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardSearcher = void 0;
class CardSearcher {
    cardList;
    cardMap;
    cardDetailList;
    cardDetailMap;
    constructor(cardList, cardMap, cardDetailList, cardDetailMap) {
        this.cardList = cardList;
        this.cardMap = cardMap;
        this.cardDetailList = cardDetailList;
        this.cardDetailMap = cardDetailMap;
    }
    getCardByName(cardName) {
        const card = this.cardDetailList[cardName];
        if (card) {
            return card;
        }
        return undefined;
    }
    getCardById(cardId) {
        const card = this.cardDetailMap[cardId.toString()];
        if (card) {
            return card;
        }
        return undefined;
    }
    getCardImgUrl(cardId) {
        //6 = >https://asia.pokemon-card.com/tw/card-img/tw00000006.png
        return `https://asia.pokemon-card.com/tw/card-img/tw${String(cardId).padStart(8, "0")}.png`;
    }
}
exports.CardSearcher = CardSearcher;
