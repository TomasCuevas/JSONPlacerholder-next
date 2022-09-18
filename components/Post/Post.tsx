import { useRouter } from "next/router";

//* interface *//
import { PostInterface } from "../../interfaces";

interface PostProps {
  post: PostInterface;
}

export const Post = ({ post: { user, id, body, title } }: PostProps) => {
  const router = useRouter();
  const { name, email } = user!;

  const onClickPost = () => {
    router.push(`/post/${id}`);
  };

  return (
    <article
      onClick={onClickPost}
      className="my-5 w-[100%] cursor-pointer rounded-xl bg-white p-[15px] shadow-sm shadow-slate-500 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-slate-300"
    >
      <h3 className="px-5 pb-2 text-lg font-semibold">{`${name} | ${email}`}</h3>
      <div className="rounded-lg bg-slate-800 p-5">
        <h4 className="text-base font-bold text-white">{title}</h4>
        <p className="text-slate-400">{body}</p>
      </div>
    </article>
  );
};
