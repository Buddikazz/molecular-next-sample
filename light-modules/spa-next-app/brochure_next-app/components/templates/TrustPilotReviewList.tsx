import { TrustpilotBlock } from "../organisms/TrustpilotBlock";

export interface TrustBlockListViewProps {
  logoType: string | null;
  listType: string | null;
  pageCount: number;
  quoteView: boolean;
}

function TrustBlockListView({
  logoType = null,
  listType = null,
  pageCount = 4,
  quoteView = false,
}: TrustBlockListViewProps): JSX.Element {
  if (quoteView) {
    return (
      <div className="mt-10 bg-slate-100">
        <TrustpilotBlock
          logoType={null}
          listType={null}
          pageCount={pageCount}
          quoteView
        />
      </div>
    );
  }
  return (
    <div className="pl-40 pr-40 2xl:pl-72 2xl:pr-72 mt-10">
      <TrustpilotBlock
        logoType={logoType}
        listType={listType}
        pageCount={pageCount}
        quoteView={false}
      />
    </div>
  );
}

export { TrustBlockListView };
