import React from "react";

interface TableTypeColProps {
  tableType: string;
}

const TableTypeCol: React.FC<TableTypeColProps> = ({
  tableType,
}: TableTypeColProps) => {
  return <td className="py-4 px-6">{tableType}</td>;
};

export default TableTypeCol;
