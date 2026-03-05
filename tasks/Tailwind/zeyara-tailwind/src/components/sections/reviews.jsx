import CommentCard from "../commentCard";
const Reviews = () => {
    return (
        <>
        {/* Container */}
        <div className="">
                {/* reviews section */}
                <div className="flex flex-col items-start max-w-1xl mx-auto px-6" >
                    {/* header */}
                        <div className="">
                            <h1 className="font-normal font-paytone my-10">Reviews</h1>
                        </div>
                    {/* Comments */}
                    <CommentCard />
                </div>
        </div>
        </>
    );


};

export default Reviews