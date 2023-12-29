import React from "react";

interface TableNameColProps {
  tableName: string;
}

export function TableNameCol({ tableName }: TableNameColProps) {
  return <td className="py-4 px-6">{tableName}</td>;
}
