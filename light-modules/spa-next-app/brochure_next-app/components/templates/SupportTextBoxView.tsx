import { EditableArea } from "@magnolia/react-editor";

interface MetadataType {
  "mgnl:template": string;
}

export interface SupportTextBoxViewProps {
  supportTextBoxView: object | null;
  metadata: MetadataType;
}

function SupportTextBoxView({
  supportTextBoxView = null,
  metadata,
}: SupportTextBoxViewProps): JSX.Element {
  return (
    <EditableArea
      className="flex flex-wrap justify-center my-5"
      content={supportTextBoxView}
      parentTemplateId={metadata["mgnl:template"]}
    />
  );
}

export { SupportTextBoxView };
