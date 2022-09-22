import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link, useNavigate} from 'react-router-dom'

export const Page = () => {

  const [page, setPage] = useState();
  const {id} = useParams();

console.log(page)

const navigate = useNavigate();

useEffect(() => {
  async function fetchPage() {
    try {
      const {data} = await axios.get(
        './db.json/' + id
      );
      setPage(data);
    } catch (error) {
      alert('Error: loading error.');
      navigate('/');
    }
  }

  fetchPage();
}, []);


  return (
    <div>
      <p>{page.title}</p>

      <div className="page__text">
        <Link className="guide__icons" to={page.backlink}>
          <svg
            fill="#b9b4ad"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </Link>

        <p className="maintext">
         {page.text}
        </p>

        <Link className="guide__icons" to={page.forwardlink}>
          <svg
            fill="#b9b4ad"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </Link>
      </div>

      <Link className="textlink" to="/">
        back to content
      </Link>
    </div>
  )
}

