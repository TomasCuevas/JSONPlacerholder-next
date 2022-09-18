import { GetStaticProps, GetStaticPaths } from "next";
import type { NextPage } from "next";

//* api *//
import { jsonplaceholderapi } from "../../api";

//* layout *//
import { PrincipalLayout } from "../../layouts";

//* components *//
import { FeedComments, Post } from "../../components";

//* interfaces *//
import {
  CommentInterface,
  PostInterface,
  UserInterface,
} from "../../interfaces";

interface PostPageProps {
  post: PostInterface;
  comments: CommentInterface[];
}

const PostPage: NextPage<PostPageProps> = ({ post, comments }) => {
  return (
    <PrincipalLayout title={`Post | ${post.title}`}>
      <Post post={post} />
      <FeedComments comments={comments} />
    </PrincipalLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = [...Array(10)].map((_value, index) => `${index + 1}`);

  return {
    paths: ids.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data: post } = await jsonplaceholderapi.get<PostInterface>(
    `/posts/${id}`
  );
  const { data: user } = await jsonplaceholderapi.get<UserInterface>(
    `/users/${post.userId}`
  );
  const { data: comments } = await jsonplaceholderapi.get<CommentInterface[]>(
    `/comments`
  );

  if (!post) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const postWithUser = { ...post, user };
  const postComments = comments.filter((comment) => comment.postId === post.id);

  return {
    props: {
      post: postWithUser,
      comments: postComments,
    },
  };
};

export default PostPage;
