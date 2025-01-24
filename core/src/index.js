"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CardSearcher_1 = require("./CardSearcher");
const cardList_json_1 = __importDefault(require("../../data/cardList.json"));
// import CardMap from "../../data/cardMap.json";
// import CardDetailList from "../../data/cardDetailList.json";
// import CardDetailMap from "../../data/cardDetailMap.json";
// import { Card } from "./types/card";
var CardSearcherInstance = new CardSearcher_1.CardSearcher(cardList_json_1.default
//   CardMap,
//   CardDetailList as Card.Detail[],
//   CardDetailMap as { [id: string]: Card.Detail }
);
