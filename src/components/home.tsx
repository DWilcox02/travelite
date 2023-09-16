import ContactTag from "./contact_tag";
import CONTACT_DATA from "../data/contact_data.json";
import {AiFillInstagram, AiFillMail, AiOutlineTwitter, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";

function Home() {

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl">
                Emma Taylor
            </h1>
            <h2>
                Travel & Art for you
            </h2>
            <div className="flex justify-center items-center pt-4">
                    <ContactTag
                        title="Email"
                        icon={AiFillMail}
                        link={`mailto:${CONTACT_DATA.email}`}
                    ></ContactTag>
                    <ContactTag
                        title="Instagram"
                        icon={AiFillInstagram}
                        link={CONTACT_DATA.instagram}
                    ></ContactTag>
                    <ContactTag
                        title="Twitter"
                        icon={AiOutlineTwitter}
                        link={CONTACT_DATA.twitter}
                    ></ContactTag>
                    <ContactTag
                        title="Facebook"
                        icon={AiFillFacebook}
                        link={CONTACT_DATA.facebook}
                    ></ContactTag>
                    <ContactTag
                        title="LinkedIn"
                        icon={AiFillLinkedin}
                        link={CONTACT_DATA.linkedin}
                    ></ContactTag>
                </div>
        </div>
    )
}

export default Home;