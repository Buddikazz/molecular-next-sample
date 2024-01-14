"use client";
import { EditableArea } from "@magnolia/react-editor";

export interface PolicyTableProps {
  header: object | null
  tableHeader: object | null
  tableBody: object | null
  textWithLink: object | null
  ctaButton: object | null
}

const PolicyTableView = ({ header = null, tableHeader = null, tableBody = null, textWithLink = null, ctaButton = null }: PolicyTableProps): JSX.Element => {
  return (
    <div className="bg-white px-0 xl:pl-40 xl:pr-40">
      {header && <EditableArea content={header} />}

      <div className="min-w-full  items-start ">

        {/* tableHead */}
        <EditableArea className="flex font-bold" content={tableHeader} />

        {/* tablebody */}
        <EditableArea className="flex flex-col " content={tableBody} />

      </div>
      <EditableArea className="mt-5 " content={textWithLink} />
      <EditableArea className="mt-5" content={ctaButton} />
    </div>

  );
};

export { PolicyTableView };
