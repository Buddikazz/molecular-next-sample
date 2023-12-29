import { EditableArea } from "@magnolia/react-editor";

export interface SteperViewProps {
  stepperView: object | null;
  metadata:any
}

const SteperView = ({
  stepperView = null,
  metadata
}: SteperViewProps): JSX.Element => {
  return (
      <EditableArea className="-mx-3 flex flex-wrap p-2 mt-5" content={stepperView} parentTemplateId={metadata['mgnl:template']}/>
    );
};

export { SteperView };
