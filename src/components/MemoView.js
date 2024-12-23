import PropTypes from 'prop-types';
import { MemoList } from './MemoList';
import { ViewSection } from './ViewSection';
import { LogInButton } from './LogInButton';

export function MemoView({ memos, onAddMemo, selectedId, onSelectMemo }) {
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  return (
    <>
      <LogInButton />
      <div className={'memo-list'}>
        <MemoList
          memos={memos}
          onAddMemo={onAddMemo}
          onSelectMemo={onSelectMemo}
        />
      </div>
      <div className={'memo-content'} key={selectedId}>
        <ViewSection memo={selectedMemo} />
      </div>
    </>
  );
}

MemoView.propTypes = {
  memos: PropTypes.array.isRequired,
  onAddMemo: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  onSelectMemo: PropTypes.func.isRequired,
};
