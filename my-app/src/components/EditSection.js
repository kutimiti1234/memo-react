import PropTypes from "prop-types";

export function EditSection({ memo, onEditMemo, onDeleteMemo }) {
  return (
    <>
      <form method="post" onSubmit={onEditMemo}>
        {memo !== undefined ? (
          <textarea key={memo.id} defaultValue={memo.content} />
        ) : null}
        <button type="submit">編集</button>
      </form>
      <button onClick={onDeleteMemo}>削除</button>
    </>
  );
}

EditSection.propTypes = {
  memo: PropTypes.object,
  onEditMemo: PropTypes.func.isRequired,
  onDeleteMemo: PropTypes.func.isRequired,
};
