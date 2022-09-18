import { GetStaticProps } from "next";
import type { NextPage } from "next";

//* api *//
import { jsonplaceholderapi } from "../api";

//* components *//
import { Hero, FeedPosts } from "../components";

//* layout *//
import { PrincipalLayout } from "../layouts";

//* interfaces *//
import { PostInterface, UserInterface } from "../interfaces";

interface HomePageProps {
  posts: PostInterface[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <PrincipalLayout>
      <>
        <Hero />
        <FeedPosts posts={posts} />
      </>
    </PrincipalLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await jsonplaceholderapi.get<PostInterface[]>(
    "/posts"
  );
  const { data: users } = await jsonplaceholderapi.get<UserInterface[]>(
    "/users"
  );

  let postsWithUsers: PostInterface[] = [];

  for (const post of posts) {
    const user = users.find((user) => user.id === post.userId);

    let newPosts = {
      ...post,
      user,
    };

    postsWithUsers = [...postsWithUsers, newPosts];
  }

  return {
    props: {
      posts: postsWithUsers,
    },
  };
};

export default HomePage;
