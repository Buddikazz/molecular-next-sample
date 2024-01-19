import { EditableArea } from "@magnolia/react-editor";

export interface JumplinkProps {
  linkText: object | null;
  buttonText: object | null;
}

function Jumplink({
  linkText = null,
  buttonText = null,
}: JumplinkProps): JSX.Element {
  return (
    <div className="flex flex-row justify-center">
      <div className="hidden md:flex flex-row mt-5 font-ciutadella text-[#aaaaaa] cursor-pointer sticky top-0 bg-white z-10">
        {linkText && (
          <EditableArea
            className="transition-all duration-300"
            content={linkText}
          />
        )}
      </div>
      <div className="ml-5">
        {buttonText && <EditableArea content={buttonText} />}
      </div>
    </div>
  );
}

export { Jumplink };
