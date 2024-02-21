import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { selectClass, selectedClass } from "./ClassSelectMenuSlice";
// import { loadRuneData } from '../runeexplorer/RuneExplorerSlice';

import './ClassSelectMenu.css';

export enum PlayerClass {
  Warrior = 'warrior',
  Mage = "mage",
  Priest = "priest",
  Shaman = "shaman",
  Warlock = "warlock",
  Paladin = "paladin",
  Rogue = "rogue",
  Hunter = "hunter",
}

export const ClassSelectMenuRedux = () => {
  const dispatch = useAppDispatch()

  const selectedOption = useAppSelector(selectedClass);

  // useEffect(() => {
  //   // Dispatch the action from the RuneExplorer slice when the selected option changes
  //   dispatch(loadRuneData(selectedOption));
  // }, [selectedOption, dispatch]);

  const renderClassButtons = () => {
    return Object.values(PlayerClass).map((option) => (

      <button
        key={option}
        className={"image-button"}
        onClick={() => dispatch(selectClass(option))}
      >

        <img
          src={`../../img/classicon/${option}.png`}
          alt="Class Icon"
          style={{ maxWidth: '64px', maxHeight: '64px' }}
        />

      </button>

    ));
  };

  return (
    <div>
      <h2>Select a class:</h2>
    </div>
  );
}

export default ClassSelectMenuRedux