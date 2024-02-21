import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import './ClassSelectMenu.css';
import { selectClass, selectedClass } from "./ClassSelectMenuSlice";

import { loadRuneData } from '../runeexplorer/RuneExplorerSlice';

export enum PlayerClass {
  Warrior = 'Warrior',
  Mage = "Mage",
  Priest = "Priest",
  Shaman = "Shaman",
  Warlock = "Warlock",
  Paladin = "Paladin",
  Rogue = "Rogue",
  Hunter = "Hunter",
}

export const ClassSelectMenuRedux = () => {
  const dispatch = useAppDispatch()

  const selectedOption = useAppSelector(selectedClass);

  useEffect(() => {
    // Dispatch the action from the RuneExplorer slice when the selected option changes
    dispatch(loadRuneData(selectedOption));
  }, [selectedOption, dispatch]);

  const imgPrefix = "../../img/classicon/"

  const renderClassButtons = () => {
    return Object.values(PlayerClass).map((option) => (

      <button
        key={option}
        className={`image-button ${selectedOption === option ? 'selected' : ''}`}
        onClick={() => dispatch(selectClass(option))}
      >

        <img
          src={imgPrefix.concat(selectedOption?.concat(".png"))}
          alt="Selected Option"
          style={{ maxWidth: '64px', maxHeight: '64px' }}
        />

      </button>

    ));
  };

  return (
    <div>
      <h2>Select a class:</h2>
      {renderClassButtons()}
    </div>
  );
}

export default ClassSelectMenuRedux