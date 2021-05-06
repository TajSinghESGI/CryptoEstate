import React from "react";
import { Card, Form, DatePicker, TimePicker, Button } from 'antd';
const { RangePicker } = DatePicker;

const { Meta } = Card;

export default function SellHouse(props) {

    return (
        <Form name="time_related_controls">
            <Form.Item name="date-picker" label="DatePicker">
                <DatePicker />
            </Form.Item>
            <Form.Item name="date-time-picker" label="DatePicker[showTime]">
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item name="month-picker" label="MonthPicker">
                <DatePicker picker="month" />
            </Form.Item>
            <Form.Item name="range-picker" label="RangePicker">
                <RangePicker />
            </Form.Item>
            <Form.Item name="range-time-picker" label="RangePicker[showTime]">
                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item name="time-picker" label="TimePicker" {...config}>
                <TimePicker />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    xs: { span: 24, offset: 0 },
                    sm: { span: 16, offset: 8 },
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
          </Button>
            </Form.Item>
        </Form>
    );
}
