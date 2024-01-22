import { EditableArea } from "@magnolia/react-editor";

interface MetadataType {
  "mgnl:template": string;
}

export interface SteperViewProps {
  stepperView: object | null;
  metadata: MetadataType;
}

function SteperView({
  stepperView = null,
  metadata,
}: SteperViewProps): JSX.Element {
  return (
    <div className="pl-40 pr-40 2xl:pl-72 2xl:pr-72">
      <EditableArea
        className="-mx-3 flex flex-wrap p-2 mt-5"
        content={stepperView}
        parentTemplateId={metadata["mgnl:template"]}
      />
    </div>
  );
}

export { SteperView };
