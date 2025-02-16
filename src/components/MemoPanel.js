import PropTypes from 'prop-types';
import { MemoEdit } from './EditSection';
import { MemoList } from './MemoView';
import { LogInButton } from './LogInButton';

export function MemoPanel({
  memos,
  onAddMemo,
  selectedId,
  onSelectMemo,
  onDeleteMemo,
  onEditMemo,
}) {
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
        <MemoEdit
          memo={selectedMemo}
          onEditMemo={onEditMemo}
          onDeleteMemo={onDeleteMemo}
        />
      </div>
    </>
  );
}

MemoPanel.propTypes = {
  memos: PropTypes.array.isRequired,
  onAddMemo: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  onSelectMemo: PropTypes.func.isRequired,
  onEditMemo: PropTypes.func.isRequired,
  onDeleteMemo: PropTypes.func.isRequired,
};
