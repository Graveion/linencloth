import React, { useEffect, useState } from 'react';
import './Dropdown.css';

type DropdownProps = {
    items: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    itemSelection: Function;
  };
  
  const Dropdown: React.FC<DropdownProps> = ({
    items,
    itemSelection,
  }: DropdownProps): JSX.Element => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
  
    /**
     * Handle passing items name
     * back to the parent component
     *
     * @param item  The selected item
     */
    const onClickHandler = (item: string): void => {
      itemSelection(item);
    };
  
    useEffect(() => {
      setShowDropdown(showDropdown);
    }, [showDropdown]);
  
    return (
      <>
        <div className={showDropdown ? 'dropdown' : 'dropdown active'}>
          {items.map(
            (item: string, index: number): JSX.Element => {
              return (
                <p
                  key={index}
                  onClick={(): void => {
                    onClickHandler(item);
                  }}
                >
                  {item}
                </p>
              );
            }
          )}
        </div>
      </>
    );
  };
  
export default Dropdown;
  