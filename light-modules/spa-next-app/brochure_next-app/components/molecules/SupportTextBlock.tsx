import { EditableArea } from "@magnolia/react-editor";

export interface SupportTextBlockProps {
  supportTextBlock: object | null;
}

const SupportTextBlock = ({
  supportTextBlock = null,
}: SupportTextBlockProps): JSX.Element => {
  return (
    <div className="flex px-2 md:w-1/2 lg:w-1/3 h-70 text-center items-center justify-center">
      <div className="flex p-5 justify-center border-r border-r-gray-400">
          {supportTextBlock && (
            <EditableArea
            className="flex flex-col"
              content={supportTextBlock}
            />
          )}
      </div>
    </div>
  );
};

export { SupportTextBlock };
