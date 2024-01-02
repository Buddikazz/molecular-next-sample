import { EditableArea } from "@magnolia/react-editor";

export interface NavigationBlockViewProps {
  navigationBlockView: object | null;
}

const NavigationBlockView = ({
  navigationBlockView = null,
}: NavigationBlockViewProps) => {
  return (
    <div className="text-center space-y-7">
      <h1 className="text-2xl text-violet-900 font-bold">
        Travel insurance tailored to you
      </h1>
      <p className="text-base">
        We have different types of cover for whatever you have planned with most
        medical conditions covered
      </p>

      <EditableArea
        //   className="-mx-3 flex flex-wrap p-2 mt-5"
        className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl"
        content={navigationBlockView}
      />
    </div>
  );
};

export { NavigationBlockView };
