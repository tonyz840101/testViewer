import { CardSearcher as CSInner } from "core/CardSearcher";
import CardList from "../../data/cardList.json";

export class CardSearcher extends CSInner {
  constructor() {
    super(CardList);
  }
}
