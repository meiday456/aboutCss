/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const API_BASE_URL = `https://www.googleapis.com/books`;

  const fetchBooks = async () => {
    try {
      const { data }: any = axios.get(`${API_BASE_URL}/v1/volumes?q=story`);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return <h1>gkgkkgkgkgkkgk</h1>;
};

export default BookList;
