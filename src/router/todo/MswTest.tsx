import axios from "axios";
import React, { useEffect, useState } from "react";
const MswTest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data);
    })();
  }, []);

  return (
    <>
      {data.map((v: { id: number; title: string; body: string }) => {
        return (
          <div key={v.title} role="article">
            {v.title}
          </div>
        );
      })}
    </>
  );
};

export default MswTest;
