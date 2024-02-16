import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import './ClassSelectMenu.css';
import { setShowDropdown, selectClass, showDropdown, selectedClass } from "./ClassSelectMenuSlice";
import DropdownRedux from "../dropdown/Dropdown";

import { selectSelectedOption } from '../dropdown/DropdownSlice';

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

    const dropdown = useAppSelector(showDropdown)
    const selectedOption = useAppSelector(selectSelectedOption);

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      dispatch(setShowDropdown(false));
    }
  };

  useEffect(() => {
    // Dispatch the action from the other slice when the selected option changes
    dispatch(loadRuneData(selectedOption));
  }, [selectedOption, dispatch]);

  const imgPrefix = "../../img/classicon/"

  return (
    <>
      <button
        className={dropdown ? "active" : undefined}
        onClick={() => dispatch(setShowDropdown(!dropdown))}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectedOption ? selectedOption : "Select ..."} </div>
         <DropdownRedux
          options={Object.values(PlayerClass)}
          isVisible={dropdown}
          />
      </button>
      {selectedOption && (
        <div className="selected-option">
          <img
            src={imgPrefix.concat(selectedOption?.concat(".png"))}
            alt="Selected Option"
            style={{ maxWidth: '64px', maxHeight: '64px' }}
          />
        </div>
      )}
    </>
  );
}

export default ClassSelectMenuRedux