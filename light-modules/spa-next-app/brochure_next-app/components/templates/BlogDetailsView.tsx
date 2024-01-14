import { EditableArea } from "@magnolia/react-editor";

export interface BlogDetailsProps {
  blogDetailsView: string;
}

const BlogDetailsView = ({ blogDetailsView }: BlogDetailsProps) => {
  return (
    <div className="px-0 xl:pl-40 xl:pr-40">
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
};

export default BlogDetailsView;
