import { EditableArea } from "@magnolia/react-editor";

export interface ColumnItemProps {
  itemContent: object | null;
}

function ColumnItem({ itemContent = null }: ColumnItemProps): JSX.Element {
  return (
    <div className="md:w-1/2 lg:w-1/4 h-70 justify-items-center text-center ">
      <div className="p-4 text-center border-r-2 h-full">
        {itemContent && (
          <EditableArea className="font-dmserif" content={itemContent} />
        )}
      </div>
    </div>
  );
}

export { ColumnItem };
