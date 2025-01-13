import PropTypes from 'prop-types';
import { useState } from 'react';

export function MemoEdit({ memo, onEditMemo, onDeleteMemo }) {
  const [editMemo, setEditMemo] = useState(memo);

  return (
    <>
      {editMemo !== undefined ? (
        <textarea
          value={editMemo.content}
          onChange={(e) =>
            setEditMemo({ ...editMemo, content: e.target.value })
          }
        />
      ) : (
        <textarea disabled></textarea>
      )}
      <div className="edit-buttons">
        <button onClick={() => onEditMemo(editMemo)}>更新</button>
        <button onClick={onDeleteMemo}>削除</button>
      </div>
    </>
  );
}

MemoEdit.propTypes = {
  memo: PropTypes.object,
  onEditMemo: PropTypes.func.isRequired,
  onDeleteMemo: PropTypes.func.isRequired,
};
