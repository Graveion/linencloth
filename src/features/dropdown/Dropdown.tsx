import React from 'react';
import { useDispatch } from 'react-redux';
import { selectOption } from './DropdownSlice';

import './Dropdown.css';

interface DropdownProps {
    isVisible: boolean;
    options: string[];
}

const Dropdown = ({ isVisible, options }: DropdownProps) => {
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
                            <img
                                key={index}
                                onClick={() => {
                                    handleSelectOption(option);
                                }}
                                src={`${option}.jpg`} alt={option}
                            />
                        );
                    }
                )}
            </div>
        </>
    ) : null;
};

export default Dropdown;