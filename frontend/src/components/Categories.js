import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import img2 from '../Ecommerce_banners/img2.jpg'
import img3 from '../Ecommerce_banners/img3.jpg'
import img4 from '../Ecommerce_banners/img4.jpg'
import img5 from '../Ecommerce_banners/img5.jpg'
import img1 from '../Ecommerce_banners/img1.jpg'
import { Link } from 'react-router-dom';
import { electronics } from '../constants/categoryConstants';  
import { clothes } from '../constants/categoryConstants';  
import { toys } from '../constants/categoryConstants';  
import { stationary } from '../constants/categoryConstants';  
import { accessories } from '../constants/categoryConstants';  


const images = [
  {
    url: img2,
    title: 'Electronics',
    width: '20%',
    category: electronics,
  },
  {
    url: img3,
    title: 'Clothes',
    width: '20%',
    category: clothes,
  },
  {
    url: img4,
    title: 'Toys',
    width: '20%',
    category: toys,
  },
  {
    url: img5,
    title: 'Stationary',
    width: '20%',
    category: stationary,
  },
  {
    url: img1,
    title: 'Accessories',
    width: '20%',
    category: accessories,
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Link to={`/search/category/${image.category}`}>
            <Typography
              component="span"
              variant="subtitle1"
              color="white"
              fontSize="1.9rem"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
            </Link>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}