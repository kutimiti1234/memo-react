import PropTypes from "prop-types";

export function MemoList({ memos, onClick }) {
  const memoItems = memos.map((memo) => (
    <li key={memo.id}>{memo.content.split("\n")[0]}</li>
  ));
  return (
    <>
      <ul>{memoItems}</ul>
      <button onClick={onClick}>+</button>
    </>
  );
}

MemoList.propTypes = {
  memos: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
