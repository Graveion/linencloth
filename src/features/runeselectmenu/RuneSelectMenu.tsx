import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setShowDropdown, showDropdown } from "./RuneSelectMenuSlice";
import { setSelectedRune } from "../runeexplorer/RuneExplorerSlice"

import { Rune } from "../../types/Rune";
import { images } from '../../img/images'

import { selectSelectedOption } from "../dropdown/DropdownSlice";
import Dropdown from "../dropdown/Dropdown";

import './RuneSelectMenu.css';

interface RuneSelectMenuProps {
  runes: Rune[];
  selectedRune?: Rune
  slotImage: string
}

export const RuneSelectMenu: React.FC<RuneSelectMenuProps> = ({ runes, selectedRune, slotImage }) => {
  const dispatch = useAppDispatch()

  const dropdownSelection = useAppSelector(selectSelectedOption)

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
       setDropdown(false)
    }
  };

  useEffect(() => {
    // Dispatch the action from the RuneExplorerSlice when the selected option changes
    dispatch(setSelectedRune(dropdownSelection));
  }, [dropdownSelection, dispatch]);

  const defaultSlotImage = (slot: string) => {
    return (
      <div key={slot}>
        <img src={images[`./${slot}.jpg`]} alt={slot} />
      </div>
    )
  }

  const runeImage = (rune: Rune) => {
    return (
      <div key={rune.icon}>
        <img src={images[`${rune.icon}`]} alt={"rune.name"} />
      </div>
    )
  }

  return (
    <>
      <div className="displayImage">
        { selectedRune ? runeImage(selectedRune) : defaultSlotImage(slotImage) }
        <div className="wrapper">
          <button
            className={dropdown ? "button.active" : "button"}
            onClick={toggleDropdown}
            onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
              dismissHandler(e)
            }
          >
            <Dropdown
              key={slotImage}
              options={runes.map((rune: Rune) => {
                return { id: rune.name, imgURI: rune.icon };
              })}

              isVisible={dropdown}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default RuneSelectMenu
