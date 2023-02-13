import React from "react";
import { Item } from "../interface/Books";
import { Link } from "react-router-dom";

const Book = ({ info }: { info: Item }) => {
  return (
    <li>
      <div>
        <img
          src={`http://books.google.com/books/content?id=${info.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          alt={`${info.volumeInfo.title}`}
        />
        <div>
          <Link to={`/book/${info.id}`}>
            <h3>{info.volumeInfo.title}</h3>
          </Link>
          <p>{info.volumeInfo.authors.join(",")}</p>
          <p>{info.volumeInfo.publishedDate}</p>
        </div>
      </div>
    </li>
  );
};

export default Book;
