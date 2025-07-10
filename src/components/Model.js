import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
export default function Model() {
  const theme = useTheme();
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModel } = value;
        const { img, title, price } = value.modalProduct;
        return (
          <Dialog open={modalOpen} onClose={closeModel} maxWidth="xs" PaperProps={{ sx: { borderRadius: 4, p: 2, background: theme.palette.background.paper } }}>
            <DialogContent sx={{ textAlign: 'center', color: theme.palette.text.primary }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Added to cart
              </Typography>
              <img src={img} alt="phone img" style={{ width: '100%', maxWidth: 260, borderRadius: 8, marginBottom: 16 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {title}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 500, mb: 3 }}>
                price: ${price}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mr: 2, px: 4 }} onClick={closeModel} component={Link} to="/">
                Store
              </Button>
              <Button variant="contained" color="secondary" sx={{ px: 4 }} onClick={closeModel} component={Link} to="/cart">
                Cart
              </Button>
            </DialogContent>
          </Dialog>
        );
      }}
    </ProductConsumer>
  );
}
