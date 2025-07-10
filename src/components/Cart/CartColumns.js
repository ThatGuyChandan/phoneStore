import React from "react";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function CartColumns() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 700, fontSize: 18 }}>Products</TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: 18 }}>Name of product</TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: 18 }}>Price</TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: 18 }}>Quantity</TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: 18 }}>Remove</TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: 18 }}>Total</TableCell>
      </TableRow>
    </TableHead>
  );
}
