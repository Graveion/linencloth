import React, { useState } from 'react';
import { useAppSelector } from "../../app/hooks"

import { runes, selectedRunes } from './RuneExplorerSlice';

import './RuneExplorer.css';

export enum Slot {
    Chest = 'chest',
    Feet = "feet",
    Hands = "hands",
    Head = "head",
    Legs = "legs",
    Waist = "waist",
    Wrist = "wrist",
}

export const RuneExplorer = () => {

    const classRunes = useAppSelector(runes);
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

    const slotImagePrefix = "../img/"
    const runeImagePrefix = "../img/runeIcon/"

    const defaultSlotImage = (slot: string) => {
       return ( 
        <div>
            <img src={`../img/${slot}.jpg`} alt={slot} />
        </div>
       )
    }

    const runeImage = (runeImgURL: string) => {
        return (
            <div>
                <img src={runeImgURL} alt={"selected rune image"} />
            </div>
        )
    }

    return (
        <div className="Runes">
            {Object.values(Slot).map(
                (slot: string): JSX.Element => {
                    const selectedValue = selectedRunesState.get(slot as Slot)
                    return (
                        selectedValue ?
                            runeImage(selectedValue.getIcon())
                            :
                            defaultSlotImage(slot)
                    );
                }
            )}
        </div>
    );
};

export default RuneExplorer;