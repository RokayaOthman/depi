import { useState } from "react";
import CommentCard from "./commentCard";

const Reviews = () => {
  const [comments, setComments] = useState([
    { id: 1, name: "Rokaya", text: "Hello Guys", date: "2 days ago" },
  ]);

  const addComment = () => {
    const newComment = {
      id: comments.length + 1,
      name: "New User",
      text: "New review text",
      date: "Just now",
    };
    setComments([...comments, newComment]);
  };
  return (
    <div className="max-w-1xl mx-auto px-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded my-4"
        onClick={addComment}
      >
        Add Comment
      </button>

      <div className="flex flex-wrap items-start gap-4">
        {comments.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};
export default Reviews;
