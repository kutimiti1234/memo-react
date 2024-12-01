import "./App.css";
import { MemoEdit } from "./components/MemoEdit";
import { MemoView } from "./components/MemoView";

function App() {
  return (
    <div className="App">
      <MemoView />
      <MemoEdit />
    </div>
  );
}

export default App;
