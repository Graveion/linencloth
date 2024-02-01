import './App.css';
import ClassSelectMenu from "./components/ClassSelectMenu";

const [playerClass, setPlayerClass] = React.useState(PlayerClass.Warrior);

function App() {
  return (
    <div className="App">
      <ClassSelectMenu/>
    </div>
  );
}

export default App;
