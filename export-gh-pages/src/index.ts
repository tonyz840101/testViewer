import { CardSearcher as CSInner } from "core/CardSearcher";
import { CardGroup } from "core/group";
import CardList from "../../data/cardList.json";

export class CardSearcher extends CSInner {
  constructor() {
    super(CardList);
  }
}

(<any>globalThis).CardSearcher = new CardSearcher();
(<any>globalThis).CardGroup = CardGroup;
