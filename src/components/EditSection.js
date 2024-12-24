import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLogIn } from '../hooks/useLogIn';

export function EditSection({ memo, onEditMemo, onDeleteMemo }) {
  const [editMemo, setEditMemo] = useState(memo);
  const { isLoggedIn } = useLogIn();

  return (
    <>
      {editMemo !== undefined ? (
        <textarea
          disabled={isLoggedIn === false}
          value={editMemo.content}
          onChange={(e) => {
            if (isLoggedIn) {
              setEditMemo({ ...editMemo, content: e.target.value });
            }
          }}
        />
      ) : (
        <textarea disabled></textarea>
      )}

      <button
        disabled={!isLoggedIn}
        onClick={() => {
          if (isLoggedIn) {
            onEditMemo(editMemo);
          }
        }}
      >
        編集
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
    </>
  );
}

EditSection.propTypes = {
  memo: PropTypes.object,
  onEditMemo: PropTypes.func.isRequired,
  onDeleteMemo: PropTypes.func.isRequired,
};
