import REVIEW_DATA from "../data/review_data.json";
import ReviewCard from "./review_card";
import { Heading1 } from "./headings";

function ReviewsPage() {
    return (
        <div className="w-full flex flex-col p-4">
            <Heading1 text="Client Reviews" colour="black"></Heading1>
            <div className="flex flex-col gap-4 h-full justify-evenly pb-4 mx-4">
                <ReviewCard review={REVIEW_DATA[0]}></ReviewCard>
                <ReviewCard review={REVIEW_DATA[1]}></ReviewCard>
                <ReviewCard review={REVIEW_DATA[2]}></ReviewCard>
            </div>
        </div>
    );
}

export default ReviewsPage;
