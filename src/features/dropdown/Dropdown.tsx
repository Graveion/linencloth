import React from 'react';
import { images } from '../../img/images'
import Tooltip from "../../components/Tooltip";

import './Dropdown.css';

interface DropdownProps {
    isVisible: boolean;
    options: DropdownItem[];
    onChange: (selectedValue: string) => void;
}

interface DropdownItem {
    id: string
    imgURI: string
}

const Dropdown = ({ isVisible, options, onChange }: DropdownProps) => {
    return isVisible ? (
        <>
            <div className={isVisible ? 'dropdown' : 'dropdown active'}>
                {options.map(
                    (option: DropdownItem, index: number) => {
                        return (
                            <Tooltip key={index} text={option.id}>
                            <img
                                onClick={() => {
                                    onChange(option.id);
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