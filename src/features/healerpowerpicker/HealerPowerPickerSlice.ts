import { createNumberInputSlice, NumberInputState } from '../../components/NumberInput/NumberInput';

const healerPowerPickerSlice = createNumberInputSlice({
    name: 'healerPowerPicker',
    initialState: { value: 450, min: 1, max: 2000 },
})

export const { setValue } = healerPowerPickerSlice.actions;
export const selectHealerPower = (state: { healerPowerPicker: NumberInputState }) => state.healerPowerPicker.value;
export default healerPowerPickerSlice.reducer;