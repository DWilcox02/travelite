import REVIEW_DATA from "../data/review_data.json";
import ReviewCard from "./review_card";
import { Heading3 } from "./headings";

function ReviewsPage() {
    return (
        <div className="w-full flex flex-col p-4">
            <div className="rounded-md bg-white bg-opacity-30">
                <Heading3 text="Client Reviews" colour="black"></Heading3>
                <div className="flex flex-col gap-4 justify-center items-center pb-4 mx-4">
                    <ReviewCard review={REVIEW_DATA[0]}></ReviewCard>
                    <ReviewCard review={REVIEW_DATA[1]}></ReviewCard>
                    <ReviewCard review={REVIEW_DATA[2]}></ReviewCard>
                </div>
            </div>
        </div>
    );
}

export default ReviewsPage;
