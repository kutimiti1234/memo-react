import PropTypes from "prop-types";
import { MemoList } from "./MemoList";
import { ViewSection } from "./ViewSection";

export function MemoView({ memos, onMemoAdd }) {
  return (
    <>
      <label>一覧</label>
      <div className={"memo-list"}>
        <MemoList memos={memos} onMemoAdd={onMemoAdd} />
      </div>
      <div className={"memo-view-section"}>
        <ViewSection />
      </div>
    </>
  );
}

MemoView.propTypes = {
  memos: PropTypes.array.isRequired,
  onMemoAdd: PropTypes.func.isRequired,
};
