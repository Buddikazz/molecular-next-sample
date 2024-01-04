import { EditableArea } from "@magnolia/react-editor";

export interface ColumnTextBoxViewProps {
  columnTextHeaderBoxView: object | null;
  columnTextLeftContentBoxView: object | null;
  columnTextRightContentBoxView: object | null;
  columnTextRightContentImageBoxView: object | null;
}

const ColumnTextBoxView = ({
  columnTextHeaderBoxView = null,
  columnTextLeftContentBoxView = null,
  columnTextRightContentBoxView = null,
  columnTextRightContentImageBoxView = null,
}: ColumnTextBoxViewProps) => {
  return (
    <div className="">
      {columnTextHeaderBoxView && (
        <EditableArea content={columnTextHeaderBoxView} />
      )}{" "}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 space-x-5 ">
        <div>
          {columnTextLeftContentBoxView && (
            <EditableArea content={columnTextLeftContentBoxView} />
          )}
        </div>
        <div>
          {columnTextRightContentBoxView && (
            <EditableArea content={columnTextRightContentBoxView} />
          )}
          <div className="w-1/4 ">
            {columnTextRightContentImageBoxView && (
              <EditableArea
                content={columnTextRightContentImageBoxView}
                style={{ height: "100%", width: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnTextBoxView;
