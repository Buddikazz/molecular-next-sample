import { EditableArea } from "@magnolia/react-editor";

export interface StaysureColumnViewProps {
  columnHeader: object | null;
  staysureColumnView: object | null;
}

function StaysureColumnView({
  staysureColumnView = null,
  columnHeader = null,
}: StaysureColumnViewProps): JSX.Element {
  return (
    <div>
      {columnHeader && (
        <EditableArea
          className="flex text-left pb-3 font-semibold"
          content={columnHeader}
        />
      )}
      {staysureColumnView && (
        <EditableArea
          className="flex flex-wrap  border-2 mb-5"
          content={staysureColumnView}
        />
      )}
    </div>
  );
}

export { StaysureColumnView };
