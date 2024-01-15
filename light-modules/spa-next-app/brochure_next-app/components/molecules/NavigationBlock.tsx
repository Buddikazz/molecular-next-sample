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
    <div className="grid bg-white text-center">
      <div className="">
        {navigationTopBlock && (
          <EditableArea
            style={{ maxHeight:200}}
            content={navigationTopBlock}
          />
        )}
      </div>
      <div className="my-3 px-5">
        {navigationBottomBlock && (
          <EditableArea className="" content={navigationBottomBlock} />
        )}{" "}
      </div>
    </div>
  );
};

export { NavigationBlock };
