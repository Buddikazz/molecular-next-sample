interface LinkProps {
  url: string,
  text: string,
  styleClass: string,
  checkboxUnderline: any,
}

export default function Link({
  url,
  text,
  styleClass,
  checkboxUnderline
}: LinkProps) {
  return (<a className={`${styleClass} proximanova p-1  ${checkboxUnderline && "underline"}`} href={url}>{text}</a>)
}