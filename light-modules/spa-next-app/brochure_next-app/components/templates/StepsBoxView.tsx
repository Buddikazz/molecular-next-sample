import { EditableArea } from "@magnolia/react-editor";

export interface StepsBoxViewProps {
    stepsbox: object | null;
    stepsBoxTitle: object | null;
    stepsBoxButton: object | null;
}

const StepsBoxView = ({
    stepsbox = null,
    stepsBoxTitle = null,
    stepsBoxButton = null,
}: StepsBoxViewProps): JSX.Element => {
    return (
        <div className="bg-oceanBlue py-[20px] pl-10 pr-10 rounded px-0 xl:pl-40 xl:pr-40">
            <div className="text-white flex justify-center items-center py-10 text-3xl font-light">
                {stepsBoxTitle && (
                    <EditableArea content={stepsBoxTitle} />
                )}
            </div>
            {stepsbox && <EditableArea className="flex flex-wrap" content={stepsbox}/>}
            <div className="ml-1">
                {stepsBoxButton && (
                    <EditableArea className="flex justify-center" content={stepsBoxButton} />
                )}
            </div>
         </div>
    );
};

export { StepsBoxView };

