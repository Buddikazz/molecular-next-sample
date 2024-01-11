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
    <div className="px-5 md:w-1/3 lg:w-1/3 h-72 ">
      <div className="p-5 text-center shadow-xl h-full bg-white">
        <div className="items-center justify-center border-b-2 border-b-violet-900">
          {steperHeader && (
            <EditableArea
              className="text-base text-purple-900 p-2  font-dmserif font-semibold"
              content={steperHeader}
            />
          )}
        </div>
        {steperContent && (
          <EditableArea className="font-dmserif pr-14 pl-14" content={steperContent} />
        )}
      </div>
    </div>
  );
};

export { HeaderSteper };
