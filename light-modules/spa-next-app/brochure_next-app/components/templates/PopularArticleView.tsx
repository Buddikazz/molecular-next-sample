import { EditableArea } from '@magnolia/react-editor';

export interface PopularArticleViewProps {
    popularArticle: object | null,
}

const PopularArticleView = ({
    popularArticle = null,

}: PopularArticleViewProps): JSX.Element => {
    return (
        <div className="pt-10 px-0 xl:pl-40 xl:pr-40">
            {popularArticle && <EditableArea className="flex flex-wrap" content={popularArticle} />}
        </div>
    );
}
export {
    PopularArticleView
}

