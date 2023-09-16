import ContactTag from "./contact_tag";
import contactDetails from "../data/contact_data.json";
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
                        link={`mailto:${contactDetails.email}`}
                    ></ContactTag>
                    <ContactTag
                        title="Instagram"
                        icon={AiFillInstagram}
                        link={contactDetails.instagram}
                    ></ContactTag>
                    <ContactTag
                        title="Twitter"
                        icon={AiOutlineTwitter}
                        link={contactDetails.twitter}
                    ></ContactTag>
                    <ContactTag
                        title="Facebook"
                        icon={AiFillFacebook}
                        link={contactDetails.facebook}
                    ></ContactTag>
                    <ContactTag
                        title="LinkedIn"
                        icon={AiFillLinkedin}
                        link={contactDetails.linkedin}
                    ></ContactTag>
                </div>
        </div>
    )
}

export default Home;