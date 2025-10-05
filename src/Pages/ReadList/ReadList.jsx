import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import ReadBook from "../Book/ReadBook";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );

    setReadList(myReadList);
  }, []);


  const handleSort = (type) =>{
    setSort(type);
    if(type === "Pages"){
        const sortedByPages = [...readList].sort((a,b) => b.totalPages - a.totalPages);
        setReadList(sortedByPages)
    }

    if(type === "Rating"){
        const sortedByRating = [...readList].sort((a,b) => b.rating - a.rating);
        setReadList(sortedByRating)
    }
  }


  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read {readList.length} </h2>
          <div className="flex justify-center">
            <details className="dropdown">
              <summary className="btn m-1">{`Sort By: ${sort ? sort : ""}`}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a onClick={() => handleSort("Pages")}>Pages</a>
                </li>
                <li>
                  <a onClick={() => handleSort("Rating")}>Rating</a>
                </li>
              </ul>
            </details>
          </div>
          <div>
            {readList.map((b) => (
              <ReadBook key={b.bookId} Read={b} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
