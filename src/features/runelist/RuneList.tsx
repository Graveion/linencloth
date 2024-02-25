import { useAppSelector } from "../../app/hooks"

import { selectedRunes } from '../runeexplorer/RuneExplorerSlice';
import RuneDescriptor from '../../components/RuneDescriptor'

import './RuneList.css';

export const RuneList = () => {

    const selectedRunesState = useAppSelector(selectedRunes);

    return (
        <div className="runelist">
            {Object.values(selectedRunesState).map((value) => (
                <RuneDescriptor key={value.name} rune={value} level={40}/> 
            ))}
        </div>
      );
};


export default RuneList;