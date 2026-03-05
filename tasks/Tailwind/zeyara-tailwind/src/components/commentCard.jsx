const CommentCard = () => {
  return (
    <div className="border-2 border-black max-w-xl rounded-2xl p-6">
      {/* Top section */}
      <div className="flex items-center justify-between">
        {/* User info */}
        <div className="flex items-center gap-4">
          <img
            src="src/assets/reviews.png"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800">Laila</h3>
        </div>
        {/* Stars */}
        <div>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>

      {/* Comment section */}
      <p className="mt-4 text-gray-600 leading-relaxed">
        Hello guys, This product is very comfortable and I would like to
        recommended it for you. It’s material is very perfect
      </p>
      {/* Date */}
      <p className="mt-4 text-gray-400 text-sm">2 days ago</p>
    </div>
  );
};
export default CommentCard;
