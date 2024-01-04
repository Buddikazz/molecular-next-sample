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
    <div className="text-center space-y-7 bg-zinc-100">
      <div>
        {navigationBlockHeaderContent && (
          <EditableArea content={navigationBlockHeaderContent} />
        )}{" "}
      </div>

      {navigationBlockView && (
        <EditableArea
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 mx-auto px-3 max-w-6xl"
          content={navigationBlockView}
        />
      )}
    </div>
  );
};

export { NavigationBlockView };
