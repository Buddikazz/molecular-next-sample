import { EditableArea } from "@magnolia/react-editor";

export interface CTAButtonViewProps {
  ctaButtonView: string;
}

const CTAButtonView = ({ ctaButtonView }: CTAButtonViewProps) => {
  return (
    <div className="px-0 xl:pl-40 xl:pr-40">
      {ctaButtonView && (
        <EditableArea name="ctaButton" content={ctaButtonView} />
      )}
    </div>
  );
};

export default CTAButtonView;
