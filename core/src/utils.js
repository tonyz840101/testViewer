export const buildCardMapFromList = (cardList) => {
    return cardList.reduce((acc, card) => {
        acc[card.cardId.toString()] = card;
        return acc;
    }, {});
};
