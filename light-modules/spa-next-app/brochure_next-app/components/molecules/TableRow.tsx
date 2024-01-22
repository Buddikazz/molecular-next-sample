import { EditableArea } from "@magnolia/react-editor";

export interface ColumnItemProps {
  tableRow: object | null;
}

function TableRow({ tableRow = null }: ColumnItemProps): JSX.Element {
  return (
    <EditableArea
      className="flex flex-row  w-full  even:bg-slate-200 odd:bg-white"
      content={tableRow}
    />
  );
}

export default TableRow;
