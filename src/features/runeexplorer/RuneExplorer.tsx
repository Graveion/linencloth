import { useAppSelector } from "../../app/hooks"

import { images } from '../../img/images'

import { Rune } from '../../types/Rune'

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
   

    // todo: supply slot filtered runes to each 
    // classRunes.filter((rune) => rune.getSlot() === 'chest')
    // can we map over an enum slot?
    // and then use that to both calculate image AND filter

    // TODO: Make RuneSelectMenu
    // works like class select menu, except image display
    // and we need an array here
    // and to capture each selected value
    // use effect the rune

    const defaultSlotImage = (slot: string) => {
       return ( 
        <div key={slot}>
            <img src={images[`./${slot}.jpg`]} alt={slot} />
        </div>
       )
    }

    const runeImage = (rune: Rune) => {
        return (
            <div key={rune.icon}>
                <img src={images[`${rune.icon}`]} alt={"rune.name"} />
            </div>
        )
    }

    return (
        <div className="Runes">
            {Object.values(Slot).map(
                (slot: string) => {
                    const selectedValue = selectedRunesState[slot as Slot]
                    const slotRunes = classRunes.filter((element) => element.slot === slot)
                    return (
                        <>
                            { selectedValue ? runeImage(selectedValue) : defaultSlotImage(slot) }
                            <RuneSelectMenu runes={slotRunes} selectedRune={selectedValue} slotImage={slot} />
                        </>
                    );
                }
            )}
        </div>
    );
};

export default RuneExplorer;
