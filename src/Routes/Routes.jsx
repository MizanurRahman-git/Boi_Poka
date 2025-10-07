import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BooksDetail from '../Pages/Book/BooksDetail';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
    {
        index: true,
        loader:() =>fetch('/booksData.json'),
        path: "/",
        Component: Home
    },
    {
      path: "/about",
      Component: About
    },
    {
      path:"/readList",
      loader:() =>fetch('/booksData.json'),
      Component: ReadList
    },
    {
      path:"/booksdetail/:id",
      loader:() =>fetch('/booksData.json'),
      Component: BooksDetail
    },
    {
      path:"*",
      Component: ErrorPage
    }
    ]
  },
]);
