
interface HeadlineProps{
    text:string,
    styleClass:string
  }

export default function Headline({
    text,
    styleClass
  }:HeadlineProps) {
    return (<h2 className={`${styleClass} font-dmserif p-1`} >{text}</h2>)
}
