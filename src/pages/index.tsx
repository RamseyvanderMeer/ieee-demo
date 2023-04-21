import { type NextPage } from "next";
import Head from "next/head";
// import { SignOutButton, SignInButton, useUser } from "@clerk/nextjs"
import dynamic from "next/dynamic";
import { LoadingPage } from "./components/Loading";

const Menu = dynamic(() => import("./components/Menu"), {
  loading: () => <LoadingPage size={50} />,
});
const Background = dynamic(() => import("./components/Background"));

const Home: NextPage = () => {
  // const user = useUser()

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Ramsey van der Meer | Portfolio Website</title>
        <meta
          name="description"
          content="Welcome to my personal website! Here, you'll find a collection of my past and current projects, as well as some of my favorite photographs I have taken. I'm passionate about engineering, and love to find solutions to unique problems. Take a look around and let me know what you think!"
        />
        <meta
          name="keywords"
          content="Personal website, Portfolio, Projects, Photography, Software Engineering, Showcase, Visuals, Digital portfolio, Web Design"
        />
        <meta name="author" content="Ramsey van der Meer" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#000000" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />

        <meta name="robots" content="index, follow" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="canonical" href="https://ramseyvdm.com"></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        {/* <meta
          property="og:image"
          content="https://ramseyvdm.com/images/og-image.png"
        /> */}
      </Head>
      <main className="h-width z-1 relative left-0 right-0 flex h-screen overflow-hidden border-slate-300 bg-gradient-to-b from-[#110811] to-[#000000]">
        {/* {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />} */}
        <div>
          <div className="absolute left-0 top-0 z-10 h-screen w-screen">
            <Menu />
          </div>
          <Background />
        </div>
      </main>
    </>
  );
};

export default Home;
