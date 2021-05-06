import React from "react";
import { Card } from 'antd';

const { Meta } = Card;

export default function HouseItem(props) {

    return (
            <Card
                style={{ width: 300, marginLeft: window.innerWidth * 0.04}}
                cover={
                    <img
                        alt={props.title}
                        src={props.image}
                    />
                }
            >
                <Meta
                    title={props.title}
                    description={`How many rooms ? ${props.rooms} How much ? ${props.price}`}
                    style={{fontSize: 16}}
                />
            </Card>
    );
}
