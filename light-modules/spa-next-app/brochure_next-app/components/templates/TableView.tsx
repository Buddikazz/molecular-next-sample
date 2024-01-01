import { EditableArea } from "@magnolia/react-editor";

export interface TableProps {
  tableView: object | null;
}

const TableView = ({ tableView = null }: TableProps): JSX.Element => {
  return (
    <div className="flex flex-col mb-5">
      <table className="table-fixed text-sm text-left rtl:text-right border-separate border border-gray-400">
        <tbody className="columns-2 ">
          <EditableArea content={tableView} />
        </tbody>
      </table>
    </div>
  );
};

export { TableView };
