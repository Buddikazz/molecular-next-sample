
interface checkedIconProps {
    richText: string;
}

export default function CheckedIconContent({ richText }: checkedIconProps) {
    return (
        <>
            {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
            <p className={'font-ciutadella p-1 text-white min-w-40'}>
                &#10004; {richText}
            </p>
        </>

    )
}