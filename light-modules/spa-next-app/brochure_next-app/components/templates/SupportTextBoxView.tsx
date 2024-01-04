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
    <div className="pl-40 pr-40 2xl:pl-72 2xl:pr-72">
      <EditableArea
        className="-mx-3 flex flex-wrap p-2 mt-5"
        content={supportTextBoxView}
        parentTemplateId={metadata["mgnl:template"]}
      />
    </div>
  );
};

export { SupportTextBoxView };
