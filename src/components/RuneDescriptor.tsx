import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Rune, calculateValues } from '../types/Rune';
import { images } from '../img/images'

interface RuneDescriptorProps {
    rune: Rune;
    level: number
}

const RuneDescriptor: React.FC<RuneDescriptorProps> = ({ rune, level }) => {
    // todo: have values for power / level via class select
    // then import in the seelctor - have the state at a higher level like where the Header is for laughs

    const substitutedDescription = () => {
        const runeDesc = rune.description

        calculateValues(level, 0, rune.damageFormulas).map(
            (value: number, index: number) => {
                const indexString = "{" + index.toString() + "}"
                runeDesc.replace(indexString, value.toString());
            }
        )

        return runeDesc
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