import { EditableArea } from "@magnolia/react-editor";

export interface StaysureColumnViewProps {
  staysureColumnView: object | null;
}

const StaysureColumnView = ({
  staysureColumnView = null,
}: StaysureColumnViewProps): JSX.Element => {
  return <EditableArea className="flex flex-wrap p-2 mt-5" content={staysureColumnView} />;
};

export { StaysureColumnView };
