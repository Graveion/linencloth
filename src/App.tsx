import React from 'react';
import ClassSelectButtons from "./features/classselectmenu/ClassSelectMenu"
import RuneExplorer from "./features/runeexplorer/RuneExplorer";
import RuneList from "./components/RuneList";
import './App.css';

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
        <RuneList />
      </div>
  );
}

export default App;