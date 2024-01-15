import { EditableArea } from "@magnolia/react-editor";
import { TrustpilotWidget } from "../molecules/TrustPilotComponent";
import { TrustpilotBlock } from "../molecules/TrustpilotBlock";

export interface TrustBlockViewProps {
  header: object | null;
  trustBlockView: object | null;
}

const TrustBlockView = ({
  trustBlockView = null,
  header = null,
}: TrustBlockViewProps): JSX.Element => {
  return (
    <div className="pl-40 pr-40 2xl:pl-72 2xl:pr-72 mt-10">
      {header && (
        <EditableArea
          className="flex text-center justify-center pb-3 font-bold"
          content={header}
        />
      )}
      {trustBlockView && (
        <div className="flex flex-row  mb-5 divide-x  w-full cols-2">
          <div className=" md:flex-col basis-1/3">
            <div className="justify-center items-center ">
              <TrustpilotBlock link={'scscscsc'}/>
            </div>
          </div>
          <EditableArea className="flex md:w-1/2" content={trustBlockView} />
        </div>
      )}
    </div>
  );
};

export { TrustBlockView };
