import { EditableArea } from "@magnolia/react-editor";

export interface TableProps {
  tableView: object | null;
  metadata:any
}

const TableView = ({ tableView = null, metadata }: TableProps): JSX.Element => {
  return (
    <div className="flex flex-col pl-40 pr-40 2xl:pl-72 2xl:pr-72">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-sm">
            <table className="min-w-full divide-y divide-gray-200 items-start border-t border-b border-gray-400">
              <tbody >
                <EditableArea  content={tableView} parentTemplateId={metadata['mgnl:template']}/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TableView };
