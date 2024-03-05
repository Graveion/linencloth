import { useAppSelector } from "../../app/hooks"

import AttackPowerPicker from '../../features/attackpowerpicker/AttackPowerPicker';
import SpellPowerPicker from '../../features/spellpowerpicker/SpellPowerPicker';
import HealerPowerPicker from '../../features/healerpowerpicker/HealerPowerPicker';

import { selectedClass } from '../../features/classselectmenu/ClassSelectMenuSlice';
import { PlayerClass } from "../../types/PlayerClass";

import './PowerPickers.css';

export const PowerPickers = () => {

  const playerClass = useAppSelector(selectedClass);
  const types = classMapping[playerClass];

  return (
    <div className="pickers">
      {types.includes(CharacterType.Physical) && (
        <div>
          <AttackPowerPicker />
        </div>
      )}
      {types.includes(CharacterType.Caster) && (
        <div>
          <SpellPowerPicker />
        </div>
      )}
      {types.includes(CharacterType.Healer) && (
        <div>
          <HealerPowerPicker />
        </div>
      )}
    </div>
  );
};


enum CharacterType {
  Physical = "Physical",
  Caster = "Caster",
  Healer = "Healer"
}

const classMapping: Record<PlayerClass, CharacterType[]> = {
  warrior: [CharacterType.Physical],
  mage: [CharacterType.Caster],
  warlock: [CharacterType.Caster],
  paladin: [CharacterType.Physical, CharacterType.Caster],
  shaman: [CharacterType.Physical, CharacterType.Caster, CharacterType.Healer],
  hunter: [CharacterType.Physical],
  druid: [CharacterType.Physical, CharacterType.Caster, CharacterType.Healer],
  priest: [CharacterType.Caster, CharacterType.Healer],
  rogue: [CharacterType.Physical],
};

export default PowerPickers;