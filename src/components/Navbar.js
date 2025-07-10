import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ProductConsumer } from "../Context";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default class Navbar extends Component {
  render() {
    const { mode, setMode } = this.props;
    const isMobile = window.innerWidth < 600;
    return (
      <AppBar position="sticky" elevation={0} sx={{
        background: mode === 'light' ? 'rgba(30,41,59,0.7)' : 'rgba(17,24,39,0.9)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 24px rgba(30,41,59,0.10)',
        borderBottom: mode === 'light' ? '1px solid rgba(6,182,212,0.12)' : '1px solid #222',
        zIndex: 1201,
      }}>
        <Toolbar sx={{ minHeight: 72, px: { xs: 1, md: 6 }, flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? 1 : 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: isMobile ? 0 : 3, mb: isMobile ? 1 : 0 }}>
            <Link to="/">
              <Avatar src="/img/img-x.webp" alt="Logo" sx={{ width: 48, height: 48, mr: 1, boxShadow: 2 }} />
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1, fontFamily: 'Poppins', color: '#fff' }}>
                E-Store
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, mx: isMobile ? 0 : 2, maxWidth: 400, mb: isMobile ? 1 : 0 }}>
            <ProductConsumer>
              {(value) => <Search onSearch={value.setSearchQuery} mode={mode} />}
            </ProductConsumer>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
            <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              <IconButton
                color="inherit"
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                sx={{
                  background: mode === 'light' ? 'rgba(6,182,212,0.12)' : 'rgba(30,41,59,0.5)',
                  boxShadow: 2,
                  mr: 1,
                  transition: 'all 0.2s',
                  '&:hover': { background: mode === 'light' ? 'rgba(6,182,212,0.24)' : 'rgba(30,41,59,0.7)', transform: 'scale(1.08)' },
                }}
              >
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
            <Link to="/cart" style={{ color: 'inherit' }}>
              <IconButton size="large" color="inherit" sx={{
                background: mode === 'light' ? 'rgba(6,182,212,0.12)' : 'rgba(30,41,59,0.5)',
                boxShadow: 2,
                transition: 'all 0.2s',
                '&:hover': { background: mode === 'light' ? 'rgba(6,182,212,0.24)' : 'rgba(30,41,59,0.7)', transform: 'scale(1.08)' },
              }}>
                <Badge badgeContent={0} color="secondary" sx={{ '& .MuiBadge-badge': { fontWeight: 700, fontSize: 14 } }}>
                  <ShoppingCartIcon fontSize="inherit" />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}
