import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { selectAttackPower, setAttackPower } from './AttackPowerPickerSlice';

import NumberInput from '../../components/NumberInput/NumberInput'

const AttackPowerPicker = () => {
    const dispatch = useAppDispatch()

    const inputValue = useAppSelector(selectAttackPower);

    const handleNewValue = (newValue: number) => {
        dispatch(setAttackPower(newValue))
    };

    return (
       <NumberInput text={"Attack Power"} inputValue={inputValue} onChange={handleNewValue} />
    );
};

export default AttackPowerPicker;