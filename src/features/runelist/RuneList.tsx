import { useAppSelector } from "../../app/hooks"

import { selectedRunes } from '../runeexplorer/RuneExplorerSlice';
import RuneDescriptor from '../../components/RuneDescriptor'

import './RuneList.css';

export const RuneList = () => {

    const selectedRunesState = useAppSelector(selectedRunes);

    return (
        <div className="item-list">
            {Object.values(selectedRunesState).map((value) => (
                <RuneDescriptor rune={value} level={40}/> 
            ))}
        </div>
      );
};


export default RuneList;