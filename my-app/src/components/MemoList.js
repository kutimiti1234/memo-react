import PropTypes from "prop-types";

export function MemoList({ memos, onMemoAdd }) {
  const memoItems = memos.map((memo) => (
    <li key={memo.id}>{memo.content.split("\n")[0]}</li>
  ));
  return (
    <>
      <ul>{memoItems}</ul>
      <button onClick={onMemoAdd}>+</button>
    </>
  );
}

MemoList.propTypes = {
  memos: PropTypes.array.isRequired,
  onMemoAdd: PropTypes.func.isRequired,
};
