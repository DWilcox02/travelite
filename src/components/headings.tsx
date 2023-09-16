interface HeadingProps {
    text: string;
    colour: string;
}

function Heading1({text, colour}: HeadingProps) {
    return (
        <div className={`text-${colour} divide-${colour} px-4 py-2`}>
            <h1 className={`text-left text-3xl`}>
                {text.toLocaleUpperCase()}
            </h1>
            <hr className="my-2" style={{borderColor: colour}}/>
        </div>
    )
}

function Heading2({text, colour}: HeadingProps) {
    return (
        <div className={`text-${colour} divide-${colour} text-left flex flex-col items-center justify-center px-4 py-2`}>
            <h2 className={`text-left text-3xl italic`}>
                {text.toLocaleUpperCase()}
            </h2>
            <hr className="my-2 w-full"/>
        </div>
    )
}

function Heading3({text, colour}: HeadingProps) {
    return (
        <div className={`text-${colour} divide-${colour} px-4 py-2`}>
            <h1 className={`text-center text-3xl`}>
                {text.toLocaleUpperCase()}
            </h1>
            <hr className="my-2" style={{borderColor: colour}}/>
        </div>
    )
}

export { Heading1, Heading2, Heading3 };