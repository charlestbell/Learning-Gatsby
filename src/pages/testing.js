import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";

export default function TestingPage({ data }) {
  console.log("DATA", data);
  const posts = data.allPosts;
  console.log("POSTS", posts);
  return (
    <Layout>
      <h1>I am posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query allPost {
    allPosts {
      id
      title
      body
    }
  }
`;
