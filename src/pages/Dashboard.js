import React, { useState } from 'react'
import '../styles/pages/Dashboard.css'
import Lilies from '../../src/assets/images/logo.png'
import Home from '../../src/assets/images/Dashboard-home.png'
import Profile from'../../src/assets/images/Profile.png'
import Order from'../../src/assets/images/Order.png'
import Cart from'../../src/assets/images/Cart.png'
import girl from'../../src/assets/images/girl-image.png'
import { Link } from 'react-router-dom'
import ModalCart from '../components/ModalCart'
import Card from '../components/Card'
import CardData from '../../src/components/CardData'



const Dashboard = () => {

  let user = JSON.parse(sessionStorage.getItem('data'))

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const time = 14;

  return (
    <div className='dashboard '>
      <div className='navigation'>
      <div className="logo-icon">
                <div><img src={Lilies} alt="logo" /> </div>
                <div><h6>Lilies</h6></div>
            </div>

            <div className='column'>
              <div className='row1'>
                <div className='home-image'> <img src={Home} alt='home-icon' /></div>
                <div><Link to='/dashboard' className='to-dashboard'>Dashboard</Link></div>
              </div>

              <div className='row2'>
                <div className='home-image'> <img src={Profile} alt='profile-icon' /></div>
                <div><p>Your Profile</p></div>
              </div>

              <div className='row3'>
                <div className='home-image'> <img src={Order} alt='profile-icon' /></div>
                <div><p>Order</p></div>
              </div>

              <div className='row4'>
                <div className='home-image'> <img src={Cart} alt='profile-icon' /></div>
                <div><Link to='/cart' className='cart-link'> <p onClick={handleShowModal} >Cart</p> </Link></div>
              </div>
            </div>
      </div>
      <div className='menu'>
        <div className='containers1'>
          <div><p className='dashboard-greeting'>{time<=15 ? <p className='greeting'>Good Afternoon</p> :  time>=16 ? <p className='greeting'>Good Evening</p> : <p className='greeting'>Good Morning</p>}{`${user?.name}`}</p>
             <p className='what-are-you-buying'>What delicious meal are you craving today?</p>
          </div>

          <div><img src={girl} alt='girl' className='girl-image' /> </div>
        </div>

        <div className='menu'>
          <Card details={CardData}/>
        </div>

        <div>
          {showModal && <ModalCart closeModal={handleCloseModal} />}
        </div>
      </div>

    </div>
  )
}

export default Dashboard