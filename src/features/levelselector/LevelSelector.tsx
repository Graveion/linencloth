import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { selectLevel, setValue } from './LevelSelectionSlice';

import NumberInput from '../../components/NumberInput/NumberInput'

const LevelSelector = () => {
    const dispatch = useAppDispatch()

    const inputValue = useAppSelector(selectLevel);

    const handleNewValue = (newValue: number) => {
        dispatch(setValue(newValue))
    };

    return (
       <NumberInput text={"Level"} inputValue={inputValue} onChange={handleNewValue} />
    );
};

export default LevelSelector;