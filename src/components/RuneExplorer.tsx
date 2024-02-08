import React, { useState } from 'react';
import { PlayerClass } from './ClassSelectMenu';
import chest from '../img/chest.jpg';
import feet from '../img/feet.jpg';
import hands from '../img/hands.jpg';
import head from '../img/head.jpg';
import legs from '../img/legs.jpg';
import waist from '../img/waist.jpg';
import wrist from '../img/wrists.jpg';

import './RuneExplorer.css';

type RuneExplorerProps = {
    playerClass: PlayerClass;
};

export const RuneExplorer: React.FC<RuneExplorerProps> = ({
    playerClass,
}: RuneExplorerProps): JSX.Element => {
    return (
        <div className = "Runes">
            <img src={chest} alt="Chest" />
            <img src={feet} alt="Feet" />
            <img src={hands} alt="Hands" />
            <img src={head} alt="Head" />
            <img src={legs} alt="Legs" />
            <img src={waist} alt="Waist" />
            <img src={wrist} alt="Wrist" />
        </div>       
    );
};

export default RuneExplorer;