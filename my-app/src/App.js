import "./App.css";
import { useState } from "react";
import { MemoEdit } from "./components/MemoEdit";
import { MemoView } from "./components/MemoView";
import FormData from "form-data";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  function handleAddMemo() {
    const nextId = memos.length !== 0 ? memos.at(-1).id + 1 : 1;
    setMemos([...memos, { id: nextId, content: `メモ${nextId}` }]);
  }

  function handleEditMemo(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // setMemos(
    //   memos.map((memo) => {
    //     if (memo.id === selectedId) {
    //       return { id: selectedId, content: formData };
    //     } else {
    //       return memo;
    //     }
    //   })
    // );
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
