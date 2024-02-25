import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../components/Dropdown.css';
import { Rune, calculateValues } from '../types/Rune';

interface RuneDescriptorProps {
    rune: Rune;
    level: number
}

const imagePrefix = "../../img/runeicon/"

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
        <div className={'descriptor'}>
            <p>{substitutedDescription()}</p>
            <img src={imagePrefix.concat(rune.icon)} alt="RuneIcon" />
        </div>
    );
};

export default RuneDescriptor;