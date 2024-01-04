import { EditableArea } from "@magnolia/react-editor";

export interface JumplinksViewProps {
    jumplinks: object | null;
}

const JumplinksView = ({
    jumplinks = null,
}: JumplinksViewProps): JSX.Element => {
    return (
        <EditableArea className="mt-10 items-center justify-center" content={jumplinks}/>
    );
};

export { JumplinksView };