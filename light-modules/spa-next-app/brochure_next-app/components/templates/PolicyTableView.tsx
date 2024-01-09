"use client";
import { EditableArea } from "@magnolia/react-editor";

export interface PolicyTableProps {
  header: object | null
  tableHeader: object | null
  tableBody: object | null
}

const PolicyTableView = ({ header = null, tableHeader = null, tableBody = null }: PolicyTableProps): JSX.Element => {
  return (
    <div className="">
      {header && <EditableArea content={header} />}
      {/* <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-sm"> */}
      {/* table */}
      <div className="min-w-full  items-start ">
        {/* tableHead */}

        <EditableArea className="flex font-bold" content={tableHeader} />

        {/* tablebody */}

        <EditableArea className="flex flex-col " content={tableBody} />

      </div>
    </div>

  );
};

export { PolicyTableView };
