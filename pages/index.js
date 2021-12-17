import { useMoralis } from "react-moralis";
import Head from "next/head";
import Login from "../components/Login";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-blue-900 overfllow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="max-w-screen-lg mx-auto">
          <Header />
        </div>
      </div>
    </div>
  );
}
