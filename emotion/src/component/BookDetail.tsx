/** @jsxImportSource @emotion/react */
import React from "react";
import { BookDetailInfo } from "../interface/BookDetail";

const BookDetail = ({ detail }: { detail: BookDetailInfo }) => {
  const IMG_BASE_URL = `http://books.google.com/books/content?id=${detail.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;

  return (
    <section>
      <div>
        <img src={IMG_BASE_URL} alt={`${detail.volumeInfo.title} 책`} />
        <div>
          <h3>
            <strong>책 이름 : </strong>
            {detail.volumeInfo.title}
          </h3>
          <p>
            <strong>저자 :</strong>
            {detail.volumeInfo.authors.join(",")}
          </p>
          <div>
            <strong>출판 설명:</strong>
            <div
              dangerouslySetInnerHTML={{
                __html: detail.volumeInfo.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
