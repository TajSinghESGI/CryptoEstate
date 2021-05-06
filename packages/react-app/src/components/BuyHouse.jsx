import React, { useEffect, useState } from "react";
import { Button } from "antd";
import TextField from '@material-ui/core/TextField';

export default function RealEstate(props) {

    const [form, setForm] = useState({});

    return (
        <div style={{ marginTop: 100, flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
            <TextField style={{ flexDirection: 'column' }} required id="price-required" label="Price" color="#FFFFFF" onChange={(e) => setForm({ ...form, price: e.target.value })} />
            <TextField required id="address-required" label="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
            <TextField required id="square-required" label="Square" onChange={(e) => setForm({ ...form, square: e.target.value })} />
            <TextField required id="description-required" label="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <TextField required id="date-required" label="Date" onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <TextField required id="nbRoom-required" label="Nombre de pièces" onChange={(e) => setForm({ ...form, nbRoom: e.target.value })} />
            <Button variant="contained" color="primary" onClick={() => props.fnCreateMarket(parseInt(form.price), form.address, parseInt(form.square), form.description, parseInt(form.date), parseInt(form.nbRoom))}>
                Vendre
                </Button>
        </div>
    );
}