import { EditableArea } from "@magnolia/react-editor";

export interface TrustBlockProps {
  tBlockImage: object | null;
  tBlockText: object | null;
}

function TrustBlock({
  tBlockImage = null,
  tBlockText = null,
}: TrustBlockProps): JSX.Element {
  return (
    <div className="flex md:flex-col md:w-1/3  mx-auto ">
      <div className="justify-center items-center ">
        {tBlockImage && (
          <div className="flex justify-center items-center ">
            <EditableArea className="p-2" content={tBlockImage} />
          </div>
        )}

        {tBlockText && (
          <EditableArea
            className="p-1 font-serif text-lg text-center"
            content={tBlockText}
          />
        )}
      </div>
    </div>
  );
}

export { TrustBlock };
