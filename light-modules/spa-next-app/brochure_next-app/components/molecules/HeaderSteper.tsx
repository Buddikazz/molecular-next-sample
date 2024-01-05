import { EditableArea } from "@magnolia/react-editor";

export interface HeaderSteperProps {
  steperHeader: object | null;
  steperContent: object | null;
}

const HeaderSteper = ({
  steperHeader = null,
  steperContent = null,
}: HeaderSteperProps): JSX.Element => {
  return (
    <div className="px-4 md:w-1/2 lg:w-1/3 h-70 ">
      <div className="p-5 text-center shadow-xl h-full">
        <div className="items-center justify-center border-b-2 border-b-violet-900">
          {steperHeader && (
            <EditableArea
              className="text-base text-purple-900 p-2 font-bold font-dmserif font-semibold"
              content={steperHeader}
            />
          )}
        </div>
        {steperContent && (
          <EditableArea className="font-dmserif p-1" content={steperContent} />
        )}
      </div>
    </div>
  );
};

export { HeaderSteper };
