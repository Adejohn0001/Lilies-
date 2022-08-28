import axios from 'axios';
import React from 'react'



const Card = (props) => {
  let qty =1;

  const addItem = async(a,b)=>{
    let isExisting = false;
    const result = await axios.get("http://localhost:3001/orderitem");
    if(result.data.length === 0) {
        const order={name:a,price:b,qty:qty};
        axios.post("http://localhost:3001/orderitem", order);
    }
    else{
        result.data.map((orderItem)=>{
        if(a===orderItem.name){
            orderItem.qty +=1;
            const order={
                name:a,
                price:b,
                qty:orderItem.qty,
            };
            axios.put(`http://localhost:3001/orderitem/${orderItem.id}`, order);
            isExisting = true;
        }
        });
        if(isExisting ===false){
            const order={
                name:a,
                price:b,
                qty:qty,
            };
            axios.post("http://localhost:3001/orderitem", order);
        }
    }
  };
  return (
    <div className='cards'>
        {props.details.map( (value, index)=>(
        <div className='card' key={index}>
            <div className='card-image'>
                <img src={value.img} alt='menus' />
            </div>

            <div>
                <p className='card-title'>{value.title}</p>
                <p className='description'>{value.description}</p>
                <div className='price-add-btn'>
                   <p className='price-tag'>{value.price}</p>
                   <button className='add-btn' onClick={()=> addItem(value.title,value.price)}>Add to cart</button>
                </div>

            </div>
        </div>
        ))}
    </div>
  )
}

export default Card