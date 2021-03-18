import React, { useState,useEffect } from "react";
import NewsArticle from "./NewsArticle";

function News(props) {
  const [data,setData] = useState([]);

  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";

  useEffect(async () => {
    const response = await fetch(`http://newsapi.org/v2/everything?q=tesla&from=2021-02-18&sortBy=publishedAt&apiKey=d3a68d3a93a54948a016a1553bc4d20c`)
    const resData = await response.json();

    setData(resData['articles']);
})


  return (
    <div>
      {data?
            data.map((item) => {
                return <NewsArticle data={item} key={item.url}/>
            }): "loading :("}<br /><br />
    </div>
  );
}

export default News;