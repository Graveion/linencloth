import { Rune, calculateValues } from '../types/Rune';
import { images } from '../img/images'

import { useAppSelector } from "../app/hooks"
import { selectLevel } from '../features/levelselector/LevelSelectionSlice'
import { selectAttackPower } from '../features/attackpowerpicker/AttackPowerPickerSlice'
import { selectSpellPower } from '../features/spellpowerpicker/SpellPowerPickerSlice'
import { selectHealerPower } from '../features/healerpowerpicker/HealerPowerPickerSlice'

import './RuneDescriptor.css';

interface RuneDescriptorProps {
    rune: Rune;
}

const RuneDescriptor = ({ rune }: RuneDescriptorProps) => {
    const level = useAppSelector(selectLevel);
    const ap = useAppSelector(selectAttackPower);
    const sp = useAppSelector(selectSpellPower);
    const hp = useAppSelector(selectHealerPower);

    const substitutedDescription = () => {
        const values = calculateValues(level, {attackPower: ap, spellPower: sp, healingPower: hp}, rune.damageFormulas)

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