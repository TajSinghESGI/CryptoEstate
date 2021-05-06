/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from "react";
import SellHouse from '../components/SellHouse';


export default function Subgraphs({ createEstate, readContracts, userProvider }) {

  useEffect(() => {
    if (readContracts != undefined)
      readOneHouse(0);
  }, [readContracts]);

  async function readOneHouse(id) {
    const connect = readContracts.YourContract.connect(userProvider.getSigner());
    connect.getRealEstateById(id);
    console.log("HOUUUUUUUUSE", connect.getRealEstateById(id))
  }

  return (
    <div>
      <SellHouse createEstate={createEstate} />
    </div>
  );
}
