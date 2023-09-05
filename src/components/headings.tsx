interface HeadingProps {
    text: string;
    colour: string;
}

function Heading1({text, colour}: HeadingProps) {
    return (
        <div className={`text-${colour} divide-${colour}`}>
            <h1 className={`text-left text-3xl`}>
                {text}
            </h1>
            <hr className="my-2" style={{borderColor: colour}}/>
        </div>
    )
}

function Heading2({text, colour}: HeadingProps) {
    return (
        <div className={`text-${colour} divide-${colour} text-left flex flex-col items-center justify-center`}>
            <h2 className={`text-left text-3xl italic`}>
                {text}
            </h2>
            <hr className="my-2 w-full" style={{borderColor: colour}} />
        </div>
    )
}

export { Heading1, Heading2 };