import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end relative ${isUserMessage && "justify-end"}`}
    >
      <div className="flex items-end space-x-2">
        <div
          className={`relative flex-none h-8 w-8 rounded-full ${
            isUserMessage && "order-last ml-2"
          }`}
        >
          <Avatar username={message.get("username")} />
        </div>
        <div
          className={`max-w-3xl py-3 px-4 rounded-3xl shadow-md ${
            isUserMessage
              ? "rounded-br-none bg-blue-300"
              : "rounded-bl-none bg-yellow-300"
          }`}
        >
          <p>{message.get("message")}</p>
        </div>
      </div>

      <div className="flex absolute -bottom-5">
        <p
          className={`text-xs ${
            isUserMessage ? "text-blue-300" : "text-yellow-300"
          }`}
        >
          {message.get("username")}
        </p>

        <TimeAgo
          className={`text-[10px] italic text-gray-400 mx-2 ${
            isUserMessage && "order-first"
          }`}
          datetime={message.createdAt}
        />
      </div>
    </div>
  );
}

export default Message;
