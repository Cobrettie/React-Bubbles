import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../util/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(response => {
        setColorList(response.data)
      })
      .catch(err => console.log(err))
  }, [refresh])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} refresh={refresh} setRefresh={setRefresh} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
