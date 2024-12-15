import "./App.css";
import { useState } from "react";
import { MemoEdit } from "./components/MemoEdit";
import { MemoView } from "./components/MemoView";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  function handleAddMemo() {
    const nextId = memos.length !== 0 ? memos.at(-1).id + 1 : 1;
    setMemos([...memos, { id: nextId, content: `メモ${nextId}` }]);
  }

  function handleSelectMemo(nextSelectedId) {
    setSelectedId(nextSelectedId);
  }

  return (
    <div className="App">
      <div className="memo-view">
        <MemoView
          memos={memos}
          onMemoAdd={handleAddMemo}
          selectedId={selectedId}
          onSelectMemo={handleSelectMemo}
        />
      </div>
      <div className="memo-edit">
        <MemoEdit />
      </div>
    </div>
  );
}

export default App;
