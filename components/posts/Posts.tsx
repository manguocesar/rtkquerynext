"use client";
import { useGetPostsQuery } from "@/lib/features/posts/postsApiSlice";
import { useState } from "react";
import styles from "./Posts.module.css";

const options = [2, 5, 10, 20, 30];

export const Posts = () => {
  const [numberOfPosts, setNumberOfPosts] = useState(5);
  const { data, isError, isLoading, isSuccess } =
  useGetPostsQuery(numberOfPosts);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const displayedPosts = Array.isArray(data) && data.slice(0, numberOfPosts)

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <h3>Select the Quantity of posts to Fetch:</h3>
        <select
          className={styles.select}
          value={numberOfPosts}
          onChange={(e) => {
            setNumberOfPosts(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {Array.isArray(displayedPosts) && displayedPosts.map(({ title, body, id, userId }) => (
          <blockquote key={id}>
            &ldquo;{title}&rdquo;
            <footer>
              <cite>{body}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    );
  }

  return null;
};
