import { Box, Card, Divider, Typography } from '@mui/material';
import React, { useState } from 'react'
import product1 from '..//../assets/menu-item-1.png'
import product2 from '..//../assets/menu-item-2.png'
import product3 from '..//../assets/menu-item-3.png'
import ShareIcon from '@mui/icons-material/Share'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "..//..//commponants/products/product.css"

const DummyProduct = [
  {
    img:product1,
    name:'product 1',
    price:'20'

  },
  {
    img:product2,
    name:'product 2',
    price:'30'

  },
  {
    img:product3,
    name:'product 3',
    price:'40'

  },
]





 const Products = () => {
  const [Cartlist , setCartList] = useState([]);
  console.log(Cartlist);
  
  
   const cartHanlder = (product) =>{   
    setCartList((prev) => [...prev,product]);
   };
    

  return (
   
    <>
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
          <AddShoppingCartIcon onClick={()=>{cartHanlder(product)}} />
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
