import { createNumberInputSlice, NumberInputState } from '../../components/NumberInput/NumberInput';

const spellPowerPickerSlice = createNumberInputSlice({
    name: 'spellPowerPicker',
    initialState: { value: 450, min: 1, max: 2000 },
})

export const { setValue: setSpellPower } = spellPowerPickerSlice.actions;
export const selectSpellPower = (state: { spellPowerPicker: NumberInputState }) => state.spellPowerPicker.value;
export default spellPowerPickerSlice.reducer;