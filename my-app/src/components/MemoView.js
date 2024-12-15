import PropTypes from "prop-types";
import { MemoList } from "./MemoList";
import { ViewSection } from "./ViewSection";

export function MemoView({ memos, onMemoAdd, selectedId, onSelectMemo }) {
  return (
    <>
      <label>一覧</label>
      <div className={"memo-list"}>
        <MemoList
          memos={memos}
          onMemoAdd={onMemoAdd}
          onSelectMemo={onSelectMemo}
        />
      </div>
      <div className={"memo-view-section"}>
        <ViewSection memo={memos.find((memo) => memo.id === selectedId)} />
      </div>
    </>
  );
}

MemoView.propTypes = {
  memos: PropTypes.array.isRequired,
  onMemoAdd: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  onSelectMemo: PropTypes.func.isRequired,
};
