import { EditableArea } from "@magnolia/react-editor";

export interface BlogDetailsProps {
  blogDetailsView: string;
}

function BlogDetailsView({ blogDetailsView }: BlogDetailsProps) {
  return (
    <div>
      {blogDetailsView && (
        <EditableArea
          name="caveatBlock"
          className="italic"
          content={blogDetailsView}
        />
        // &#9733; - Astric (star)
        // &#9840; - west syriac cross
        // &#163; - pound sign
      )}
    </div>
  );
}

export default BlogDetailsView;
