/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, FormEvent, Suspense, useState } from "react";
import styled from "@emotion/styled";
import BookSearchForm from "../component/BookSearchForm";
import axios from "axios";
import Loader from "../component/Loader";
import BookList from "../component/BookList";

const Header = styled.header`
  border-bottom: 1px solid gray;
`;

const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 10rem;
  }
`;
const LogoText = styled.div`
  margin: 0;
`;
const HeaderSearchForm = styled.div`
  margin-left: auto;
  @media (max-width: 778px) {
    margin-left: 0;
  }
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(null);

  const API_BASE_URL = `https://www.googleapis.com/books`;

  const fetchBooks = async () => {
    try {
      const { data }: any = axios.get(
        `${API_BASE_URL}/v1/volumes?q=${searchTerm}`
      );
      setBooks(data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchBooks();
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Book List</LogoText>
          <HeaderSearchForm>
            <BookSearchForm change={handleChange} submit={handleSubmit} />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <BookList />
        </Suspense>
      </Container>
    </>
  );
};

export default SearchPage;
