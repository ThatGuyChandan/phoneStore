import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Title({ name, title }) {
  return (
    <Box sx={{ textAlign: 'center', my: 6 }}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 1, fontFamily: 'Poppins', mb: 1 }}>
        {name} <Box component="span" sx={{ color: 'secondary.main', fontWeight: 900 }}>{title}</Box>
      </Typography>
      <Box sx={{ width: 80, height: 6, mx: 'auto', borderRadius: 3, background: 'linear-gradient(90deg, #06b6d4 0%, #1e293b 100%)', mb: 2 }} />
    </Box>
  );
}
