import { EditableArea } from "@magnolia/react-editor";

export interface SupportTextBlockProps {
  supportTextBlock: object | null;
}

function SupportTextBlock({
  supportTextBlock = null,
}: SupportTextBlockProps): JSX.Element {
  return (
    <div className=" grid tb:grid-rows-2 xl:grid-rows-3  text-center ">
      <div className="p-5 md:border-r  lg:border-r-gray-400 w-auto tb:w-full">
        {supportTextBlock && (
          <EditableArea className="flex flex-col" content={supportTextBlock} />
        )}
      </div>
    </div>
  );
}

export { SupportTextBlock };
