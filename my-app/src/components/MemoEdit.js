import PropTypes from "prop-types";
import { EditSection } from "./EditSection";
import { MemoList } from "./MemoList";

export function MemoEdit({
  memos,
  onMemoAdd,
  selectedId,
  onSelectMemo,
  onDeleteMemo,
  onEditMemo,
}) {
  return (
    <>
      <label>編集</label>
      <div className={"memo-list"}>
        <MemoList
          memos={memos}
          onMemoAdd={onMemoAdd}
          onSelectMemo={onSelectMemo}
        />
      </div>
      <div className={"memo-edit-section"}>
        <EditSection
          memo={memos.find((memo) => memo.id === selectedId)}
          onEditMemo={onEditMemo}
          onDeleteMemo={onDeleteMemo}
        />
      </div>
    </>
  );
}

MemoEdit.propTypes = {
  memos: PropTypes.array.isRequired,
  onMemoAdd: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  onSelectMemo: PropTypes.func.isRequired,
  onEditMemo: PropTypes.func.isRequired,
  onDeleteMemo: PropTypes.func.isRequired,
};
