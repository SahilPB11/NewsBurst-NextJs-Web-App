"use client";
import { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import NewsGrid from "./component/NewGrid";
import { getEverything } from "./src/api";
import { UserAuth } from "./context/AuthContext";
import LoginPage from "./login/page";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEverything();
      setArticles(data);
    };

    fetchData();
  }, []);

  if (!user) {
    return <LoginPage />;
  }
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-1">
        <NewsGrid articles={articles} />
      </main>
    </>
  );
}
