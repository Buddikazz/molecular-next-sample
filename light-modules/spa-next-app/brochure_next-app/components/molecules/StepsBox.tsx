import { EditableArea } from "@magnolia/react-editor";

interface StepsBoxProps {
  boxNumber: number | null;
  boxTitle: string | null;
  boxContent: string | null;
}

function StepsBox({ boxNumber, boxTitle, boxContent }: StepsBoxProps) {
  return (
    <div className="md:w-1/2 lg:w-1/2">
      <div className="grid grid-cols-1 gap-2">
        <div className="flex flex-row">
          <div className="mr-3">
            {boxNumber && <EditableArea content={boxNumber} />}
          </div>
          <div className="flex flex-col mt-[-10px]">
            {boxTitle && (
              <EditableArea
                className="text-white text-xl pb-3"
                content={boxTitle}
              />
            )}
            {boxContent && (
              <EditableArea
                className="text-white font-light text-base pb-14"
                content={boxContent}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsBox;
