import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Schedule from "./components/Schedule";
import NewCalendar from "./components/Calendar";
import Calendar from "./components/PlannerCalendar";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Schedule</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex-col items-center justify-center bg-white m-20">
       {/* <Schedule/> */}
       {/* <NewCalendar/> */}
       <Calendar/>
      </main>
    </>
  );
};

export default Home;