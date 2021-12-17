import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user, logout } = useMoralis();

  return (
    <div className="sticky z-50 md:flex text-blue-400 text-center md:text-left md:justify-center md:align-center md:space-x-5 p-4 bg-black/75 shadow-md border-b-2 border-blue-400">
      <div className="relative md:left-0 md:translate-x-0 left-[50%] translate-x-[-50%] h-48 w-48 border-4 border-blue-400 rounded-full">
        <Avatar />
      </div>
      <div className="my-auto space-y-4 md:space-y-5">
        <h1 className="text-2xl text-yellow-500 pt-4 md:pt-0">
          Welcome to the METAVERSE!
        </h1>
        <div>
          <h2 className="text-lg">You username is</h2>
          <h2 className="text-3xl text-blue-300 font-bold truncate">
            {user.getUsername()}
          </h2>
        </div>
        <div>
          <div className="space-x-3 text-sm">
            <ChangeUsername />
            <button
              onClick={logout}
              className="bg-red-500 shadow-md shadow-red-500/30 text-white rounded-full px-3 py-1 transform hover:scale-105 transition ease-out duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
