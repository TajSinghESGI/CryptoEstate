/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin, Descriptions } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, Balance } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import { useLocation } from 'react-router-dom';

import { Image } from 'antd';



export default function Details({ props,purpose, buyHouse, setPurposeEvents, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  const location = useLocation();

  return (
    <div style={{}}>
      <Image
        style={{ justifyContent: "flex-end" }}
        width={window.innerWidth * 0.4}
        height={window.innerHeight * 0.4}
        src={location.state.image}
      />
        <Descriptions style={{flexDirection: 'column'}} title="Détail du bien immobilier" bordered>
          <Descriptions.Item label="Address">{location.state.addr}</Descriptions.Item>
          <Descriptions.Item label="Price">{parseInt(location.state.price)}</Descriptions.Item>
          <Descriptions.Item label="Number of Rooms">{parseInt(location.state.rooms)}</Descriptions.Item>
          <Descriptions.Item label="House Description">{location.state.description}</Descriptions.Item>
          <Descriptions.Item label="Date" span={2}>{parseInt(location.state.date)}</Descriptions.Item>
          <Descriptions.Item label="Square Meter" span={3}>{parseInt(location.state.squareMeter)}</Descriptions.Item>
        </Descriptions>
        <Button style={{ marginTop: 100 }} variant="contained" color="primary" onClick={() => buyHouse(location.state.id)}>
                Acheter
        </Button>
    </div>
  );
}
