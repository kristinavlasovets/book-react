import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

export const Home = () => {

  const [pages, setPages] = useState([]);

  const getData = async(url) => {
    const response = await fetch(url);
    const {pages} = await response.json();
    setPages(pages);
  };

  useEffect(() => {
    getData('./db.json')
  }, []);

  console.log(pages)

  return (
    <div className="home">
      <p>Content</p>
      <div className="content__list">

        {pages && pages.map((item) => (
          <Link className="textlink" key={item.id} to={item.link}>{item.title}</Link>
        ))}

      </div>
    </div>
  );
};
