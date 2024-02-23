import { Rune } from "../types/Rune";

import runeData from "../data/runes.json";
import { PlayerClass } from "../types/PlayerClass";

const fetchRunes = (): Rune[] => {
  return runeData.map((item) => {
    return {
      description: item.description,
      damageFormulas: item.damageFormulas,
      icon: item.icon,
      playerClass: item.playerClass as PlayerClass,
      slot: item.slot,
      name: item.name
    };
  });
};

export class RuneDB {
  private runes: Rune[];

  constructor() {
    this.runes = fetchRunes();
  }

  getRunes() {
    return this.runes
  }
}