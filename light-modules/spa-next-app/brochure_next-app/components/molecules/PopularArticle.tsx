import { EditableArea } from "@magnolia/react-editor";

interface PopularArticleProps {
  articleImage: string | null;
  articleLinkText: string | null;
}

function PopularArticle({
  articleImage,
  articleLinkText,
}: PopularArticleProps) {
  return (
    <div className="w-80 ml-10 mb-10 bg-light-gray">
      {articleImage && <EditableArea content={articleImage} />}
      <div className="mt-2 mb-2">
        {articleLinkText && (
          <EditableArea className="p-2" content={articleLinkText} />
        )}
      </div>
    </div>
  );
}

export default PopularArticle;
