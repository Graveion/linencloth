import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { selectHealerPower, setHealerPower } from './HealerPowerPickerSlice';

import NumberInput from '../../components/NumberInput/NumberInput'

const SelectPowerPicker = () => {
    const dispatch = useAppDispatch()

    const inputValue = useAppSelector(selectHealerPower);

    const handleNewValue = (newValue: number) => {
        dispatch(setHealerPower(newValue))
    };

    return (
       <NumberInput text={"Healing Power"} inputValue={inputValue} onChange={handleNewValue} />
    );
};

export default SelectPowerPicker;