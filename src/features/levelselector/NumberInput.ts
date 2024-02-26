import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    }
  });
};

// const attackPowerSelectionSlice = createNumberInputSlice('attackPower', { value: 1, min: 1, max: 2000 });
// const spellPowerSelectionSlice = createNumberInputSlice('spellPower', { value: 1, min: 1, max: 2000 });
// const healingPowerSelectionSlice = createNumberInputSlice('healingPower', { value: 1, min: 1, max: 2000 });

// export const { setValue: setAttackPower } = attackPowerSelectionSlice.actions;
// export const { setValue: setSpellPower } = spellPowerSelectionSlice.actions;
// export const { setValue: setHealingPower } = healingPowerSelectionSlice.actions;

// export const { selectValue: selectAttackPower } = attackPowerSelectionSlice.selectors;
// export const { selectValue: selectSpellPower } = spellPowerSelectionSlice.selectors;
// export const { selectValue: selectHealingPower } = healingPowerSelectionSlice.selectors;
