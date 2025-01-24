"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CardSearcher_1 = require("core/CardSearcher");
const cardList_json_1 = __importDefault(require("../../data/cardList.json"));
var CardSearcherInstance = new CardSearcher_1.CardSearcher(cardList_json_1.default);
