interface HeadingProps {
    text: string;
}

function Heading1({text}: HeadingProps) {
    return (
        <div>
            <h1 className="text-left text-3xl text-white">
                {text}
            </h1>
            <hr />
        </div>
    )
}

export { Heading1 };