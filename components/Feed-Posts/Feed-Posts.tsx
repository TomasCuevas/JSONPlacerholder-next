import { Post } from "../";

//* interfaces *//
import { PostInterface } from "../../interfaces";

interface FeedCommetsProps {
  posts: PostInterface[];
}

export const FeedPosts = ({ posts }: FeedCommetsProps) => {
  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};
