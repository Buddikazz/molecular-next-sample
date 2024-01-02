interface LinkProps{
    url:string,
    text:string,
    styleClass?:string,
    marginLeft?:string,
    hoverTextColor?:string
  }

export default function Link({
    url,
    text,
    styleClass,
    marginLeft,
    hoverTextColor
  }:LinkProps) {
    return (<a className={`${styleClass} ml-${marginLeft} hover:text-${hoverTextColor} font-dmserif p-1`} href={url}>{text}</a>)

}