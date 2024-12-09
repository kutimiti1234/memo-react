import { MemoList } from "./MemoList";
import { ViewSection } from "./ViewSection";

export function MemoView() {
  return (
    <>
      <label>一覧</label>
      <div className={"memo-list"}>
        <MemoList />
      </div>
      <div className={"memo-view-section"}>
        <ViewSection />
      </div>
    </>
  );
}
