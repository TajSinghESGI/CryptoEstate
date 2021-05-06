/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, Balance } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import { useLocation } from 'react-router-dom';

import { Image } from 'antd';



export default function Details({ props, purpose, setPurposeEvents, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  const location = useLocation();
  return (
    <div style={{}}>
      <Image
        style={{justifyContent: "flex-end"}}
        width={window.innerWidth * 0.4}
        height={window.innerHeight * 0.4}
        src={location.state.image}
      />
    </div>
  );
}
