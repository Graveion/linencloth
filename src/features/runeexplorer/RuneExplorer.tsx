import { useAppSelector } from "../../app/hooks"

import { RuneSelectMenu } from '../runeselectmenu/RuneSelectMenu'

import { selectRunes, selectedRunes } from './RuneExplorerSlice';

import './RuneExplorer.css';

export enum Slot {
    Chest = 'Chest',
    Feet = "Feet",
    Hands = "Hands",
    Head = "Head",
    Legs = "Legs",
    Waist = "Waist",
    Wrist = "Wrist",
}

export const RuneExplorer = () => {

    const classRunes = useAppSelector(selectRunes);
    const selectedRunesState = useAppSelector(selectedRunes);

    return (
        <div className="Runes">
            {Object.values(Slot).map(
                (slot: string) => {
                    const selectedValue = selectedRunesState[slot as Slot]
                    const slotRunes = classRunes.filter((element) => element.slot === slot)
                    
                    return (
                        <RuneSelectMenu key={slot} runes={slotRunes} selectedRune={selectedValue} slotImage={slot} />
                    );
                }
            )}
        </div>
    );
};

export default RuneExplorer;
