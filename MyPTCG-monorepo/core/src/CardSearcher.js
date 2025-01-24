"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardSearcher = void 0;
exports.getCardImgUrl = getCardImgUrl;
const utils_1 = require("./utils");
class CardSearcher {
    cardList;
    cardMap;
    cardDetailList;
    cardDetailMap;
    constructor(cardList, cardMap, cardDetailList, cardDetailMap) {
        this.cardList = cardList;
        this.cardMap = cardMap ? cardMap : (0, utils_1.buildCardMapFromList)(cardList);
        this.cardDetailList = cardDetailList;
        this.cardDetailMap = cardDetailMap;
    }
    getCardByKeyword(keyword) {
        return this.cardList.find((card) => card.cardName.includes(keyword));
    }
    getCardById(cardId) {
        return this.cardMap[cardId.toString()];
    }
    getCardImgUrl(cardId) {
        return getCardImgUrl(cardId);
    }
}
exports.CardSearcher = CardSearcher;
function getCardImgUrl(cardId) {
    //6 = >https://asia.pokemon-card.com/tw/card-img/tw00000006.png
    return `https://asia.pokemon-card.com/tw/card-img/tw${String(cardId).padStart(8, "0")}.png`;
}
