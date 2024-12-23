import './App.css';
import { useEffect, useState } from 'react';
import { MemoEdit } from './components/MemoEdit';
import { MemoView } from './components/MemoView';
import { LogInContext } from './context/LogInContext';

function App() {
  const initialMemos = JSON.parse(localStorage.getItem('memos')) ?? [];

  const [memos, setMemos] = useState(initialMemos);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoggedIn, setIsloggedIn] = useState(false);

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

  function onLogIn() {
    setIsloggedIn(!isLoggedIn);
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
        <LogInContext.Provider value={{ isLoggedIn, onLogIn }}>
          <MemoView
            memos={memos}
            onAddMemo={handleAddMemo}
            selectedId={selectedId}
            onSelectMemo={handleSelectMemo}
          />
        </LogInContext.Provider>
      </div>
      <div className="memo-panel">
        <label>編集</label>
        <LogInContext.Provider value={{ isLoggedIn, onLogIn }}>
          <MemoEdit
            memos={memos}
            onAddMemo={handleAddMemo}
            selectedId={selectedId}
            onSelectMemo={handleSelectMemo}
            onDeleteMemo={handleDeletetMemo}
            onEditMemo={handleEditMemo}
          />
        </LogInContext.Provider>
      </div>
    </div>
  );
}

export default App;
