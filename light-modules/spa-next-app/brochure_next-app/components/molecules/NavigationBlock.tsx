import { EditableArea } from "@magnolia/react-editor";

interface NavigationTopBlockProps {
  navigationTopBlock: object | null;
  navigationBottomBlock: object | null;
}

const NavigationBlock = ({
  navigationTopBlock,
  navigationBottomBlock,
}: NavigationTopBlockProps) => {
  return (
    <div className="grid bg-white shadow-xl text-center">
      <div className="h-[200px]">
        {navigationTopBlock && (
          <EditableArea
            style={{ maxHeight:200}}
            content={navigationTopBlock}
          />
        )}
      </div>
      <div className="my-3 px-5 flex items-stretch">
        {navigationBottomBlock && (
          <EditableArea
            className="flex flex-col"
            content={navigationBottomBlock}
          />
        )}{" "}
      </div>
    </div>
  );
};

export { NavigationBlock };
