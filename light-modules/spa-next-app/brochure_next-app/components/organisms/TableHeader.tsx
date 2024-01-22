import { EditableArea } from "@magnolia/react-editor";

export interface ColumnItemProps {
  tableHeader: object | null;
}

function TableHeader({ tableHeader = null }: ColumnItemProps): JSX.Element {
  return (
    <thead className="even:bg-gray-200 odd:bg-white border-b border-gray-400">
      <EditableArea content={tableHeader} />
    </thead>
  );
}

export { TableHeader };
