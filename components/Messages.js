import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt").greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-48">
      <div className="my-4">
        <ByMoralis variant="dark" style={{ marginLeft: "auto", marginRight: "auto" }} />
      </div>

      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You are up to date, {user.getUsername()}! 🥳</p>
      </div>
      <div className="absolute whitespace-nowrap bottom-2 word-wrap left-[50%] translate-x-[-50%] text-sm text-gray-400/50">
        <p>
          Made with ❤️ by{" "}
          <a href="https://savman.dev" target="_blank" className="hover:text-gray-300 transition ease-out">
            Savvas Mantzouranidis
          </a>
        </p>
      </div>
    </div>
  );
}

export default Messages;
