/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, Balance } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import HouseItem from "../components/HouseItem";
import { useHistory } from 'react-router-dom';
import Item from "antd/lib/list/Item";

export default function ExampleUI({route, purpose, setPurposeEvents, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  //console.log(readContracts.realEstates(0));
  

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
      id: 1,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      id: 2,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      id: 3,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      id: 4,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      id: 5,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      id: 6,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      id: 7,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      id: 8,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      id: 9,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      id: 10,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "appart",
      rooms: 4,
      price: 1000
    },
    {
      id: 11,
      image: "https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp",
      title: "Villa",
      rooms: 4,
      price: 1000
    },
    {
      id: 12,
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
          <div key={item.id} onClick={()=> {handleClick(item.image, item.title, item.rooms, item.price)}}>
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
