import React from "react";
import { Item } from "../interface/Books";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Thumbnail } from "./Shared";

const ItemArea = styled.div`
  width: 250px;
  height: calc((250px * 3) / 2);

  &:hover {
    background-color: #ababab;
    border-radius: 10px;
  }
`;

const ThumbnailIml = styled(Thumbnail)`
  margin: 30px auto;
`;

const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

const Title = styled.h3`
  overflow: hidden;
  //position: absolute;
`;

const Book = ({ info }: { info: Item }) => {
  return (
    <ItemArea>
      <ThumbnailIml
        src={`http://books.google.com/books/content?id=${info.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        alt={`${info.volumeInfo.title}`}
      />
      <Info>
        <Link to={`/book/${info.id}`}>
          <Title>{info.volumeInfo.title}</Title>
        </Link>
        <p>{info.volumeInfo.authors.join(",")}</p>
        <p>{info.volumeInfo.publishedDate}</p>
      </Info>
    </ItemArea>
  );
};

export default Book;
