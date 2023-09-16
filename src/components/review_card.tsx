import { Review } from "../classes/review";

interface ReviewCardProps {
    review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="overflow-visible relative items-center bg-slate-400 rounded-md w-full max-w-md flex gap-6 shadow-lg">
            <img
                className="absolute inset-0 shadow-2xl rounded-full w-24 h-24 -left-6 -top-1"
                src={review.image}
                alt=""
            />
            <div className="flex flex-col py-5 pl-24 w-full pr-12">
                <div className="flex flex-row justify-between">
                    <h2>{review.name}</h2>
                    <p>insert number stars</p>
                </div>
                <p className="italic">{review.description}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
