/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BookDetailInfo } from "../interface/BookDetail";
import {
  Container,
  Header,
  HeaderContainer,
  LogoText,
} from "../component/Shared";
import Loader from "../component/Loader";
import BookDetail from "../component/BookDetail";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const [info, setInfo] = useState<BookDetailInfo | null>(null);
  const API_BASE_URL = `https://www.googleapis.com/books`;
  const [isLoading, setIsLoading] = useState(false);
  const fetchBook = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<BookDetailInfo>(
        `${API_BASE_URL}/v1/volumes/${bookId}`
      );
      setInfo(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Header>
        <HeaderContainer>
          <Link to={"/"}>
            <LogoText>Book Detail</LogoText>
          </Link>
        </HeaderContainer>
      </Header>
      <Container>
        {isLoading ? <Loader /> : info && <BookDetail detail={info!} />}
      </Container>
    </>
  );
};

export default BookDetailPage;
