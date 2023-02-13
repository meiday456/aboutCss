/** @jsxImportSource @emotion/react */
import React from "react";
import { Books as BookInfo } from "../interface/Books";
import Book from "./Book";
import styled from "@emotion/styled";

const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const BookList = ({ books }: { books: BookInfo | null }) => {
  if (!books) {
    return <h1>책을 검색해 보세요.</h1>;
  } else if (books.items.length === 0) {
    return <h1>해당 하는 책이없습니다.</h1>;
  } else {
    return (
      <ListArea>
        {books.items.map((book, index) => {
          return <Book info={book} key={index}></Book>;
        })}
      </ListArea>
    );
  }
};

export default BookList;
