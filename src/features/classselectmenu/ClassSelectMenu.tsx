import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { PlayerClass } from '../../types/PlayerClass'
import { images } from '../../img/images'

import { selectClass, selectedClass } from "./ClassSelectMenuSlice";
import { loadRuneData } from '../runeexplorer/RuneExplorerSlice';

import './ClassSelectMenu.css';

export const ClassSelectMenuRedux = () => {
  const dispatch = useAppDispatch()

  const selectedOption = useAppSelector(selectedClass);

  useEffect(() => {
    // Dispatch the action from the RuneExplorer slice when the selected option changes
    dispatch(loadRuneData(selectedOption));
  }, [selectedOption, dispatch]);

  const renderClassButtons = () => {    
    return Object.values(PlayerClass).map((option) => (
      <button
        className="button"
        key={option}
        onClick={() => dispatch(selectClass(option))}
      >

        <img
          src={images[`./classicon/${option}.png`]}
          alt="Class Icon"
        />

      </button>

    ));
  };

  return (
    <div>
      <h2>Select a class:</h2>
      { renderClassButtons() }
    </div>
  );
}

export default ClassSelectMenuRedux