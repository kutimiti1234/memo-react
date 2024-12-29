import './App.css';
import { useEffect, useState } from 'react';
import { MemoPanel } from './components/MemoPanel';

function App() {
  const initialMemos = JSON.parse(localStorage.getItem('memos')) ?? [];

  const [memos, setMemos] = useState(initialMemos);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos));
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
      }),
    );
  }

  function handleSelectMemo(nextSelectedId) {
    setSelectedId(nextSelectedId);
  }

  function handleDeletetMemo() {
    setMemos(memos.filter((memo) => memo.id !== selectedId));
    setSelectedId(null);
  }

  return (
    <div className="memo-app">
      <div className="memo-panel">
        <label>編集</label>
        <MemoPanel
          memos={memos}
          onAddMemo={handleAddMemo}
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
