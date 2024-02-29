import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { PlayerClass } from '../../types/PlayerClass'
import { images } from '../../img/images'

import { selectClass, selectedClass } from "./ClassSelectMenuSlice";
import { loadRuneData } from '../runeexplorer/RuneExplorerSlice';

import './ClassSelectMenu.css';
import LevelSelector from "../levelselector/LevelSelector";
import PowerPickers from "../../components/PowerPickers/PowerPicker";

import { setAttackPower } from '../../features/attackpowerpicker/AttackPowerPickerSlice'
import { setHealerPower } from "../healerpowerpicker/HealerPowerPickerSlice";
import { setSpellPower } from "../spellpowerpicker/SpellPowerPickerSlice";
import Tooltip from "../../components/Tooltip";

export const ClassSelectMenuRedux = () => {
  const dispatch = useAppDispatch()

  const selectedOption = useAppSelector(selectedClass);

  useEffect(() => {
    // Dispatch the action from the RuneExplorer slice when the selected option changes
    dispatch(loadRuneData(selectedOption));
    dispatch(setAttackPower(500))
    dispatch(setSpellPower(200))
    dispatch(setHealerPower(300))
  }, [selectedOption, dispatch]);

  const renderClassButtons = () => {    
    return Object.values(PlayerClass).map((option) => (
     <Tooltip text={option}>
      <button
        className={option === selectedOption ? 'button-selected' : 'class-button'}
        key={option}
        onClick={() => dispatch(selectClass(option))}
      >

        <img
          className="image"
          src={images[`./classicon/${option}.png`]}
          alt="Class Icon"
        />

      </button>

      </Tooltip>

    ));
  };

  return (
    <div>
      <div className="menu-header">
        <h2>{capitalise(selectedOption)}</h2>
        <LevelSelector />
      </div>

      <PowerPickers />
      
      { renderClassButtons() }
    </div>
  );
}

function capitalise(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default ClassSelectMenuRedux