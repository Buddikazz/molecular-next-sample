interface TableItemProps {
  columnOne: string;
  columnTwo: string;
}

export default function TableItem({
  columnOne,
  columnTwo
}: TableItemProps) {
  return (
    <tbody className="even:bg-gray-200 odd:bg-white border-b border-gray-400">
      <tr className="w-screen">
        <td scope="row" className="px-1 py-2 w-screen text-start whitespace-nowrap text-sm  sm:table-cell">
          {columnOne}
        </td>
        <td className=" px-1 py-2 text-start w-screen whitespace-nowrap text-sm sm:table-cell">
          {columnTwo}
        </td>
      </tr>
    </tbody>
  );
}
