import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt("Enter your new Username!");

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <button
      disabled={isUserUpdating}
      onClick={setUsername}
      className="bg-yellow-500 shadow-md shadow-yellow-500/30 text-black rounded-full px-2 xs:px-3 py-1 transform hover:scale-105 transition ease-out duration-200"
    >
      Change Username
    </button>
  );
}

export default ChangeUsername;
