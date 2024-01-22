import { EditableArea } from "@magnolia/react-editor";

export interface CTAButtonViewProps {
  ctaButtonView: string;
}

function CTAButtonView({ ctaButtonView }: CTAButtonViewProps) {
  return (
    <div>
      {ctaButtonView && (
        <EditableArea name="ctaButton" content={ctaButtonView} />
      )}
    </div>
  );
}

export default CTAButtonView;
