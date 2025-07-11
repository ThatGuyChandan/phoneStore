import React from "react";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function Search({ onSearch, mode }) {
  const theme = useTheme();
  const [focused, setFocused] = React.useState(false);
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      background: mode === 'dark' ? 'rgba(30,41,59,0.8)' : '#fff',
      borderRadius: 3,
      boxShadow: focused ? 4 : 1,
      px: 2,
      py: 0.5,
      border: focused ? `2px solid ${theme.palette.secondary.main}` : `1.5px solid ${mode === 'dark' ? '#334155' : '#e0e7ef'}`,
      transition: 'all 0.2s',
      width: '100%',
      maxWidth: 340,
    }}>
      <SearchIcon sx={{
        color: focused ? theme.palette.secondary.main : (mode === 'dark' ? '#94a3b8' : '#64748b'),
        fontSize: 26,
        mr: 1,
        transition: 'color 0.2s, transform 0.2s',
        transform: focused ? 'scale(1.15) rotate(-8deg)' : 'none',
      }} />
      <InputBase
        placeholder="Search products..."
        onChange={e => onSearch(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        sx={{
          color: mode === 'dark' ? '#fff' : '#222',
          fontSize: 18,
          width: '100%',
          fontFamily: 'Poppins',
        }}
        inputProps={{ 'aria-label': 'search products' }}
      />
    </Box>
  );
}
