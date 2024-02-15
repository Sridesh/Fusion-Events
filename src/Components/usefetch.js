import { useState, useEffect } from "react";
import Axios from "axios";

const useFetch = (url) => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    // console.log('Fetching data...');
    Axios.get(url)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  return { datas };
};

export default useFetch;
