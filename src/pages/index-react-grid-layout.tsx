import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

//Components
import GridLayout from "react-grid-layout";

const Home: NextPage = () => {
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
          <div className="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-custom-icon-trigger" type="button" className="hs-dropdown-toggle p-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
    <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
  </button>

  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-custom-icon-trigger">
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
      Newsletter
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
      Purchases
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
      Downloads
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
      Team Account
    </a>
  </div>
</div>
          <GridLayout className="" cols={2} rowHeight={125} width={600}>
            <div
              key="a"
              className="group flex h-full flex-col overflow-hidden rounded-xl  border border-purple-900 bg-neutral-900 shadow-xl"
              data-grid={{
                x: 0,
                y: 0,
                w: 1,
                h: 2,
                minW: 1,
                maxW: 2,
                minH: 2,
                maxH: 4,
              }}
            >
              <div
                className="flex h-full flex-col rounded-t-xl p-4 text-left"
                style={{
                  backgroundImage: `url("/img/1.jpg")`,
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >

              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className=" text-neutral-100">Sample page title</p>
              </div>
            </div>

            {/* <div
              key="g"
              className="group flex h-full flex-col overflow-hidden rounded-xl  border border-purple-900 bg-neutral-900 shadow-xl"
              data-grid={{
                x: 1,
                y: 2,
                w: 2,
                h: 2,
                minW: 1,
                maxW: 2,
                minH: 1,
                maxH: 2,
              }}
            >
              <div
                className="flex h-full flex-col rounded-t-xl p-4 text-left"
                style={{
                  backgroundImage: `url("/img/6.jpg")`,
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className=" text-neutral-100">Sample sdfsf title</p>
              </div>
            </div> */}

            {/* <div
              key="b"
              className="group flex h-full flex-col overflow-hidden rounded-xl  border border-purple-900 bg-neutral-900 shadow-xl"
              data-grid={{
                x: 1,
                y: 0,
                w: 1,
                h: 1,
                minW: 1,
                maxW: 2,
                minH: 1,
                maxH: 2,
              }}
            >
              <div
                className="flex h-full flex-col items-center justify-center rounded-t-xl"
                style={{
                  backgroundImage: `url("/img/7.jpg")`,
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div> */}

            {/* <div
              key="c"
              className="group flex h-full flex-col overflow-hidden rounded-xl  border border-purple-900 p-4 text-neutral-100 shadow-xl"
              data-grid={{ x: 1, y: 1, w: 1, h: 1, minW: 1, minH: 1 }}
            >
              <h3 className="pb-4 text-3xl text-neutral-100">Sample Heading</h3>
              <p className="text-md text-neutral-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div> */}

            {/* {BlockLink("Test Title", "www.google.com")} */}

          </GridLayout>
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
