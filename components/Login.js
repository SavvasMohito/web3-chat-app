import { useMoralis, ByMoralis } from "react-moralis";
import Head from "next/head";
import Image from "next/image";
import AvatarRand from "./AvatarRand";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <Head>
        <title>Login to the METAVERSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center text-center text-white space-y-10">
        <h1 className="text-4xl sm:text-5xl">Welcome to the METAVERSE!</h1>
        <div className="relative h-48 w-48 sm:h-60 sm:w-60 border-4 border-yellow-400 rounded-full">
          <AvatarRand />
        </div>
        <div className="sm:text-2xl">
          <h2>Chat with people all around the world!</h2>
          <h2>Login and enjoy the Web 3.0 experience.</h2>
        </div>

        <button
          onClick={authenticate}
          className="block bg-yellow-400 shadow-lg shadow-yellow-500/30 rounded-full px-6 py-4 font-bold text-black transform hover:scale-105 transition ease-out text-xl sm:text-2xl"
        >
          Login using MetaMask
        </button>
      </div>
      <div className="w-full h-screen bg-black">
        <Image
          className="opacity-50"
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/Backgorund.gif"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute whitespace-nowrap bottom-2 word-wrap left-[50%] translate-x-[-50%] text-sm text-gray-400/50">
        <div className="border-2 border-gray-400/50 rounded-full my-2">
          <ByMoralis
            variant="dark"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        </div>

        <p>
          Made with ❤️ by{" "}
          <a
            href="https://mantzouranidis.tech"
            target="_blank"
            className="hover:text-gray-300 transition ease-out"
          >
            Savvas Mantzouranidis
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
