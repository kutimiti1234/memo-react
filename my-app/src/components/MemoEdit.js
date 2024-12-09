import { EditSection } from "./EditSection";
import { MemoList } from "./MemoList";

export function MemoEdit() {
  return (
    <>
      <label>編集</label>
      <div className={"memo-list"}>
        <MemoList />
      </div>
      <div className={"memo-edit-section"}>
        <EditSection />
      </div>
    </>
  );
}
