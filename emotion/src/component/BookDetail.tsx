/** @jsxImportSource @emotion/react */
import React from "react";
import { BookDetailInfo } from "../interface/BookDetail";
import styled from "@emotion/styled";
import { Thumbnail } from "./Shared";

const Section = styled.section`
  //padding: 0 calc(20vw + (20vw / 100) * (20vw / 5));
`;
const Detail = styled.div`
  margin: 0 auto;
`;

const MainInfo = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 30px;
  gap: 20px;
`;

const BookDetail = ({ detail }: { detail: BookDetailInfo }) => {
  const IMG_BASE_URL = `http://books.google.com/books/content?id=${detail.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;

  return (
    <Section>
      <Detail>
        <MainInfo>
          <Thumbnail src={IMG_BASE_URL} alt={`${detail.volumeInfo.title} 책`} />
          <div>
            <h3 style={{ marginBottom: "10px" }}>
              <strong>책 이름 : </strong>
              {detail.volumeInfo.title}
            </h3>
            <p>
              <strong>저자 :</strong>
              {detail.volumeInfo.authors.join(",")}
            </p>
          </div>
        </MainInfo>
        <div>
          <div>
            <strong>출판 설명:</strong>
            <div
              dangerouslySetInnerHTML={{
                __html: detail.volumeInfo.description,
              }}
            ></div>
          </div>
        </div>
      </Detail>
    </Section>
  );
};

export default BookDetail;
