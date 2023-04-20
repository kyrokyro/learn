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

            <div
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
            </div>
            <div
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
            </div>

            <div
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
            </div>

            

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
