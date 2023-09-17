import { RefObject } from "react";

interface SectionButtonProps {
    targetRef: RefObject<HTMLDivElement>;
    text: string;
}

function SectionButton({ targetRef, text }: SectionButtonProps) {
    const handleClick = () => {
        targetRef?.current?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
            {text}
        </button>
    );
}

export default SectionButton;
