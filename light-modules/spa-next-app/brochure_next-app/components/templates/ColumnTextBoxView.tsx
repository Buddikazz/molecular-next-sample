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
    <div className="px-0 xl:pl-40 xl:pr-40">
      <div className="my-5">
        {columnTextHeaderBoxView && (
          <EditableArea content={columnTextHeaderBoxView} />
        )}
      </div>
      <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
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
                className="mt-7"
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
