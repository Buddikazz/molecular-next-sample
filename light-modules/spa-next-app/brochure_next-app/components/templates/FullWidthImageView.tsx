import { EditableArea } from "@magnolia/react-editor";

export interface FullWidthImageViewProps {
  FullImage: object | null;
}

function FullWidthImageView({ FullImage }: FullWidthImageViewProps) {
  return (
    <div className="flex justify-center items-center my-10 w-auto bg-white p-5">
      {Image && <EditableArea className="mx-auto w-full" content={FullImage} />}
    </div>
  );
}

export { FullWidthImageView };
