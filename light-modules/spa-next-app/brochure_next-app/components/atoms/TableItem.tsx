interface TableItemProps{
    columnOne:string,
    columnTwo:string,
    styleClass:string,
  }

export default function TableItem({
    columnOne,
    columnTwo,
    styleClass
  }:TableItemProps) {
    
    return (<tr className="w-screen">
        <td className="border  w-1/2 border-slate-300">{columnOne}</td>
        <td className="border w-full border-slate-300">{columnTwo}</td>
      </tr>)
}