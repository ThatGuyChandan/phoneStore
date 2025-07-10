import React from "react";
import CartItem from "./CartItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import CartColumns from "./CartColumns";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 3, background: 'background.paper' }}>
      <Table sx={{ minWidth: 650 }} aria-label="cart table">
        <CartColumns />
        <TableBody>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} value={value} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
