import React from "react";

export const Posts = ({ posts, loading }) => {
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="posts">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};
