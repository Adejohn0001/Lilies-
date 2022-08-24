import React from 'react'
import '../../src/styles/Components/Menu.css'
import burgers from '../../src/assets/images/burger-meat.png'
import rice from '../../src/assets/images/fried-rice.png'
import balls from '../../src/assets/images/balls.png'
import sweet from '../../src/assets/images/sweet-food.png'
import bread from '../../src/assets/images/bread.png'
import cakes from '../../src/assets/images/pan-cakes.png'

const Menu = () => {
  return (
    <div className='menus'>
        <div className='menu-list1'>
          <div className='details'>
             <div><img src={burgers} alt='burger-meat pix' /> </div>
             <div><h6>Stir Fry Pasta</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

        <div className='menu-list1'>
          <div className='details'>
             <div><img src={rice} alt='burger-meat pix' /> </div>
             <div><h6>Stir Fry Pasta</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

       <div className='menu-list1'>
          <div className='details'>
             <div><img src={balls} alt='burger-meat pix' /> </div>
             <div><h6>Stir Fry Pasta</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

       <div className='menu-list1'>
          <div className='details'>
             <div><img src={sweet} alt='burger-meat pix' /> </div>
             <div><h6>Stir Fry Pasta</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

       <div className='menu-list1'>
          <div className='details'>
             <div><img src={bread} alt='burger-meat pix' /> </div>
             <div><h6>Stir Fry Pasta</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

       <div className='menu-list1'>
          <div className='details'>
             <div><img src={cakes} alt='burger-meat pix' /> </div>
             <div><h6>Stir Fry Pasta</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>


    </div>
    
  )
}

export default Menu