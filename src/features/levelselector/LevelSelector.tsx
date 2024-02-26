import { useAppSelector, useAppDispatch } from "../../app/hooks"

import './LevelSelector.css';
import { selectLevel, setValue } from './LevelSelectionSlice';

const LevelSelector = () => {
    const dispatch = useAppDispatch()

    const inputValue = useAppSelector(selectLevel);

    const handleInputChange = (e: { target: { value: string; }; }) => {
        trySetValue(parseInt(e.target.value));
    };

    const trySetValue = (newValue: number) => {
        
        if (!isNaN(newValue) && newValue >= 1 && newValue <= 40) {
            // Call the setValue function passed from the parent component
            dispatch(setValue(newValue));
        } else {
            // Reset the input value to the current value if it's invalid
            dispatch(setValue(inputValue));
        }
    }

    const handleBlur = () => {
        trySetValue(inputValue)
    };

    return (
        <div className="number-input">
            <p>level:</p>
            <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default LevelSelector;