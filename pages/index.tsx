import Head from "next/head";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import GithubUser from "../components/GithubUser";
import { useState, useRef, useEffect } from "react";
import { Loading } from "../components/Loading";

export default function Home() {
  let API = "https://api.github.com/users/geekyAnkush";

  const userRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleClick() {
    setUserName(userRef?.current?.value);
  }
  useEffect(() => {
    setLoading(true);
    if (userName) {
      API = `https://api.github.com/users/${userName}`;
    }

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [userName]);

  if (!data) <p>No Profile data.</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-7 dark:bg-[#1e253f]">
      <Head>
        <title>GitHub User Finder App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar
            userName={userName}
            handleClick={handleClick}
            userRef={userRef}
          />
          <GithubUser data={data} />
        </>
      )}
    </div>
  );
}
