import { FunctionComponent, createElement } from "react";

interface ContactTagProps {
    title: string;
    value: string;
    icon: FunctionComponent;
    link: string;
}

function ContactTag({ value, icon, link }: ContactTagProps) {

    return (
        <a className="m-4 py-3 px-5 bg-white rounded-md flex justify-center items-center hover:bg-pink-300 transition-all hover:cursor-pointer" href={link}>
            <div className="pr-2">{createElement(icon)}</div>
            <h4>{value}</h4>
        </a>
    );
}

export default ContactTag;
