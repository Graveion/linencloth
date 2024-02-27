import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { selectSpellPower, setValue } from './SpellPowerPickerSlice';

import NumberInput from '../../components/NumberInput/NumberInput'

const SelectPowerPicker = () => {
    const dispatch = useAppDispatch()

    const inputValue = useAppSelector(selectSpellPower);

    const handleNewValue = (newValue: number) => {
        dispatch(setValue(newValue))
    };

    return (
       <NumberInput text={"Spell Power"} inputValue={inputValue} onChange={handleNewValue} />
    );
};

export default SelectPowerPicker;