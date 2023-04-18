import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { useEffect } from "react";


//Components
import { GridStack } from "gridstack";
import BlockLink from "../components/Blocks/Link";

const Home: NextPage = () => {
  useEffect(() => {
    var grid = GridStack.init();
  });
  return (
    <>
      <Head>
        <title>Tent Prototype</title>
        <meta name="description" content="Page description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full flex-col bg-violet-900">
        <div className="container">
          <AuthShowcase />
          <div className="grid-stack">
          <BlockLink id="1" />
          <BlockLink id="2" />
          <BlockLink id="3" />
          <BlockLink id="4" />
          <BlockLink id="5" />
          </div>
        </div>
      </main>
    </>
  );
};




export default Home;


const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
