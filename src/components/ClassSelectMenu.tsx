import React, { useState } from "react";
import './ClassSelectMenu.css';
import Dropdown from "./Dropdown";

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

export const ClassSelectMenu = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [selectItem, setSelectItem] = useState<string>("Warrior")

  /**
   * Toggle the drop down menu
   */
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropdown(false);
    }
  };

  /**
   * Callback function to consume the
   * item name from the child component
   *
   * @param item  
   * The selected item
   */
  const itemSelection = (item: string): void => {
    setSelectItem(item);
    setShowDropdown(false)
  };

  return (
    <>
      <button
        className={showDropdown ? "active" : undefined}
        onClick={toggleDropdown}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >

        <div>{selectItem ? selectItem : "Select ..."} </div>
        {showDropdown && (
        <Dropdown
          items={Object.values(PlayerClass)}
          showDropdown={showDropdown}
          itemSelection={itemSelection}
        />
        )}
      </button>
    </>
  );
}

export default ClassSelectMenu