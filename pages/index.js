import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Image from "next/image";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black relative">
        <div className="fadein flex flex-col absolute z-50 h-4/6 w-full items-center justify-center">
          <Image
            className="fadein object-cover rounded-full shadow-lg"
            src="https://avatars.githubusercontent.com/u/45666401?v=4"
            height={200}
            width={200}
          />
          <h1 className="text-4xl text-white mb-2 mt-4">
            Savvas Mantzouranidis
          </h1>
          <div className="space-x-10 text-gray-300 mb-20">
            <a
              className="hover:text-white transition ease-out"
              target="_blank"
              href="https://dazzling-lamport-1e16eb.netlify.app/"
            >
              Day 1 Homework
            </a>
            <a
              className="hover:text-white transition ease-out"
              target="_blank"
              href="https://mantzouranidis.tech"
            >
              About Me
            </a>
          </div>

          <button
            onClick={logout}
            className="bg-rose-500 shadow-lg shadow-rose-500/20 rounded-full p-4 font-bold text-white transform hover:scale-110 transition ease-out duration-200"
          >
            Logout to the real world.
          </button>
        </div>

        <div class="header">
          <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
