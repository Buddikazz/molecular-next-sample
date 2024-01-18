interface HeadlineProps {
    text: string;
    colourTextSelect: any;
    sizeTextSelect: any;
    checkboxBold: any;
    checkboxUnderline: any;
    fontTypeSelect: any;
}

export default function HeroHeadline({
    text,
    colourTextSelect,
    sizeTextSelect,
    checkboxBold,
    checkboxUnderline,
    fontTypeSelect,
}: HeadlineProps) {
    return (
        <h2
            className={`text-${colourTextSelect} text-${sizeTextSelect} font-${checkboxBold && "bold"
                } ${checkboxUnderline && " underline"} font-${fontTypeSelect} p-1  leading-9`}
        >
            {text}
        </h2>
    );
}
