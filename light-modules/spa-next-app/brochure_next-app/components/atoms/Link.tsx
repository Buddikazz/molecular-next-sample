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
    return (<a className={`${styleClass} proximanova p-1 `} href={url}>{text}</a>)
}