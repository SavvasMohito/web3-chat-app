import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user, logout } = useMoralis();

  return (
    <div className="sticky z-50 flex text-blue-400 justify-center align-center space-x-2 xs:space-x-4 p-3 sm:p-4 bg-black/75 shadow-sm border-b-2 border-blue-400">
      <div className="relative h-28 w-28 xs:h-32 xs:w-32 sm:h-48 sm:w-48 border-4 border-blue-400 rounded-full">
        <Avatar />
      </div>
      <div className="my-auto space-y-2 sm:space-y-5">
        <h1 className="xs:text-xl sm:text-2xl text-yellow-500 sm:pt-0">
          Welcome to the METAVERSE!
        </h1>
        <div className="-space-y-1">
          <h2 className="text-sm xs:text-lg">You username is</h2>
          <h2 className="text-lg xs:text-2xl sm:text-3xl text-blue-300 font-bold truncate">
            {user.getUsername()}
          </h2>
        </div>
        <div>
          <div className="space-x-2 xs:space-x-3 text-sm">
            <ChangeUsername />
            <button
              onClick={logout}
              className="bg-red-500 shadow-sm shadow-red-500/30 text-white rounded-full px-2 xs:px-3 py-1 transform hover:scale-105 transition ease-out duration-200"
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
