import { FunctionComponent, createElement } from "react";

interface ContactTagProps {
    title: string;
    icon: FunctionComponent;
    link: string;
}

function ContactTag({ icon, link }: ContactTagProps) {

    return (
        <a className="m-4 p-2 bg-white rounded-md flex justify-center items-center hover:bg-sky-300 transition-all hover:cursor-pointer scale-95  hover:scale-110" href={link}>
            <div>{createElement(icon, {size: 24})}</div>
        </a>
    );
}

export default ContactTag;
