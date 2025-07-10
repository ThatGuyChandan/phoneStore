import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <Card sx={{
        maxWidth: 340,
        m: 2,
        borderRadius: 4,
        boxShadow: '0 4px 24px rgba(30,41,59,0.10)',
        transition: '0.3s',
        position: 'relative',
        overflow: 'visible',
        '&:hover': { boxShadow: '0 8px 32px rgba(6,182,212,0.18)' },
        background: '#fff',
      }}>
        <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
          <ProductConsumer>
            {(value) => (
              <Box onClick={() => value.handleDetail(id)} sx={{ cursor: 'pointer' }}>
                <Link to="/details" style={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt={title}
                    sx={{
                      objectFit: 'contain',
                      p: 2,
                      borderRadius: 4,
                      background: '#f8fafc',
                      transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)',
                      '&:hover': { transform: 'scale(1.08)' },
                    }}
                  />
                </Link>
                <Box sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: 18,
                  boxShadow: 2,
                  letterSpacing: 1,
                }}>
                  ${price}
                </Box>
              </Box>
            )}
          </ProductConsumer>
        </Box>
        <CardContent sx={{ pb: 0 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 700, minHeight: 48, color: 'primary.main', fontFamily: 'Poppins' }}>
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', pt: 0, pb: 2, pr: 2 }}>
          <ProductConsumer>
            {(value) => (
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                startIcon={<ShoppingCartIcon />}
                disabled={inCart}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
                sx={{
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: 16,
                  px: 3,
                  py: 1,
                  boxShadow: 3,
                  transition: 'all 0.2s',
                  '&:hover': { boxShadow: 6, transform: 'scale(1.04)' },
                }}
              >
                {inCart ? 'In Cart' : 'Add to Cart'}
              </Button>
            )}
          </ProductConsumer>
        </CardActions>
      </Card>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
