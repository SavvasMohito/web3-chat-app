import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <div className="fadein flex flex-col absolute z-50 h-4/6 w-full items-center justify-center text-center">
        <Image
          className="object-cover rounded-full shadow-lg"
          src="https://avatars.githubusercontent.com/u/45666401?v=4"
          height={200}
          width={200}
        />
        <h1 className="text-4xl text-white mb-20 mt-4">
          Savvas Mantzouranidis
        </h1>

        <button
          onClick={authenticate}
          className="bg-sky-500 shadow-lg shadow-sky-500/20 rounded-full p-4 font-bold text-white transform hover:scale-110 transition ease-out duration-200"
        >
          Login to the METAVERSE!
        </button>
        <h1 className="text-xl text-white p-4">
          Please follow the MetaMask prompt and login.
        </h1>
      </div>
      <div class="header">
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
