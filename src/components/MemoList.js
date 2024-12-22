import PropTypes from 'prop-types';

export function MemoList({ memos, onAddMemo, onSelectMemo }) {
  const memoItems = memos.map((memo) => (
    <li key={memo.id} onClick={() => onSelectMemo(memo.id)}>
      {memo.content.split('\n')[0]}
    </li>
  ));
  return (
    <>
      <ul>{memoItems}</ul>
      <p className="add-memo" onClick={onAddMemo}>
        +
      </p>
    </>
  );
}

MemoList.propTypes = {
  memos: PropTypes.array.isRequired,
  onSelectMemo: PropTypes.func.isRequired,
  onAddMemo: PropTypes.func.isRequired,
};
