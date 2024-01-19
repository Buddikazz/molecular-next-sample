import { EditableArea } from "@magnolia/react-editor";

export interface CaveatBlockProps {
  caveatBlockView: string;
}

function CaveatBlockView({ caveatBlockView }: CaveatBlockProps) {
  return (
    <div className="bg-white p-5">
      {caveatBlockView && (
        <EditableArea name="caveatBlock" content={caveatBlockView} />
        // &#9733; - Astric (star)
        // &#9840; - west syriac cross
        // &#163; - pound sign
      )}
    </div>
  );
}

export default CaveatBlockView;
