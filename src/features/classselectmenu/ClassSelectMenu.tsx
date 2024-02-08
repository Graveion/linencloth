import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import '../../components/ClassSelectMenu.css';
import { setShowDropdown, selectClass, showDropdown, selectedClass } from "./ClassSelectMenuSlice";
import DropdownRedux from "../dropdown/Dropdown";

import { selectSelectedOption } from '../dropdown/DropdownSlice';

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
    const playerClass = useAppSelector(selectedClass)

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
    </>
  );
}

export default ClassSelectMenuRedux