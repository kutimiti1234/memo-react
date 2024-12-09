import "./App.css";
import { MemoEdit } from "./components/MemoEdit";
import { MemoView } from "./components/MemoView";

function App() {
  return (
    <div className="App">
      <div className="memo-view">
        <MemoView />
      </div>
      <div className="memo-edit">
        <MemoEdit />
      </div>
    </div>
  );
}

export default App;
