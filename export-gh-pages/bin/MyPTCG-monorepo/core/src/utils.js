"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCardMapFromList = void 0;
const buildCardMapFromList = (cardList) => {
    return cardList.reduce((acc, card) => {
        acc[card.cardId.toString()] = card;
        return acc;
    }, {});
};
exports.buildCardMapFromList = buildCardMapFromList;
