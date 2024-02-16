import { readFileSync } from "fs";
import { Rune } from "../types/Rune";

// Read the JSON file
const rawData = readFileSync('runes.json', { encoding: "utf8"});
const runeData = JSON.parse(rawData);

// Example: Display people based on age
const fetchRunes = () => {
  return runeData as Rune[]
};

export let runeDB: Rune[] = fetchRunes()