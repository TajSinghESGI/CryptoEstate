import React, { useState } from "react";
import { Button } from "antd";
import TextField from '@material-ui/core/TextField';

export default function RealEstate(props) {

    const [form, setForm] = useState({});

    return (
        <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', marginLeft: 170, width: window.innerWidth * 0.8 }}>
            <TextField style={{ marginTop: 50, width: window.innerWidth * 0.8, }} required id="price-required" label="Price" color="#FFFFFF" onChange={(e) => setForm({ ...form, price: e.target.value })} />
            <TextField style={{ marginTop: 50, width: window.innerWidth * 0.8 }} required id="address-required" label="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
            <TextField style={{ marginTop: 50, width: window.innerWidth * 0.8 }} required id="square-required" label="Square" onChange={(e) => setForm({ ...form, square: e.target.value })} />
            <TextField style={{ marginTop: 50, width: window.innerWidth * 0.8 }} required id="description-required" label="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <TextField style={{ marginTop: 50, width: window.innerWidth * 0.8 }} required id="date-required" label="Date" onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <TextField style={{ marginTop: 50, width: window.innerWidth * 0.8 }} required id="nbRoom-required" label="Nombre de pièces" onChange={(e) => setForm({ ...form, nbRoom: e.target.value })} />
            <Button style={{ marginTop: 100 }} variant="contained" color="primary" onClick={() => props.createEstate(parseInt(form.price), form.address, parseInt(form.square), form.description, parseInt(form.date), parseInt(form.nbRoom))}>
                Vendre
                </Button>
        </div>
    );
}