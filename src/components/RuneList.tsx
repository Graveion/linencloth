import { useAppSelector } from "../app/hooks"

import { selectedRunes } from '../features/runeexplorer/RuneExplorerSlice';
import RuneDescriptor from './RuneDescriptor'

import './RuneList.css';

// TODO: import level from state

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