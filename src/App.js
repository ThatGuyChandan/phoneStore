import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useMemo, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Model from "./components/Model";
import { ProductProvider, ProductConsumer } from "./Context";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e293b', // Deep blue
      contrastText: '#fff',
    },
    secondary: {
      main: '#06b6d4', // Vibrant teal
      contrastText: '#fff',
    },
    background: {
      default: '#f8fafc', // Soft gray
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Poppins, Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: 1 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(6,182,212,0.08)',
        },
      },
    },
  },
});

function App() {
  // Dark/Light mode state
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('colorMode');
    return saved || 'light';
  });
  useEffect(() => {
    localStorage.setItem('colorMode', mode);
  }, [mode]);
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={useMemo(() => createTheme({
      palette: {
        mode,
        primary: {
          main: '#1e293b',
          contrastText: '#fff',
        },
        secondary: {
          main: '#06b6d4',
          contrastText: '#fff',
        },
        background: {
          default: mode === 'light' ? '#f8fafc' : '#111827',
          paper: mode === 'light' ? '#fff' : '#1e293b',
        },
      },
      typography: {
        fontFamily: 'Poppins, Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h5: { fontWeight: 500 },
        button: { fontWeight: 600, textTransform: 'none', letterSpacing: 1 },
      },
      shape: {
        borderRadius: 16,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(6,182,212,0.08)',
            },
          },
        },
      },
    }), [mode])}>
      <CssBaseline />
      <ProductProvider>
        <React.Fragment>
          <ProductConsumer>
            {(value) => <Navbar onSearch={value.setSearchQuery} mode={mode} setMode={setMode} />}
          </ProductConsumer>
          <Box sx={{
            width: '100%',
            minHeight: { xs: 320, md: 400 },
            background: 'linear-gradient(90deg, #1e293b 0%, #06b6d4 100%)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            py: { xs: 6, md: 10 },
            mb: 4,
            boxShadow: 3,
          }}>
            <Container maxWidth="md" sx={{ textAlign: 'center' }}>
              <Box sx={{ fontSize: { xs: 36, md: 56 }, fontWeight: 700, mb: 2, letterSpacing: 1 }}>
                Discover the Latest Tech
              </Box>
              <Box sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: 400, mb: 4, opacity: 0.9 }}>
                Shop premium electronics, gadgets, and accessories with exclusive deals and fast delivery.
              </Box>
              <Button variant="contained" color="secondary" size="large" sx={{ px: 5, py: 1.5, fontSize: 20, boxShadow: 4 }} onClick={() => navigate('/') }>
                Shop Now
              </Button>
            </Container>
          </Box>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/details" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Default />} />
          </Routes>
          <Model />
          <Box component="footer" sx={{
            mt: 8,
            py: 4,
            background: 'linear-gradient(90deg, #1e293b 0%, #06b6d4 100%)',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 -2px 16px rgba(30,41,59,0.10)',
          }}>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 1 }}>
              <IconButton color="inherit" href="https://github.com/" target="_blank"><GitHubIcon /></IconButton>
              <IconButton color="inherit" href="https://twitter.com/" target="_blank"><TwitterIcon /></IconButton>
              <IconButton color="inherit" href="https://linkedin.com/" target="_blank"><LinkedInIcon /></IconButton>
            </Stack>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} E-Store. All rights reserved.
            </Typography>
          </Box>
        </React.Fragment>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
