import ReviewsPage from "./reviews_page";
import Inquiry from "./inquiries";

function ReviewsAndInquiries() {
    return (
        <div className="flex flex-col md:flex-row p-4">
            <ReviewsPage></ReviewsPage>
            <Inquiry></Inquiry>
        </div>
    );
}

export default ReviewsAndInquiries;
