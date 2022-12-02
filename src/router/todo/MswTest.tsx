import axios from "axios";
import React, { useEffect, useState } from "react";
const MswTest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(data);
      } catch (e) {
        setData(null);
      }
    })();
  }, []);

  return (
    <>
      {data ? (
        data.map((v: { id: number; title: string; body: string }) => {
          return (
            <div key={v.title} role="article">
              {v.title}
            </div>
          );
        })
      ) : (
        <div>error</div>
      )}
    </>
  );
};

export default MswTest;
