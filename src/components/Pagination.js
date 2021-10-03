import React from "react";
import "../App.css";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              {/* <a onClick={() => paginate(number)} href="#!">
                {number}
              </a> */}
              <button onClick={() => paginate(number)}> {number}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
