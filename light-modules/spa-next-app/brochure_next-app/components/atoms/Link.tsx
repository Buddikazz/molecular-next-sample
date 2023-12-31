interface LinkProps{
    url:string,
    text:string,
    styleClass:string
  }

export default function Link({
    url,
    text,
    styleClass
  }:LinkProps) {
    return (<a className={`${styleClass} font-dmserif p-1`} href={url}>{text}</a>)
}