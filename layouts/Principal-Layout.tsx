import Head from "next/head";

//* components *//
import { Header } from "../components";

//* interface *//
interface PrincipalLayoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const PrincipalLayout = ({ children, title }: PrincipalLayoutProps) => {
  return (
    <>
      <Head>
        <meta name="author" content="Tomas Cuevas" />
        <meta name="keywords" content="placeholder nextjs api" />
        <meta name="language" content="es" />
        <title>{title || "JSONPlaceholder with Next"}</title>
      </Head>
      <Header />
      <main className="min-h-screen w-full bg-slate-800 py-10 px-[5%] sm:px-[10%] lg:px-[20%]">
        {children}
      </main>
    </>
  );
};
