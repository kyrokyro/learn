import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import GridLayout from "react-grid-layout";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Tent Prototype</title>
        <meta name="description" content="Page description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-violet-900">
        <div className="container">
          <AuthShowcase />
          <GridLayout className="" cols={2} rowHeight={250} width={600}>

            <div key="a" className="group flex flex-col h-full bg-neutral-900 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 0, y: 0, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col text-left h-full rounded-t-xl p-4" style={{ backgroundImage: `url("/img/1.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full bg-slate-900 text-gray-200">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </span>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className=" text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="b" className="group flex flex-col h-full bg-neutral-200 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 1, y: 0, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/2.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-500">
                  google.com
                </span>
                <p className=" text-neutral-900">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="c" className="group flex flex-col h-full bg-green-700 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 0, y: 1, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/3.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className=" text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="d" className="group flex flex-col h-full bg-orange-600 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 1, y: 1, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/4.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="e" className="group flex flex-col h-full bg-blue-600 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 0, y: 2, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/5.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="f" className="group flex flex-col h-full bg-red-600 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 1, y: 2, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/6.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="g" className="group flex flex-col h-full bg-neutral-900 border  overflow-hidden rounded-xl border-purple-900 shadow-xl" data-grid={{ x: 0, y: 3, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/7.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
            </div>

            <div key="h" className="group flex flex-col h-full bg-neutral-900 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 1, y: 3, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/8.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
            </div>

            <div key="i" className="group flex flex-col h-full bg-blue-600 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 0, y: 4, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/9.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="j" className="group flex flex-col h-full bg-violet-600 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 1, y: 4, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/10.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="k" className="group flex flex-col h-full bg-neutral-900 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 0, y: 5, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/11.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="l" className="group flex flex-col h-full bg-purple-600 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 1, y: 5, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/1.webp")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="m" className="group flex flex-col h-full bg-neutral-900 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 0, y: 6, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/2.webp")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="n" className="group flex flex-col h-full bg-neutral-900 border  rounded-xl overflow-hidden border-purple-900 shadow-xl" data-grid={{ x: 1, y: 6, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 }}>
              <div className="flex flex-col h-full justify-center items-center rounded-t-xl" style={{ backgroundImage: `url("/img/3.webp")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold uppercase text-neutral-300">
                  google.com
                </span>
                <p className="text-neutral-100">
                  Sample page title
                </p>
              </div>
            </div>

            <div key="o" className="group flex flex-col h-full text-neutral-100 border  rounded-xl overflow-hidden border-purple-900 shadow-xl p-4" data-grid={{ x: 0, y: 7, w: 1, h: 1, minW: 1, minH: 1 }}>

              <h3 className="text-neutral-100 text-3xl pb-4">
                Sample Heading
              </h3>
              <p className="text-neutral-100 text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div key="p" className="group flex flex-col h-full text-neutral-100 border  rounded-xl overflow-hidden border-purple-900 shadow-xl p-4" data-grid={{ x: 1, y: 7, w: 1, h: 1, minW: 1, minH: 1 }}>

              <h3 className="text-neutral-100 text-3xl pb-4">
                Sample Heading
              </h3>
              <p className="text-neutral-100 text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div key="1" className="group flex flex-col h-full text-neutral-100 border  rounded-xl overflow-hidden border-purple-900 shadow-xl p-4" data-grid={{ x: 0, y: 8, w: 1, h: 1, minW: 1, minH: 1 }}>

              <h3 className="text-neutral-100 text-3xl pb-4">
                Sample Heading
              </h3>
              <p className="text-neutral-100 text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
    { enabled: sessionData?.user !== undefined },
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
