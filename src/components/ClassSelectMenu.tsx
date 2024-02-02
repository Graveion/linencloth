import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { PlayerClass } from "../types/PlayerClass";

const ClassSelectMenu: React.FC = (): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<PlayerClass>(PlayerClass.Warrior);
  
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
    setSelectItem(item as PlayerClass);
  };

  return (
    <>
    <div className="announcement">
        <div>
          {selectItem
            ? `You selected ${selectItem}`
            : "Select your item"}
        </div>
      </div>
      <button
        className={showDropdown ? "active" : undefined}
        onClick={(): void => toggleDropdown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectItem ? selectItem : "Select ..."} </div>
        {showDropdown && (
          <Dropdown
            items={Object.values(PlayerClass)}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropdown()}
            itemSelection={itemSelection}
          />
        )}
      </button>
    </>
  );
};

export default ClassSelectMenu;