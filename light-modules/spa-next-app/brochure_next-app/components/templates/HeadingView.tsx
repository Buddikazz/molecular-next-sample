import { EditableArea } from "@magnolia/react-editor";

export interface HeadingViewProps {
  headingView: string;
}

const HeadingView = ({ headingView }: HeadingViewProps) => {
  return (
    <div>
      {headingView && <EditableArea name="heading" content={headingView} />}
    </div>
  );
};

export default HeadingView;
