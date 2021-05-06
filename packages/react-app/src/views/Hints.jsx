/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { formatEther } from "@ethersproject/units";
import { Address, AddressInput } from "../components";
import { Select } from "antd";
import { useTokenList } from "../hooks";
import BuyHouse from '../components/BuyHouse';

const { Option } = Select;

export default function Hints({yourLocalBalance, mainnetProvider, price, address }) {

  // Get a list of tokens from a tokenlist -> see tokenlists.org!
  const [selectedToken, setSelectedToken] = useState("Pick a token!");
  let listOfTokens = useTokenList("https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json")

  return (
    <div>
      <BuyHouse />
    </div>
  );
}
