import React, {useEffect, useState} from 'react';
import { PageBlock } from '../components/PageBlock';

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

  return (
    <div className="home">
      <p>Content</p>
      <div className="content__list">

        {pages && pages.map((item) => (

          <PageBlock key={item.id} id={item.id} title={item.title} link={item.link} text={item.text} backlink={item.backlink} forwardlink={item.forwardlink} />
        ))}

      </div>
    </div>
  );
};
