import { EditableArea } from "@magnolia/react-editor";

export interface PopularArticleViewProps {
  popularArticle: object | null;
}

function PopularArticleView({
  popularArticle = null,
}: PopularArticleViewProps): JSX.Element {
  return (
    <div className="pt-10">
      {popularArticle && (
        <EditableArea className="flex flex-wrap" content={popularArticle} />
      )}
    </div>
  );
}
export { PopularArticleView };
