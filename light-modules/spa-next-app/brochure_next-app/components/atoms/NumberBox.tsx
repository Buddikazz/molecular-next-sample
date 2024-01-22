interface NumberBoxProps {
  boxNumber: number;
}

function NumberBox({ boxNumber }: NumberBoxProps) {
  return (
    <div>
      <div className="flex-none">
        <div className="h-[76px] w-[68px] bg-white ml-10 pb-2 rounded flex items-center justify-center shadow-lg shadow-black-500/50">
          <p className="text-oceanBlue font-sans text-5xl font-light">
            {boxNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NumberBox;
