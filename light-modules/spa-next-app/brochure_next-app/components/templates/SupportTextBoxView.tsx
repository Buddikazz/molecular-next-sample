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
      className="-mx-3 flex flex-wrap p-2 mt-5"
      content={supportTextBoxView}
      parentTemplateId={metadata["mgnl:template"]}
    />
  );
};

export { SupportTextBoxView };
