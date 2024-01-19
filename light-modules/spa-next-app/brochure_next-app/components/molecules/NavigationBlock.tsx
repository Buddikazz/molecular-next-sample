import { EditableArea } from "@magnolia/react-editor";

interface NavigationTopBlockProps {
  navigationTopBlock: object | null;
  navigationBottomBlock: object | null;
}

function NavigationBlock({
  navigationTopBlock,
  navigationBottomBlock,
}: NavigationTopBlockProps) {
  return (
    <div className="grid bg-white text-center">
      <div className="">
        {navigationTopBlock && (
          <EditableArea
            className="h-[225px] overflow-hidden"
            style={{ maxHeight: 225 }}
            content={navigationTopBlock}
          />
        )}
      </div>
      <div className="my-3 px-5">
        {navigationBottomBlock && (
          <EditableArea
            className="grid place-items-center"
            content={navigationBottomBlock}
          />
        )}{" "}
      </div>
    </div>
  );
}

export default NavigationBlock;
