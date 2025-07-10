import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 }, transition: 'background 0.2s', background: 'background.default' }}>
      <TableCell>
        <img src={img} alt="phone img" style={{ width: 60, borderRadius: 8 }} />
      </TableCell>
      <TableCell>
        <span style={{ fontWeight: 500 }}>{title}</span>
      </TableCell>
      <TableCell>
        <span>${price}</span>
      </TableCell>
      <TableCell>
        <IconButton size="small" color="secondary" onClick={() => decrement(id)}><RemoveIcon /></IconButton>
        <span style={{ fontWeight: 600, margin: '0 8px' }}>{count}</span>
        <IconButton size="small" color="secondary" onClick={() => increment(id)}><AddIcon /></IconButton>
      </TableCell>
      <TableCell>
        <IconButton size="small" color="error" onClick={() => removeItem(id)}><DeleteIcon /></IconButton>
      </TableCell>
      <TableCell>
        <span style={{ fontWeight: 600 }}>${total}</span>
      </TableCell>
    </TableRow>
  );
}
