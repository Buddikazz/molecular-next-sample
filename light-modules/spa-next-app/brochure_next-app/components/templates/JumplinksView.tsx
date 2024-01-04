import { EditableArea } from "@magnolia/react-editor";

export interface JumplinksViewProps {
    jumplinks: object | null;
}

const JumplinksView = ({
    jumplinks = null,
}: JumplinksViewProps): JSX.Element => {
    return (
        <EditableArea content={jumplinks}/>
    );
};

export { JumplinksView };