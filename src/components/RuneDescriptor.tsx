import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../components/Dropdown.css';
import { Rune } from '../types/Rune';

interface RuneDescriptorProps {
    rune: Rune;
    level: number
}

const imagePrefix = "../../img/runeicon/"

const RuneDescriptor: React.FC<RuneDescriptorProps> = ({ rune, level }) => {
    
    // take rune description
    // get calculated formulas from array, substituting level for level scaling
    // then map over that to then replace rune description
    // {0} -> formulas[0]

    // todo: lookup how to interpolate string?
    const substitutedDescription = () => {
        const runeDesc = rune.getDescription()

        rune.calculateValues(level).map(
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
            <img src={imagePrefix.concat(rune.getIcon())} alt="RuneIcon" />
        </div>
    );
};

export default RuneDescriptor;