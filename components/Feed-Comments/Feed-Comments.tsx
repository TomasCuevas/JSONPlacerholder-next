//* components *//
import { Comment } from "../";

//* interfaces *//
import { CommentInterface } from "../../interfaces";

interface FeedCommentsProps {
  comments: CommentInterface[];
}

export const FeedComments = ({ comments }: FeedCommentsProps) => {
  return (
    <section>
      <span className="block w-full border-b border-b-white pb-1 text-lg text-white">
        Comments
      </span>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </section>
  );
};
