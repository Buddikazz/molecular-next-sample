import { EditableArea } from "@magnolia/react-editor";

export interface JumplinksViewProps {
    jumplinks: object | null;
}

const JumplinksView = ({
    jumplinks = null,
}: JumplinksViewProps): JSX.Element => {
    return (
        <EditableArea className="mt-10 items-center justify- px-0 xl:pl-40 xl:pr-40" content={jumplinks}/>
    );
};

export { JumplinksView };