import React from 'react';
import { useDispatch } from 'react-redux';
import { selectOption } from './DropdownSlice';
import { images } from '../../img/images'
import Tooltip from "../../components/Tooltip";

import './Dropdown.css';

interface DropdownProps {
    isVisible: boolean;
    options: DropdownItem[];
}

interface DropdownItem {
    id: string
    imgURI: string
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
                    (option: DropdownItem, index: number): JSX.Element => {
                        return (
                            <Tooltip text={option.id}>
                            <img
                                key={index}
                                onClick={() => {
                                    handleSelectOption(option.id);
                                }}
                                src={images[`${option.imgURI}`]} alt={option.id}
                            />
                            </Tooltip>
                        );
                    }
                )}
            </div>
        </>
    ) : null;
};

export default Dropdown;