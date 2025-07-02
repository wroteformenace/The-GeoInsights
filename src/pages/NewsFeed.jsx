import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>News</h1>
      {news.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default NewsFeed;
