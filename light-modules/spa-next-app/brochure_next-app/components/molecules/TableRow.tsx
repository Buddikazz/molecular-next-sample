import { EditableArea } from "@magnolia/react-editor";

export interface ColumnItemProps {
  tableRow: object | null;
}

const TableRow = ({
  tableRow = null,
}: ColumnItemProps): JSX.Element => {
  return (
    // <div className="flex w-screen even:bg-slate-500 odd:bg-white">
    <EditableArea className="flex flex-row  w-full  even:bg-slate-200 odd:bg-white" content={tableRow} />
    // </div>
  );
};

export { TableRow };

//border divide-x border-gray-300