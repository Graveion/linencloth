import { Rune } from "../types/Rune";

import runeData from "../data/runes.json";

// Example: Display people based on age
function fetchRunes(): Rune[] {
  return runeData.map ( data => new Rune(data.description, data.damageFormulas, data.icon, data.playerClass, data.slot) )
};

export let runeDB: Rune[] = fetchRunes()