import { EditableArea } from "@magnolia/react-editor";

export interface ColumnItemProps {
  tableRow: object | null;
}

const TableRow = ({
    tableRow = null,
}: ColumnItemProps): JSX.Element => {
  return (
    <tbody className="even:bg-gray-200 odd:bg-white border-b border-gray-400">

    <tr className="w-screen">
        <EditableArea content={tableRow} />
        </tr>
    </tbody>
  );
};

export { TableRow };