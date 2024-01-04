import { EditableArea } from "@magnolia/react-editor";

export interface StaysureColumnViewProps {
  columnHeader:object | null;
  staysureColumnView: object | null;
}

const StaysureColumnView = ({
  staysureColumnView = null,
  columnHeader=null
}: StaysureColumnViewProps): JSX.Element => {
  return ( <div className="pl-40 pr-40 2xl:pl-72 2xl:pr-72">
    {columnHeader&&<EditableArea className="flex text-left pb-3 font-semibold" content={columnHeader} />}
  {staysureColumnView&&<EditableArea className="flex flex-wrap  border-2 mb-5" content={staysureColumnView} />}

</div>);
};

export { StaysureColumnView };
