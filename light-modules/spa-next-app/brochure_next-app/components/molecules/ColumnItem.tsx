import { EditableArea } from "@magnolia/react-editor";

export interface ColumnItemProps {
  itemContent: object | null;
}

const ColumnItem = ({
  itemContent = null,
}: ColumnItemProps): JSX.Element => {
  return (
    <div className="px-4 md:w-1/2 lg:w-1/3 h-70 ">
      <div className="p-5 text-center shadow-xl h-full">
        {itemContent && (
          <EditableArea className="font-dmserif" content={itemContent} />
        )}
      </div>
    </div>
  );
};

export { ColumnItem };
