import React from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Slide from '@mui/material/Slide';
// import PayPalButton from "./PayPalButton";
export default function CartTotal({ value, history, onPay }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  const [card, setCard] = useState('');
  const [method, setMethod] = useState('credit');
  const [paying, setPaying] = useState(false);
  const handlePay = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      if (onPay) onPay();
    }, 600);
  };
  return (
    <Box sx={{ textAlign: 'center', color: 'text.primary', py: 3 }}>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ mb: 3, px: 4, fontWeight: 600 }}
        onClick={clearCart}
        component={Link}
        to="/"
      >
        Clear Cart
      </Button>
      <Typography variant="h6" sx={{ fontWeight: 700, mt: 2 }}>
        SubTotal: <Box component="span" sx={{ fontWeight: 800 }}>${cartSubtotal}</Box>
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Tax: <Box component="span" sx={{ fontWeight: 800 }}>${cartTax}</Box>
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 900, mt: 1, mb: 3 }}>
        Total: <Box component="span" sx={{ fontWeight: 900, color: 'secondary.main' }}>${cartTotal}</Box>
      </Typography>
      {/* Fake credit card preview */}
      <Slide direction="down" in={!!card} mountOnEnter unmountOnExit>
        <Box sx={{
          mb: 2,
          p: 2,
          borderRadius: 3,
          background: 'linear-gradient(90deg, #06b6d4 0%, #1e293b 100%)',
          color: '#fff',
          fontFamily: 'monospace',
          fontSize: 18,
          boxShadow: 3,
          textAlign: 'left',
          minHeight: 60,
        }}>
          <Box sx={{ fontSize: 20, letterSpacing: 2 }}>{card.padEnd(16, '•').replace(/(.{4})/g, '$1 ')}</Box>
          <Box sx={{ fontSize: 14, opacity: 0.8, mt: 1 }}>Cardholder: John Doe</Box>
          <Box sx={{ fontSize: 14, opacity: 0.8 }}>Exp: 12/29</Box>
        </Box>
      </Slide>
      <TextField
        label="Card Number"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ my: 2, background: 'background.paper', borderRadius: 2, boxShadow: 1 }}
        value={card}
        onChange={e => setCard(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreditCardIcon color="secondary" />
            </InputAdornment>
          ),
          inputMode: 'numeric',
          pattern: '[0-9]*',
        }}
      />
      <TextField
        select
        label="Payment Method"
        value={method}
        onChange={e => setMethod(e.target.value)}
        size="small"
        fullWidth
        sx={{ mb: 3, background: 'background.paper', borderRadius: 2, boxShadow: 1 }}
      >
        <MenuItem value="credit">Credit Card</MenuItem>
        <MenuItem value="paypal">PayPal</MenuItem>
        <MenuItem value="apple">Apple Pay</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<LockIcon />}
        sx={{
          px: 6,
          py: 1.5,
          fontWeight: 700,
          fontSize: 18,
          borderRadius: 3,
          background: 'linear-gradient(90deg, #06b6d4 0%, #1e293b 100%)',
          boxShadow: 4,
          transition: 'all 0.2s',
          transform: paying ? 'scale(1.08)' : 'none',
          '&:hover': { boxShadow: 8, background: 'linear-gradient(90deg, #1e293b 0%, #06b6d4 100%)', transform: 'scale(1.04)' },
        }}
        onClick={handlePay}
        disabled={paying}
      >
        Pay Now
      </Button>
    </Box>
  );
}
