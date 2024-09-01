// import { FormEvent, SyntheticEvent, useRef } from "react";
import { Heading1 } from "../headings";
import { WEB3_ACCESS_KEY } from "../../secrets/secrets";
import { SyntheticEvent, useRef } from "react";

function Inquiry() {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const confirmEmailInputRef = useRef<HTMLInputElement>(null);
    const inquiryInputRef = useRef<HTMLTextAreaElement>(null);

    // function validateEmail(email1: string, email2: string) {
    //     return email1 == email2;
    // }

    async function inquirySubmitHandler(event: SyntheticEvent) {
        event.preventDefault();
        // const enteredName = nameInputRef.current!.value;
        // const enteredEmail = emailInputRef.current!.value;
        // const enteredConfirmedEmail = confirmEmailInputRef.current!.value;
        // const enteredInquiry = inquiryInputRef.current!.value;
    }


    return (
        <div className="w-full flex flex-col py-4">
            <div className="bg-white bg-opacity-30 rounded-md">
                <Heading1 text="Inquiries" colour="black"></Heading1>
                <div className="flex justify-center items-center px-4">
                    <form
                        onSubmit={inquirySubmitHandler}
                    >
                        <input type="hidden" name="access_key" value={WEB3_ACCESS_KEY}></input>
                        <div className="flex flex-col">
                            <label className="py-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                ref={nameInputRef}
                                className="rounded-md font-sans"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="py-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                ref={emailInputRef}
                                className="rounded-md font-sans"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="py-1" htmlFor="emailConfirm">
                                Confirm Email
                            </label>
                            <input
                                type="text"
                                name="emailConfirm"
                                placeholder="confirm email"
                                ref={confirmEmailInputRef}
                                className="rounded-md font-sans"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="py-1" htmlFor="description">
                                Inquiry
                            </label>
                            <textarea
                                name="description"
                                placeholder="description"
                                ref={inquiryInputRef}
                                className="rounded-md font-sans"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <button
                                className="rounded-md bg-white bg-opacity-100 w-fit px-4 py-2 mb-4 hover:bg-pink-300 transition-all"
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                    <script src="https://web3forms.com/client/script.js" async defer></script>
                </div>
            </div>
        </div>
    );
}

export default Inquiry