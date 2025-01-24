import { buildCardMapFromList } from "./utils";
export class CardSearcher {
    constructor(cardList, cardMap, cardDetailList, cardDetailMap) {
        this.cardList = cardList;
        this.cardMap = cardMap ? cardMap : buildCardMapFromList(cardList);
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
export function getCardImgUrl(cardId) {
    //6 = >https://asia.pokemon-card.com/tw/card-img/tw00000006.png
    return `https://asia.pokemon-card.com/tw/card-img/tw${String(cardId).padStart(8, "0")}.png`;
}
