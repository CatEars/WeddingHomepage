import * as React from 'react';
import { Typography } from '@mui/material';
import ProductHeroLayout from './HeroLayout';

const backgroundImage = 'info/terra.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        Att gifta sig är skojsigt
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Väldigt kul, faktiskt
      </Typography>
    </ProductHeroLayout>
  );
}