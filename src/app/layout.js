import Link from "next/link";
import "./globals.css";
import axios from "axios";
import { Control } from "./control";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function getTopics() {
  try {
    const { data } = await axios.get(
      "http://localhost:9999/topics",
      { next: { revalidate: 10 } }, // 10초 동안만 캐시를 유지하고 지나면 다시
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function RootLayout({ children }) {
  const topics = await getTopics();

  return (
    <html lang="en">
      <body>
        <h1>
          <Link href="/">WEB</Link>{" "}
        </h1>
        <ol>
          {topics.map((topic) => (
            <li key={topic.id}>
              {" "}
              <Link href={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
