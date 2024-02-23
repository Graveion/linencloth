import React from 'react';
import ClassSelectButtons from "./features/classselectmenu/ClassSelectMenu"
import RuneExplorer from "./features/runeexplorer/RuneExplorer";
import './App.css';

// todo: need to get selection from menu and use redux

function App() {
  return (
      <div className="App">
        <header>
          <p>
            Linen Cloth - Season of Discovery P2 Planner
          </p>
        </header>
        <ClassSelectButtons />
        <RuneExplorer />
      </div>
  );
}

export default App;