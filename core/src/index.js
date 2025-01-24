import { CardSearcher } from "./CardSearcher";
import CardList from "../../data/cardList.json";
// import CardMap from "../../data/cardMap.json";
// import CardDetailList from "../../data/cardDetailList.json";
// import CardDetailMap from "../../data/cardDetailMap.json";
// import { Card } from "./types/card";
var CardSearcherInstance = new CardSearcher(CardList
//   CardMap,
//   CardDetailList as Card.Detail[],
//   CardDetailMap as { [id: string]: Card.Detail }
);
