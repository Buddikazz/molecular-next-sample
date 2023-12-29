"use client";

import React from "react";
import { TableNameCol } from "./TableNameCol";

interface Procedure {
  name: string;
  type: string;
}

interface Props {
  data: Procedure[];
}

const Table = ({ data }: Props) => {
  return (
    <div className="w-full overflow-x-auto rounded-md shadow-md">
      <table className="w-full text-sm text-left text-gray-700 ">
        {/* <thead>
          <tr className="border-b">
            <th className="py-4 px-6 font-bold text-center text-gray-900 whitespace-nowrap">
              Name
            </th>
            <th className="py-4 px-6 font-bold text-center text-gray-900 whitespace-nowrap">
              Type
            </th>
          </tr>
        </thead> */}
        <tbody>
          {data.map((procedure, index) => (
            <tr
              key={procedure.name}
              className="border-b"
              style={{ backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white" }}
            >
              <TableNameCol tableName={""} />
              {/* <td className="py-4 px-6">{procedure.name}</td>
              <td className="py-4 px-6">{procedure.type}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
