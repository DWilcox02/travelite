import contactDetails from "../data/contact_data.json";
import ContactTag from "./contact_tag";
import { Heading1 } from "./headings";
import {AiFillInstagram, AiFillMail} from "react-icons/ai";

function Contact() {
    const email = contactDetails.email;
    const instagram = contactDetails.instagram;

    return (
        <div className="w-full flex flex-col pb-20">
            <div className="m-4 p-4">
                <Heading1 text="Contact Me" colour="black"></Heading1>
                <div className="flex flex-col justify-center items-center pt-4">
                    <ContactTag
                        title="Email"
                        value={email}
                        icon={AiFillMail}
                        link="mailto:taylauremma@gmail.com"
                    ></ContactTag>
                    <ContactTag
                        title="Instagram"
                        value={instagram}
                        icon={AiFillInstagram}
                        link="https://www.instagram.com"
                    ></ContactTag>
                </div>
            </div>
        </div>
    );
}

export default Contact;
