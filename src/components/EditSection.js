import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLogIn } from '../hooks/useLogIn';

export function MemoEdit({ memo, onEditMemo, onDeleteMemo }) {
  const [editMemo, setEditMemo] = useState(memo);
  const { isLoggedIn } = useLogIn();

  return (
    <>
      {editMemo !== undefined ? (
        <textarea
          disabled={!isLoggedIn}
          value={editMemo.content}
          onChange={(e) =>
            setEditMemo({ ...editMemo, content: e.target.value })
          }
        />
      ) : (
        <textarea disabled></textarea>
      )}
      <div className="edit-buttons">
        <button
          disabled={!isLoggedIn}
          onClick={() => {
            if (isLoggedIn) {
              onEditMemo(editMemo);
            }
          }}
        >
          更新
        </button>
        <button
          disabled={!isLoggedIn}
          onClick={() => {
            if (isLoggedIn) {
              onDeleteMemo();
            }
          }}
        >
          削除
        </button>
      </div>
    </>
  );
}

MemoEdit.propTypes = {
  memo: PropTypes.object,
  onEditMemo: PropTypes.func.isRequired,
  onDeleteMemo: PropTypes.func.isRequired,
};
