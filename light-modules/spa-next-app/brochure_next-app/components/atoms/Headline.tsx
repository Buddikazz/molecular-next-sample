interface HeadlineProps{
    text:string,
    styleClass:string
  }

export default function Headline({
    text,
    styleClass
  }:HeadlineProps) {
    console.log("*************",text)
    return (<h2 className={`${styleClass} text-2xl font-dmserif p-1`} >{text}</h2>)
}
