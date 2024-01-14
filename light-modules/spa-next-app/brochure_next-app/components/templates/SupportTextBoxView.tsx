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
      className="-mx-3 flex flex-wrap p-2 mt-5 px-0 xl:pl-40 xl:pr-40"
      content={supportTextBoxView}
      parentTemplateId={metadata["mgnl:template"]}
    />
  );
};

export { SupportTextBoxView };
