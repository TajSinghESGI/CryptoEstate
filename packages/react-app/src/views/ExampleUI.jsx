/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, Balance } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import HouseItem from "../components/HouseItem";
import { useHistory } from 'react-router-dom';

export default function ExampleUI({route, purpose, setPurposeEvents, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  const history = useHistory();

  const handleClick = (image, title, rooms, price) => {
    console.log("Test");
    history.push({
      pathname:"/details", 
      state: { 
        image: image, 
        title: title, 
        rooms: rooms, 
        housePrice: price
      }
    })
  };

  const items = [
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
  ];
  

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", marginLeft: 100, flexWrap: 'wrap'}}>
        {items.map((item) => {
          return ( 
          <div onClick={()=> {handleClick(item.image, item.title, item.rooms, item.price)}}>
            <HouseItem 
              image={item.image}
              title={item.title}
              rooms={item.rooms}
              price={item.price}
            />
          </div>
          );
        })}
      </div>
    </div>
  );
}
