import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { selectHealerPower, setValue } from './HealerPowerPickerSlice';

import NumberInput from '../../components/NumberInput/NumberInput'

const SelectPowerPicker = () => {
    const dispatch = useAppDispatch()

    const inputValue = useAppSelector(selectHealerPower);

    const handleNewValue = (newValue: number) => {
        dispatch(setValue(newValue))
    };

    return (
       <NumberInput text={"Healing Power"} inputValue={inputValue} onChange={handleNewValue} />
    );
};

export default SelectPowerPicker;