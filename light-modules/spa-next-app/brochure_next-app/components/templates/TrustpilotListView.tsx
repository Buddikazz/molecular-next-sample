

export interface TrustpilotListProps {
  trustPilotListView: object | null;
}

function TrustpilotListView({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trustPilotListView = null,
}: TrustpilotListProps): JSX.Element {
  return (
    <div className="pl-40 pr-40 2xl:pl-72 2xl:pr-72 mt-10">
      {/* {trustPilotListView && <TrustpilotWidget variant={'list'} />} */}
    </div>
  );
}

export default TrustpilotListView;
