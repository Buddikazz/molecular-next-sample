import { EditableArea } from "@magnolia/react-editor";

export interface HeadingViewProps {
  headingView: string;
}

const HeadingView = ({ headingView }: HeadingViewProps) => {
  return (
    <div className="px-0 xl:pl-40 xl:pr-40">
      {headingView && <EditableArea name="heading" content={headingView} />}
    </div>
  );
};

export default HeadingView;
