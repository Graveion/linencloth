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
});

export const { selectOption } = dropdownSlice.actions;
export const selectSelectedOption = (state: { dropdown: DropdownState }) => state.dropdown.selectedOption;

// called selectors because they allow you select the state from a slice you require

export default dropdownSlice.reducer;