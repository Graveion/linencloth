import { createNumberInputSlice, NumberInputState } from '../../components/NumberInput/NumberInput';

const attackPowerPickerSlice = createNumberInputSlice({
    name: 'attackPowerPicker',
    initialState: { value: 450, min: 1, max: 2000 },
})

export const { setValue: setAttackPower } = attackPowerPickerSlice.actions;
export const selectAttackPower = (state: { attackPowerPicker: NumberInputState }) => state.attackPowerPicker.value;

export default attackPowerPickerSlice.reducer;