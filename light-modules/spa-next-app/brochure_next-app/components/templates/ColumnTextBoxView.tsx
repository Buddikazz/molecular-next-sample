import { EditableArea } from "@magnolia/react-editor";

export interface ColumnTextBoxViewProps {
  columnTextHeaderBoxView: object | null;
  columnTextLeftContentBoxView: object | null;
  columnTextRightContentBoxView: object | null;
}

const ColumnTextBoxView = ({
  columnTextHeaderBoxView = null,
  columnTextLeftContentBoxView = null,
  columnTextRightContentBoxView = null,
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
          

        </div>
      </div>
    </div>
  );
};

export default ColumnTextBoxView;
