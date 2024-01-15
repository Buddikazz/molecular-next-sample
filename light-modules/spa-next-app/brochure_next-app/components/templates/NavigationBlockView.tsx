import { EditableArea } from "@magnolia/react-editor";

export interface NavigationBlockViewProps {
  navigationBlockHeaderContent: object | null;
  navigationBlockView: object | null;
}

const NavigationBlockView = ({
  navigationBlockHeaderContent = null,
  navigationBlockView = null,
}: NavigationBlockViewProps) => {
  return (
    <div className="text-center space-y-7 my-10">
      <div>
        {navigationBlockHeaderContent && (
          <EditableArea content={navigationBlockHeaderContent} />
        )}{" "}
      </div>

      <div>
        {navigationBlockView && (
          <EditableArea
            className="grid md:gid md:grid-cols-2 gap-8 lg:grid lg:grid-cols-3 "
            content={navigationBlockView}
          />
        )}
      </div>


    </div>
  );
};

export { NavigationBlockView };
