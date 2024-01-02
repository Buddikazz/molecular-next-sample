export interface ButtonProps {
    styleClass?: string,
    name: string,
}


export default function Button({
    styleClass = "",
    name = ""
}: ButtonProps) {
    return (
        <div className={` ${styleClass} w-40 flex items-center justify-center h-10 rounded-md bg-orange text-18 font-bold cursor-pointer hover:bg-dark-orange`} style={{ color: 'white' }}>
            <i className="fas fa-caret-right mr-4"></i>
            {name}
        </div>
    )
}
