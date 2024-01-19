import { EditableArea } from "@magnolia/react-editor";

export interface NumberSteperProps {
  steperNumber: object | null;
  steperHeader: object | null;
  steperContent: object | null;
}

function NumberSteper({
  steperContent = null,
  steperNumber = null,
  steperHeader = null,
}: NumberSteperProps): JSX.Element {
  return (
    <div className="px-2 md:w-1/2 lg:w-1/4 h-70 bg-white  p-2">
      <div className="flex  mb-3 md:mb-3">
        {steperNumber && (
          <EditableArea
            className="m-1 flex h-10 w-16  2xl:w-10 items-center justify-center rounded-full bg-violet-900"
            content={steperNumber}
          />
        )}
        {steperHeader && (
          <EditableArea className="font-dmserif w-64" content={steperHeader} />
        )}
      </div>
      {steperContent && (
        <EditableArea className="font-dmserif" content={steperContent} />
      )}
    </div>
  );
}

export { NumberSteper };
