import Image from "next/image";
import { useState, useEffect } from "react";

function AvatarRand() {
  const [name, setName] = useState("savvas");

  useEffect(() => {
    setInterval(() => {
      setName(
        Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15)
      );
    }, 5000);
  }, []);

  return (
    <Image
      className="rounded-full bg-neutral-700"
      src={`https://avatars.dicebear.com/api/personas/${name}.svg`}
      layout="fill"
    />
  );
}

export default AvatarRand;
