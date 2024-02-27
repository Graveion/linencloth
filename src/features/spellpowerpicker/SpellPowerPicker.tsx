import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { selectSpellPower, setSpellPower } from './SpellPowerPickerSlice';

import NumberInput from '../../components/NumberInput/NumberInput'

const SelectPowerPicker = () => {
    const dispatch = useAppDispatch()

    const inputValue = useAppSelector(selectSpellPower);

    const handleNewValue = (newValue: number) => {
        dispatch(setSpellPower(newValue))
    };

    return (
       <NumberInput text={"Spell Power"} inputValue={inputValue} onChange={handleNewValue} />
    );
};

export default SelectPowerPicker;