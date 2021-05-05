import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Real Estetherum"
        subTitle="Buy or Sell your house with Etherum"
        style={{ cursor: "pointer"}}
      />
    </a>
  );
}
