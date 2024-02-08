import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDropdownState, selectOption } from './DropdownSlice';

import '../../components/Dropdown.css';

interface DropdownProps {
  isVisible: boolean;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ isVisible, options }) => {
  const { selectedOption } = useSelector(selectDropdownState);
  const dispatch = useDispatch();

  const handleSelectOption = (option: string) => {
    dispatch(selectOption(option));
  };

    return isVisible ? (
        <>
            <div className={isVisible ? 'dropdown' : 'dropdown active'}>
                {options.map(
                    (option: string, index: number): JSX.Element => {
                        return (
                            <p
                                key={index}
                                onClick={(): void => {
                                    handleSelectOption(option);
                                }}
                            >
                                {option}
                            </p>
                        );
                    }
                )}
            </div>
        </>
  ) : null;
};

export default Dropdown;