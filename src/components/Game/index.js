import React from "react";
import {  useParams,useHistory } from "react-router";
import { useState, useEffect } from "react";
import Card from "../Card";
import Timer from '../Timer'
import "./style.css";

// {
//   name: "plants7",
//   src: "https://i.pinimg.com/564x/ed/30/a1/ed30a12b5f672ea74ca5ed635a87871f.jpg",
//   isSucssed: false,
// },


function Game() {
  const userName = useParams().userName;
  const history = useHistory();
  const userNameF = (e) => {
    history.push(`/Result/${userName}/${result}`);

  };
  const [arr, setArr] = useState([
    {
  name: "plants7",
  src: "https://i.pinimg.com/564x/a1/53/da/a153da0f37dc7386b2c67502d80ae9f7.jpg",
  isSucssed: false,
},

    {
      name: "plants1",
      src: "https://i.pinimg.com/564x/6d/86/c5/6d86c5153ccade3d70cc235338d4444c.jpg",
      isSucssed: false,
    },
    {
      name: "plants2",
      src: "https://i.pinimg.com/564x/c4/77/46/c477469d5bd5f1797cd74bb65847f7db.jpg",
      isSucssed: false,
    },
    {
      name: "plants3",
      src: "https://i.pinimg.com/564x/0a/48/a5/0a48a54db97de1dd0cfdd04650df3e36.jpg",
      isSucssed: false,
    },
    {
      name: "plants4",
      src: "https://i.pinimg.com/564x/e1/7e/9b/e17e9ba31aff98cf7f04bee00e7d85dc.jpg",
      isSucssed: false,
    },
    {
      name: "plants5",
      src: "https://i.pinimg.com/564x/15/56/be/1556becb4658034446f88eb308d8bf9d.jpg",
      isSucssed: false,
    },


    {
      name: "plants8",
      src: "https://i.pinimg.com/564x/a2/98/39/a29839270a9676ebd34ca37016a4545a.jpg",
      isSucssed: false,
    },
    {
      name: "plants9",
      src: "https://i.pinimg.com/564x/5c/da/c6/5cdac6181e53a22cc156c2ac70303841.jpg",
      isSucssed: false,
    },
    {
      name: "plants10",
      src: "https://i.pinimg.com/564x/d9/fc/e5/d9fce5fb0299f68ac88b206a964123aa.jpg",
      isSucssed: false,
    },
  ]);
  let [result, setResult] = useState(0); // init value result =0
  let [img1, setImage1] = useState(null); // intial value for obj img1 =null
  let [img2, setImage2] = useState(null); // intial value for obj img2 =null

  //  array & copy array elem => array.length*2
  useEffect(() => {
    let tempArr = [...arr, ...arr];

    tempArr = tempArr.map((elem) => ({
      ...elem,
      //set random id for each elem
      id: Math.round(Math.random() * 500),
    }));
    //sort by id
    tempArr.sort((elem1, elem2) => elem1.id - elem2.id);
    setArr(tempArr);
  }, []);

  //func coming from card component holding the obj
  //set it to img2 if ther is img1 || set it to img1
  const tempImg = (elem) => {
    console.log(elem);

    if (img1 != null) {
      //if there is img1 then set chosen elem to img2  as second choise
      img2 = elem;
      setImage2(img2);
    } else {
      //else set chosen elem to img1 as first choise
      img1 = elem;
      setImage1(img1);
    }

    //end func
  };

  // check there is chosen card or not
  // match card => add 1 to result
  // rest choises
  useEffect(() => {
    if (img1 && img2) {
      if (img1.name === img2.name) {  // match card => add 1 to result &rest
        result = result + 1;

        let cards = arr.map((elem) => {//edit selected to true
          if (elem.name === img1.name) {
            return { ...elem, isSucssed: true };
          }else{
            return elem
          }
          
        }); //loop end
        setArr(cards)
        restFunc(img1, img2);

      } else {
        restFunc(img1, img2);
      }
      setResult(result);
      if (result===9){ //if user finsh
        history.push(`/Result/:userName/:result`);
      } // to show on screen
    }
  }, [img1, img2]); // depend if there is img1,img2 or do not do the effect

  //reset func
  const restFunc = (img1, img2) => {
    img1 = null; //rest img1
    setImage1(img1);
    img2 = null; //rest img2
    setImage2(img2);
    return;
  };


  return (
    <div className="game">
  
      <div className="gap"></div>
      <p>Good Luck <span>{userName}!</span> You have only <span><Timer/> </span>second. You Score is = {result}</p>
      <div className="gap"></div>
     
    
      <div className="gap"></div>

      <div className="gameBox">
        {arr.map((elem, i) => (
          <Card
            className="card"
            elem={elem}
            tempImg={tempImg} //for hold chosen elem in card component
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
