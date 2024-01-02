import { EditableArea } from "@magnolia/react-editor";

interface NavigationBlockProps {
  navigationBlock: object | null;
}

const NavigationBlock = ({ navigationBlock }: NavigationBlockProps) => {
  return (
    <div className="grid bg-white text-center ">
      <EditableArea className="" content={navigationBlock} />

      {/* <h1 className="text-center text-3xl px-5 mt-2 text-violet-900">
        {" 111111 "}
        <span className="block text-2xl">{"22222"}</span>
      </h1>
      <p className="text-center px-6">{"3333333"}</p>
      <div className="py-3">
        <button>{"cardInfo.btn"}</button>
      </div> */}
    </div>
  );
};

export { NavigationBlock };
