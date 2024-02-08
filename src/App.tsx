import React from 'react';
import { PlayerClass } from "./components/ClassSelectMenu";
import ReduxMenu from "./features/classselectmenu/ClassSelectMenu"
import RuneExplorer from "./components/RuneExplorer";
import './App.css';

// todo: need to get selection from menu and use redux

function App() {
  return (
      <div className="App">
        <header>
          <p>
            Linen Cloth - Season of Discovery Planner
          </p>
        </header>
        <ReduxMenu />
        <RuneExplorer playerClass={PlayerClass.Warrior} />
      </div>
  );
}

export default App;
