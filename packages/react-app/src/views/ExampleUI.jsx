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
  const [items, setItems] = useState([]);

  const image = "https://www.villanovo.fr/photos/1550/marrakech-villa-rose-anna-3931620815d94b79d980d11.12320438.1920.jpg";

  const handleClick = (image, title, rooms, price, addr, description, date, squareMeter, id ) => {
    console.log("PRICE", price);
    history.push({
      pathname:"/details", 
      state: { 
        image: image, 
        title: title, 
        rooms: rooms, 
        price: price,
        addr: addr,
        description: description,
        date,
        squareMeter: squareMeter,
        id: id,
      }
    })
  };

  useEffect(() => {
    if (readContracts != undefined)
      readOneHouses();
  }, [readContracts]);

  async function readOneHouses() {
    const connect = readContracts.YourContract.connect(userProvider.getSigner());
    connect.getAllRealEstate();
    setItems(await connect.getAllRealEstate());
    console.log("HOUUUUUUUUSE", await connect.getAllRealEstate());
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", marginLeft: 100, flexWrap: 'wrap'}}>
        {items.map((item, index) => {
          return ( 
          <div key={item.id} onClick={()=> {handleClick(image, item.title, item.nbRoom._hex, item.price._hex, item.addr, item.description, item.date._hex, item.squareMeter._hex, index)}}>
            <HouseItem 
              image={image}
              title={item.description}
              rooms={item.nbRoom}
              price={item.price}
            />
          </div>
          );
        })}
      </div>
    </div>
  );
}
