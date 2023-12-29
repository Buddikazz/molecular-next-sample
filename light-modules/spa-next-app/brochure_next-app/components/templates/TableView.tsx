import { EditableArea } from "@magnolia/react-editor";

export interface TableViewProps {
  tableView: object | null;
}

const TableView = ({ tableView = null }: TableViewProps): JSX.Element => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      <div className=" m-auto py-3 col-span-1 text-center">
        {/* <h1 className="font-bold text-2xl">My Surgery List</h1> */}
      </div>
      <div className="col-span-2 p-5">
        {tableView && <EditableArea content={tableView} />}
        {/* <Table data={data} /> */}
      </div>
    </section>
  );
};

export { TableView };
