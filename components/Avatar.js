import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username }) {
  const { user } = useMoralis();

  return (
    <Image
      className="rounded-full bg-neutral-700"
      src={`https://avatars.dicebear.com/api/personas/${
        username || user.getUsername()
      }.svg`}
      layout="fill"
    />
  );
}

export default Avatar;
