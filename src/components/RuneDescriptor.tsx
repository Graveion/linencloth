import { Rune, calculateValues } from '../types/Rune';
import { images } from '../img/images'

import { useAppSelector } from "../app/hooks"
import { selectLevel } from '../features/levelselector/LevelSelectionSlice'

import './RuneDescriptor.css';

interface RuneDescriptorProps {
    rune: Rune;
}

const RuneDescriptor = ({ rune }: RuneDescriptorProps) => {
    // todo: have values for power / level via class select
    // then import in the selector - have the state at a higher level like where the Header is for laughs

    const level = useAppSelector(selectLevel);

    const substitutedDescription = () => {
        const values = calculateValues(level, 0, rune.damageFormulas)

        return rune.description.replace(/{\d+}/g, (substring: string) => {
            const index = parseInt(substring.slice(1, -1)); 
            return values[index] !== undefined ? values[index].toFixed().toString() : substring;
        });
    }

    return (
        <div className="item-row">
            <img src={images[`${rune.icon}`]} alt="icon" className="icon" />
            <div className="content">
                <div className="name">{rune.name}</div>
                <div className="description">{substitutedDescription()}</div>
            </div>
        </div>
    );

};

export default RuneDescriptor;