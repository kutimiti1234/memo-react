import PropTypes from 'prop-types';
import { useLogIn } from '../hooks/useLogIn';

export function MemoList({ memos, onAddMemo, onSelectMemo }) {
  const memoItems = memos.map((memo) => (
    <li key={memo.id} onClick={() => onSelectMemo(memo.id)}>
      {memo.content.split('\n')[0]}
    </li>
  ));

  const { isLoggedIn } = useLogIn();
  return (
    <>
      <ul>{memoItems}</ul>
      <p
        className={isLoggedIn ? 'add-memo' : 'add-memo-disabled'}
        onClick={() => {
          if (isLoggedIn === true) {
            onAddMemo();
          }
        }}
      >
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
