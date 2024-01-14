import { EditableArea } from "@magnolia/react-editor";

export interface TrustBlockViewProps {
    header: object | null;
    trustBlockView: object | null;
}

const TrustBlockView = ({
    trustBlockView = null,
    header = null
}: TrustBlockViewProps): JSX.Element => {
    return (<div className="px-0 xl:pl-40 xl:pr-40">
        {header && <EditableArea className="flex text-center justify-center pb-3 font-bold" content={header} />}
        {trustBlockView && <EditableArea className="flex flex-wrap mb-5 divide-x  grid-cols-3 divide-slate-500 " content={trustBlockView} />}

    </div>);
};

export { TrustBlockView };
