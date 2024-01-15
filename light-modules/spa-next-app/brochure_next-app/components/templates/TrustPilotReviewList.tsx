import { EditableArea } from "@magnolia/react-editor";
import { TrustpilotWidget } from "../molecules/TrustPilotComponent";
import { TrustpilotBlock } from "../molecules/TrustpilotBlock";

export interface TrustBlockListViewProps {
  header: object | null;
  trustBlockView: object | null;
}

const TrustBlockListView = ({
}: TrustBlockListViewProps): JSX.Element => {
  return (
    <div className="pl-40 pr-40 2xl:pl-72 2xl:pr-72 mt-10">
      
    </div>
  );
};

export { TrustBlockListView };