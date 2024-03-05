import React from "react";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import './NumberInput.css';

interface NumberInputProps {
    text: string
    inputValue: number;
    onChange: (newValue: number) => void;
}

export interface NumberInputState {
    value: number
    min?: number
    max?: number
}

export const createNumberInputSlice = ({
  name = '',
  initialState,
}: {
  name: string;
  initialState: NumberInputState;
}) => {
  return createSlice({
    name: name,
    initialState,
    reducers: {
      setValue: (state, action: PayloadAction<number>) => {
        const value = action.payload;
        const { min, max } = state;

        if (min !== undefined && value < min) {
          state.value = min;
        } else if (max !== undefined && value > max) {
          state.value = max;
        } else {
          state.value = value;
        }
      },
    },
  });
};

const NumberInput = ({ text, inputValue, onChange}: NumberInputProps) => {


    const handleInputChange = (e: { target: { value: string; }; }) => {
        trySetValue(parseInt(e.target.value));
    };

    const trySetValue = (newValue: number) => {
        if (!isNaN(newValue)) {
            onChange(newValue)
        }
    }

    const handleBlur = () => {
        trySetValue(inputValue)
    };

    return (
        <div className="number-input">
            <p style={{ fontSize: '12px' }}>{text}</p>
            <input className="power"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default NumberInput