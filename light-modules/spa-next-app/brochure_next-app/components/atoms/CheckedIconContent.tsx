interface CheckedIconProps {
  richText: string;
}

export default function CheckedIconContent({ richText }: CheckedIconProps) {
  return (
    <>
      {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
      <p className="font-ciutadella p-1 text-white">&#10004; {richText}</p>
    </>
  );
}
