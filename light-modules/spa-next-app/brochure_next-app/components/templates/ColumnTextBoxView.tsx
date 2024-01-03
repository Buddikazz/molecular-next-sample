import { EditableArea } from "@magnolia/react-editor";

export interface ColumnTextBoxViewProps {
  columnTextHeaderBoxView: object | null;
  columnTextLeftContentBoxView: object | null;
  columnTextRightContentBoxView: object | null;
}

const ColumnTextBoxView = ({
  columnTextHeaderBoxView = null,
  columnTextLeftContentBoxView = null,
  columnTextRightContentBoxView = null,
}: ColumnTextBoxViewProps) => {
  return (
    <div className="">
      {columnTextHeaderBoxView && (
        <EditableArea content={columnTextHeaderBoxView} />
      )}{" "}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 space-x-5 ">
        <div>
          {columnTextLeftContentBoxView && (
            <EditableArea content={columnTextLeftContentBoxView} />
          )}
        </div>
        <div>
          {columnTextRightContentBoxView && (
            <EditableArea content={columnTextRightContentBoxView} />
          )}

          {/* <strong>
            Take out a policy as soon as you book your trip and you'll be
            covered for:
          </strong>
          <ul>
            <li>✔ Cancelling or cutting your holiday short </li>
            <li>✔ Emergency medical expenses - with 24-hour support </li>
            <li>✔ Travel delays and disruptions</li>
            <li>✔ Lost or damaged baggage </li>
            <li>✔ Lost or stolen cash </li>
            <li>✔ COVID-19 Cover</li>
          </ul>
          <p>
            You can cover most <a href="#">pre-existing conditions</a>, plus
            there's <a href="#">no upper age limit</a>. So, you can escape the
            every day with a tailored policy.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ColumnTextBoxView;
