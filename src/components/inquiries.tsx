import { FormEvent, useRef } from "react";
import { Heading2 } from "./headings";

function Inquiry() {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const confirmEmailInputRef = useRef<HTMLInputElement>(null);
    const inquiryInputRef = useRef<HTMLTextAreaElement>(null);

    function inquirySubmitHandler(event: FormEvent) {
        event.preventDefault();
        const enteredName = nameInputRef.current!.value;
        const enteredEmail = emailInputRef.current!.value;
        const enteredConfirmedEmail = confirmEmailInputRef.current!.value;
        const enteredInquiry = inquiryInputRef.current!.value;
        console.log([
            enteredName,
            enteredEmail,
            enteredConfirmedEmail,
            enteredInquiry,
        ]);
    }

    return (
        <div className="w-full flex flex-col py-4">
            <div className="m-4 bg-white bg-opacity-30 rounded-md">
                <Heading2 text="Inquiries" colour="white"></Heading2>
                <div className="flex justify-center items-center px-4">
                    <form
                        onSubmit={inquirySubmitHandler}
                        className="grid grid-cols-1 gap-4 w-1/2"
                    >
                        <div className="flex flex-col">
                            <label className="py-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                ref={nameInputRef}
                                className="rounded-md"
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
                                className="rounded-md"
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
                                className="rounded-md"
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
                                className="rounded-md"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <button
                                className="rounded-md bg-white bg-opacity-100 w-fit px-4 py-2 hover:bg-pink-300 transition-all"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Inquiry;
