import "./App.css";
import { useEffect, useState } from "react";
import { MemoEdit } from "./components/MemoEdit";
import { MemoView } from "./components/MemoView";

function App() {
  const initialMemos = JSON.parse(localStorage.getItem("memos")) ?? [];

  const [memos, setMemos] = useState(initialMemos);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  function handleAddMemo() {
    const nextId = memos.length !== 0 ? memos.at(-1).id + 1 : 1;
    setMemos([...memos, { id: nextId, content: `メモ${nextId}` }]);
  }

  function handleEditMemo(editMemo) {
    setMemos(
      memos.map((memo) => {
        if (memo.id === selectedId) {
          return editMemo;
        } else {
          return memo;
        }
      })
    );
  }

  function handleSelectMemo(nextSelectedId) {
    setSelectedId(nextSelectedId);
  }

  function handleDeletetMemo() {
    setMemos(memos.filter((memo) => memo.id !== selectedId));
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
        <MemoEdit
          memos={memos}
          onMemoAdd={handleAddMemo}
          selectedId={selectedId}
          onSelectMemo={handleSelectMemo}
          onDeleteMemo={handleDeletetMemo}
          onEditMemo={handleEditMemo}
        />
      </div>
    </div>
  );
}

export default App;
