import { EditableArea } from "@magnolia/react-editor";

export interface ColumnItemProps {
  tableRow: object | null;
  rowType: string;
}

function TableRow({
  tableRow = null,
  rowType = "tbody",
}: ColumnItemProps): JSX.Element {
  return (
    <EditableArea
      className={`flex flex-row  w-full  ${rowType === "tbody" ? "even:bg-slate-200 odd:bg-white" : ""}`}
      content={tableRow}
    />
  );
}

export { TableRow };

// border divide-x border-gray-300
