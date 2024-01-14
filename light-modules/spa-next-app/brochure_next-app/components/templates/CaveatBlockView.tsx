import { EditableArea } from "@magnolia/react-editor";

export interface CaveatBlockProps {
  caveatBlockView: string;
}

const CaveatBlockView = ({ caveatBlockView }: CaveatBlockProps) => {
  return (
    <div className="px-0 xl:pl-40 xl:pr-40">
      {caveatBlockView && (
        <EditableArea name="caveatBlock" content={caveatBlockView} />
        // &#9733; - Astric (star)
        // &#9840; - west syriac cross
        // &#163; - pound sign
      )}
    </div>
  );
};

export default CaveatBlockView;
