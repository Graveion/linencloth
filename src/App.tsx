import React from 'react';
import ReduxMenu from "./features/classselectmenu/ClassSelectMenu"
import RuneExplorer from "./features/runeexplorer/RuneExplorer";
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
        <RuneExplorer/>
      </div>
  );
}

export default App;