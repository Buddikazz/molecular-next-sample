import { EditableArea } from "@magnolia/react-editor";

export interface SupportTextBoxViewProps {
  supportTextBoxView: object | null;
  metadata: any;
}

const SupportTextBoxView = ({
  supportTextBoxView = null,
  metadata,
}: SupportTextBoxViewProps): JSX.Element => {
  return (
    <EditableArea
      className="flex flex-wrap justify-center my-5"
      content={supportTextBoxView}
      parentTemplateId={metadata["mgnl:template"]}
    />
  );
};

export { SupportTextBoxView };
