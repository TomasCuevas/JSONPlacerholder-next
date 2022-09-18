import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 flex h-[80px] w-full  items-center bg-white px-[5%] sm:px-[10%] lg:px-[20%]">
      <span
        onClick={() => router.push("/")}
        className="cursor-pointer text-2xl text-slate-500 transition-all duration-300 hover:text-slate-700"
      >
        JSONPlaceholder
      </span>
    </header>
  );
};
