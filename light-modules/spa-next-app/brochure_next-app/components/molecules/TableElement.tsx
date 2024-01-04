interface TableItemProps {
    textColour: string;
    textSize: string;
    bgColor:string
    text: string;
  }
  
  export default function TableItem({
    textColour='black',
    textSize='sm',
    text,
    bgColor='white'
  }: TableItemProps) {
    return (
      <td
        className={`px-1 py-2 w-screen text-start font-dmserif text-${textSize} text-${textColour} bg-${bgColor}`}
      >
        {text}
      </td>
    );
  }