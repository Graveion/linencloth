import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setShowDropdown, showDropdown } from "./RuneSelectMenuSlice";
import { setSelectedRune } from "../runeexplorer/RuneExplorerSlice"

import { Rune } from "../../types/Rune";

import { selectSelectedOption } from "../dropdown/DropdownSlice";
import Dropdown from "../dropdown/Dropdown";

import './RuneSelectMenu.css';

interface RuneSelectMenuProps {
  runes: Rune[];
  selectedRune?: Rune
  slotImage: string
}

export const RuneSelectMenu: React.FC<RuneSelectMenuProps> = ({ runes, slotImage }) => {
  const dispatch = useAppDispatch()

  const dropdown = useAppSelector(showDropdown)
  const dropdownSelection = useAppSelector(selectSelectedOption)

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
    // Dispatch the action from the RuneExplorerSlice when the selected option changes
    dispatch(setSelectedRune(dropdownSelection));
  }, [dropdownSelection, dispatch]);


  return (
    <>
      <button
        className={dropdown ? "active" : undefined}
        onClick={() => dispatch(setShowDropdown(!dropdown))}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <Dropdown
          options={runes.map((rune: Rune) => {
            return { id: rune.name, imgURI: rune.icon };
          })}

          isVisible={dropdown}
        />
      </button>
    </>
  );
}

export default RuneSelectMenu
