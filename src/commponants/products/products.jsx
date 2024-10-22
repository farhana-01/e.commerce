import { Box, Card, Divider, IconButton, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import product1 from '..//../assets/menu-item-1.png'
import product2 from '..//../assets/menu-item-2.png'
import product3 from '..//../assets/menu-item-3.png'
import ShareIcon from '@mui/icons-material/Share'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "..//..//commponants/products/product.css"
import CloseIcon from '@mui/icons-material/Close';


const DummyProduct = [
  {
    id:1,
    img:product1,
    name:'product 1',
    price:'20'

  },
  {
    id:2,
    img:product2,
    name:'product 2',
    price:'30'

  },
  {
    id:3,
    img:product3,
    name:'product 3',
    price:'40'

  },
]





 const Products = () => {
  const [Cartlist , setCartList] = useState([]);
  const [openAlert, setOpenAler] = useState(false)
  console.log(Cartlist);
  
   const cartHandler = (product) =>{  
    const isExist = Cartlist.find((cart)=> cart.id === product.id);
  //  console.log(isExist);
   

    if(!isExist){
      setCartList((prev) => [...prev,product]);
    } else{
     setOpenAler(true)
    }
   };
    
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAler(false);
  };


  const action = (
    <React.Fragment>
     
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
   
    <>
     <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product Already Added"
        action={action}
      />
      <Box sx={{display:'flex',gap:'100px'}} className='container mt-5'>
    {
      DummyProduct?.map((product, index )=> {
        
        return ( 
        
         <Card  key={index} sx={{padding:'30px', cursor:'pointer', width:'400px' }}>
      <Box >
          <Box className=" text-center">
          <img className="product-img" width={100}  src={product.img} alt={'${product.name}'} />
          </Box>
          <Box  sx={{marginTop:'20px'}}> 
          <Typography variant='51'>{product.name}</Typography>
          <Divider sx={{borderColor:'#333'}} className='mt-2' />
          <Box className='d-flex justify-content-between mt-3'>
          <ShareIcon />
          <FavoriteIcon />
          <AddShoppingCartIcon onClick={()=>{cartHandler(product)}} />
          </Box>
          </Box>
      </Box>
    </Card>
   
        );
        
      })

    }
     </Box>
    </>
  )
}
export default Products;
