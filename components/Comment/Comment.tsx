//* interface *//
import { CommentInterface } from "../../interfaces";

export const Comment = ({ body, email }: CommentInterface) => {
  return (
    <article className="my-3 w-[100%] cursor-pointer rounded-xl bg-white p-[15px] shadow-sm shadow-slate-500 transition-all duration-500  hover:shadow-lg hover:shadow-slate-500">
      <h3 className="px-5 pb-1 text-lg font-semibold">{email}</h3>
      <p className="px-5 text-slate-600">{body}</p>
    </article>
  );
};
