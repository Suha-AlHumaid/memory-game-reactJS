import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";

function Game() {
  const [arr, setArr] = useState([
    {
      name: "plants1",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pug749MNFCiQnMYlXPuRuXyvPAsdBXvHAqlH3P-ytyXMa7aOg9xwc4QmDo7cdFlGRTs&usqp=CAU",
      isSucssed: false,
    },
    {
      name: "plants2",
      src: "https://img-cdn.majarah.com/post/9255543845435846_110864764043691_909149921428189_8873684819100115_Majarah_science_.jpg",
      isSucssed: false,
    },
    {
      name: "plants3",
      src: "https://besthqwallpapers.com/Uploads/31-3-2018/46606/thumb2-jupiter-4k-planets-galaxy-nebula.jpg",
      isSucssed: false,
    },
    {
      name: "plants4",
      src: "https://www.almrsal.com/wp-content/uploads/2019/03/%D8%A7%D9%84%D8%BA%D9%84%D8%A7%D9%81-%D8%A7%D9%84%D8%AC%D9%88%D9%8A-%D9%84%D9%83%D9%88%D9%83%D8%A8-%D8%A7%D9%84%D9%85%D8%B4%D8%AA%D8%B1%D9%89.jpg",
      isSucssed: false,
    },
    {
      name: "plants5",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XY3U8y_IczhRKEoelQzlfvHuCHBXg0B3ty6g-UQV7lKlIh4SzPa8Rd_d3kIqTZ3WeCw&usqp=CAU",
      isSucssed: false,
    },
    {
      name: "plants6",
      src: "https://scx2.b-cdn.net/gfx/news/2020/1-earth.jpg",
      isSucssed: false,
    },
  ]);
  let [result, setResult] = useState(0);
  let [img1, setImage1] = useState(null);
  let [img2, setImage2] = useState(null);
  useEffect(() => {
    let tempArr = [...arr, ...arr];

    tempArr = tempArr.map((elem) => ({
      ...elem,
      id: Math.round(Math.random() * 500),
    }));
    tempArr.sort((elem1, elem2) => elem1.id - elem2.id);
    setArr(tempArr);
  }, []);

  //   const clicked = (e) => {
  //       console.log("hi");
  //hold imges
  // if (img1) {
  //   setimage1(elem);
  //   console.log(elem.name, "img1");
  // } else {
  //   setimage2(elem);
  //   console.log(elem.name, "img2");
  // }
  // //check btw img
  // if (img1 === img2) {
  //   setResult(++result);
  //   console.log(result);
  // }
  //   };
  const tempImg = (elem) => {
    console.log(elem);
    // console.log(elem);
    //hold imges
    // img1 ? setImage2(elem):setImage1(elem);
    if (img1 != null) {
      img2 = elem;
      setImage2(img2);
    } else {
      img1 = elem;
      setImage1(img1);
    }
    console.log(img1, "img1");
    console.log(img2, "img2");
    if (img1 && img2) {
      if (img1.name === img2.name) {
        console.log("كفوو");
       result= result+ 1;
        console.log(result);
      } else {
        restFunc(img1,img2)
        console.log(result);
       
      }
    }
//end func
  };
  const restFunc =(img1,img2)=>{
    img1=null //rest img1
    setImage1(img1)
    img2=null//rest img2
    setImage2(img2)
    console.log("rest");
    return 

  }


  return (
    <div className="grand">
      <div className="gap"></div>
      <div className="gap"></div>
      <h1>Game Section</h1>
      <div className="gap"></div>
      <h1>Timer</h1>
      <div className="gap"></div>

      <div className="gameBox">
        {arr.map((elem, i) => (
          <Card 
          className="card" 
          elem={elem} 
          tempImg={tempImg} 
          key={i} />
        ))}
      </div>
    </div>
  );
}

export default Game;
