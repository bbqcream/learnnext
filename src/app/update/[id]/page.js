"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:9999/topics/${id}`)
      .then((resp) => resp.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, [id]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const updatedTitle = title;
        const updatedBody = body;

        const options = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: updatedTitle, body: updatedBody }),
        };

        fetch(`http://localhost:9999/topics/${id}`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            router.replace(`/read/${result.id}`);
          });
      }}
    >
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
