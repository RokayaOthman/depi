import ReviewButton from "../reviewsButton";
import CommentCard from "../commentCard";

const Reviews = () => {
  return (
    <div className="flex flex-col items-start max-w-1xl mx-auto px-6">
      <h1 className="font-normal font-paytone my-10">Reviews</h1>

      {/* button to add a new comment */}
      <ReviewButton />

      {/* display one or more comments */}
      <CommentCard />
    </div>
  );
};

export default Reviews;