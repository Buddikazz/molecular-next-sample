import { EditableArea } from "@magnolia/react-editor";

export interface TrustBlockProps {
  tBlockImage: object | null;
  tBlockText: object | null;
}

const TrustBlock = ({
  tBlockImage = null,
  tBlockText = null,
}: TrustBlockProps): JSX.Element => {
  console.log(tBlockImage);
  console.log("object");
  return (
      <div className="flex flex-col w-full mx-5">
        {tBlockImage && (
          <div className="flex justify-start items-start h-full">
            <EditableArea className="p-2" content={tBlockImage} />
          </div>
        )}

        {tBlockText && (
          <EditableArea
            className="flex p-1 font-serif text-lg justify-end text-end"
            content={tBlockText}
          />
        )}
      </div>
  );
};

export { TrustBlock };
