import PropTypes from "prop-types";
import { useState } from "react";

export function EditSection({ memo, onEditMemo, onDeleteMemo }) {
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
      ) : null}

      <button onClick={() => onEditMemo(editMemo)}>編集</button>
      <button onClick={onDeleteMemo}>削除</button>
    </>
  );
}

EditSection.propTypes = {
  memo: PropTypes.object,
  onEditMemo: PropTypes.func.isRequired,
  onDeleteMemo: PropTypes.func.isRequired,
};
