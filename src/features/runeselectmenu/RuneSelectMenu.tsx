import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setShowDropdown, selectSelectedRune, showDropdown } from "./RuneSelectMenuSlice";

import { Rune } from "../../types/Rune";
import Dropdown from "../dropdown/Dropdown";

import './RuneSelectMenu.css';

interface RuneSelectMenuProps {
    runes: Rune[];
    selectedRune: Rune | undefined
    slotImage: string
}

export const RuneSelectMenu: React.FC<RuneSelectMenuProps> = ({ runes, slotImage }) => {
    const dispatch = useAppDispatch()

    const dropdown = useAppSelector(showDropdown)
    const selectedRune = useAppSelector(selectSelectedRune);

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

//   useEffect(() => {
//     // Dispatch the action from the RuneExplorerSlice when the selected option changes
//     dispatch(setSelectedRune(selectedRune));
//   }, [selectedRune, dispatch]);

  const icon = () => {
    return (
        selectedRune ?
            <div>
                <img src={selectedRune.getIcon()} alt={selectedRune.getIcon()} />
            </div>
            :
            <div>
                <img src={slotImage} alt={'empty'} />
            </div>
    );
  }

  return (
    <>
      <button
        className={dropdown ? "active" : undefined}
        onClick={() => dispatch(setShowDropdown(!dropdown))}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        icon()
         <Dropdown
          options={ runes.map((rune: Rune) => { return rune.getIcon() }) } // map icon urls, since dropdown is generic we need to really start using full urls
          isVisible={dropdown}
          />
      </button>
    </>
  );
}

export default RuneSelectMenu