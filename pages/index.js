import { useMoralis } from "react-moralis";
import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-blue-900 overflow-hidden">
      <Head>
        <title>METAVERSE Chat Room</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-lg mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
