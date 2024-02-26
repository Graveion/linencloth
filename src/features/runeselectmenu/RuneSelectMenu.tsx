import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setSelectedRune } from "../runeexplorer/RuneExplorerSlice"

import { Rune } from "../../types/Rune";
import { images } from '../../img/images'

import Dropdown from "../dropdown/Dropdown";

import './RuneSelectMenu.css';

interface RuneSelectMenuProps {
  runes: Rune[];
  selectedRune?: Rune
  slotImage: string
}

export const RuneSelectMenu = ({ runes, selectedRune, slotImage }: RuneSelectMenuProps) => {
  const dispatch = useAppDispatch()

  // Nothing else in the app needs to know whether the drop down is open or closed
  // so handle state locally
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

  // Similarly here, nothing in the app directly needs to know the dropdown selection
  // so we can use a traditional callback before dispatching to the store
  const handleDropdownChange = (selectedValue: string) => {
    dispatch(setSelectedRune(selectedValue));
  };

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
          <img src={images[`${rune.icon}`]} alt={rune.name} />
      </div>
    )
  }

  return (
    <>
      <div className="displayImage">
        { selectedRune ? runeImage(selectedRune) : defaultSlotImage(slotImage) }
        <div className="wrapper">
          <button
            className={"rune-button"}
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

              onChange={handleDropdownChange}

              isVisible={dropdown}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default RuneSelectMenu
