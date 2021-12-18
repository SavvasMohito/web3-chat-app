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
      className="bg-yellow-500 shadow-md shadow-yellow-500/30 text-black rounded-full px-2 xs:px-3 py-1 transform hover:scale-105 hover:opacity-90 transition ease-out"
    >
      Change Name
    </button>
  );
}

export default ChangeUsername;
