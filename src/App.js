import './App.css';
import { useEffect, useState } from 'react';
import { MemoEdit } from './components/MemoEdit';
import { MemoView } from './components/MemoView';
import { LogInProvider } from './hooks/useLogIn';

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
        <label>一覧</label>
        <LogInProvider>
          <MemoView
            memos={memos}
            onAddMemo={handleAddMemo}
            selectedId={selectedId}
            onSelectMemo={handleSelectMemo}
          />
        </LogInProvider>
      </div>
      <div className="memo-panel">
        <label>編集</label>
        <LogInProvider>
          <MemoEdit
            memos={memos}
            onAddMemo={handleAddMemo}
            selectedId={selectedId}
            onSelectMemo={handleSelectMemo}
            onDeleteMemo={handleDeletetMemo}
            onEditMemo={handleEditMemo}
          />
        </LogInProvider>
      </div>
    </div>
  );
}

export default App;
