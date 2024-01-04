import { EditableArea } from "@magnolia/react-editor";

export interface JumplinksViewProps {
    jumplinks: object | null;
}

const JumplinksView = ({
    jumplinks = null,
}: JumplinksViewProps): JSX.Element => {
    return (
        <EditableArea className="mt-10 items-center justify-center pl-40 pr-40 2xl:pl-72 2xl:pr-72" content={jumplinks}/>
    );
};

export { JumplinksView };