import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default class Cart extends Component {
  state = { paymentSuccess: false };
  handlePayment = () => {
    this.setState({ paymentSuccess: true });
    setTimeout(() => this.setState({ paymentSuccess: false }), 2000);
  };
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Box sx={{ maxWidth: 1100, mx: 'auto', my: 6, p: { xs: 1, md: 3 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Paper elevation={6} sx={{ borderRadius: 4, p: { xs: 2, md: 4 }, background: 'background.paper', boxShadow: 6, width: '100%', maxWidth: 900, mx: 'auto' }}>
                    <Grid container spacing={4} justifyContent="center">
                      <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, letterSpacing: 1, textAlign: 'center' }}>Order Summary</Typography>
                        <CartColumns />
                        <Divider sx={{ my: 2 }} />
                        <CartList value={value} />
                      </Grid>
                      <Grid item xs={12} md={4} sx={{ mx: 'auto', display: 'flex', justifyContent: 'center' }}>
                        <Paper elevation={0} sx={{ borderRadius: 4, p: 4, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(6,182,212,0.10)', maxWidth: 400, mx: 'auto' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <span role="img" aria-label="card">💳</span> Payment Details
                          </Typography>
                          <CartTotal value={value} history={this.props.history} onPay={this.handlePayment} />
                          <Typography variant="caption" sx={{ mt: 2, color: 'text.secondary', display: 'block', textAlign: 'center' }}>
                            This is a demo. No real payment will be processed.
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                  {this.state.paymentSuccess && (
                    <Box sx={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      bgcolor: 'rgba(0,0,0,0.2)',
                      zIndex: 2000,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Paper elevation={8} sx={{ p: 6, borderRadius: 4, textAlign: 'center', background: 'background.paper' }}>
                        <Typography variant="h4" sx={{ color: 'secondary.main', mb: 2 }}>
                          Payment Successful!
                        </Typography>
                        <span style={{ fontSize: 64, color: '#06b6d4' }}>✔️</span>
                      </Paper>
                    </Box>
                  )}
                </Box>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
