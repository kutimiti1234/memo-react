import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { LogInContext } from '../context/LogInContext';

export function EditSection({ memo, onEditMemo, onDeleteMemo }) {
  const [editMemo, setEditMemo] = useState(memo);
  const logInContext = useContext(LogInContext);

  return (
    <>
      {editMemo !== undefined ? (
        <textarea
          disabled={!logInContext.isLoggedIn}
          value={editMemo.content}
          onChange={(e) =>
            setEditMemo({ ...editMemo, content: e.target.value })
          }
        />
      ) : (
        <textarea disabled></textarea>
      )}

      <button
        disabled={!logInContext.isLoggedIn}
        onClick={() => onEditMemo(editMemo)}
      >
        編集
      </button>
      <button disabled={!logInContext.isLoggedIn} onClick={onDeleteMemo}>
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
