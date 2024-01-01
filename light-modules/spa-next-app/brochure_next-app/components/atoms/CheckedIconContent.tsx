import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleStop
} from "@fortawesome/free-solid-svg-icons";

interface checkedIconProps {
    richText: string;
}

export default function CheckedIconContent({ richText }: checkedIconProps) {
    return (
        <>
            {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
            <p className={'font-ciutadella p-1'}>
                &#10004; {richText}
            </p>
        </>

    )
}