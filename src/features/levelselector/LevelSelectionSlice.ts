import { createNumberInputSlice, NumberInputState } from '../../components/NumberInput/NumberInput';

const levelSelectionSlice = createNumberInputSlice({
    name: 'levelSelection',
    initialState: { value: 40, min: 1, max: 40 },
})

export const { setValue } = levelSelectionSlice.actions;
export const selectLevel = (state: { levelSelection: NumberInputState }) => state.levelSelection.value;
export default levelSelectionSlice.reducer;