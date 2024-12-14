import PropTypes from "prop-types";

export function EditSection({ memo, onSubmit, onClick }) {
  return (
    <>
      <form method="post" onSubmit={onSubmit}>
        <textarea defaultValue={memo.content} />
        <button type="submit">編集</button>
      </form>
      <button onClick={onClick}>削除</button>
    </>
  );
}

EditSection.propTypes = {
  memo: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
