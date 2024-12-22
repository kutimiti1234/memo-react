import PropTypes from 'prop-types';
import { EditSection } from './EditSection';
import { MemoList } from './MemoList';

export function MemoEdit({
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
      <div className={'memo-list'}>
        <MemoList
          memos={memos}
          onAddMemo={onAddMemo}
          onSelectMemo={onSelectMemo}
        />
      </div>
      <div className={'memo-content'} key={selectedId}>
        <EditSection
          memo={selectedMemo}
          onEditMemo={onEditMemo}
          onDeleteMemo={onDeleteMemo}
        />
      </div>
    </>
  );
}

MemoEdit.propTypes = {
  memos: PropTypes.array.isRequired,
  onAddMemo: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  onSelectMemo: PropTypes.func.isRequired,
  onEditMemo: PropTypes.func.isRequired,
  onDeleteMemo: PropTypes.func.isRequired,
};
