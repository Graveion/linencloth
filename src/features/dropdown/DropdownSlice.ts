import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DropdownState {
  selectedOption: string;
}

const initialState: DropdownState = {
  selectedOption: '',
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    selectOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
  selectors: {
    selectSelectedOption: dropdown => dropdown.selectedOption,
  },
});

export const { selectOption } = dropdownSlice.actions;
export const { selectSelectedOption } = dropdownSlice.selectors;

export default dropdownSlice.reducer;