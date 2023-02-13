/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "@emotion/styled";
import BookSearchForm from "../component/BookSearchForm";
import axios from "axios";
import Loader from "../component/Loader";
import BookList from "../component/BookList";
import { Books } from "../interface/Books";
import {
  Container,
  Header,
  HeaderContainer,
  LogoText,
} from "../component/Shared";

const HeaderSearchForm = styled.div`
  margin-left: auto;
  @media (max-width: 778px) {
    margin-left: 0;
  }
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Books | null>(null);
  const [isLoading, setLoading] = useState(false);

  const API_BASE_URL = `https://www.googleapis.com/books`;

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const { data }: any = await axios.get(
        `${API_BASE_URL}/v1/volumes?q=${searchTerm}`
      );
      setBooks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
        {isLoading ? <Loader /> : <BookList books={books} />}
      </Container>
    </>
  );
};

export default SearchPage;
