import React, { useContext, useState } from 'react'
import CartContext from '../../store/cart-context';
import './Cart.scss';
import PersonalDetails from '../personalDetails/PersonalDetails';
import CloseIcon from '@mui/icons-material/Close';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [ isInfo, setIsInfo] = useState(false);

  return (
    <div className='cart'>
    {!isInfo ? <div>
      <div className='header'><h4>Your Selected Rooms</h4>  <CloseIcon onClick= {props.close} className="close"/></div>
      <div className="items">
        {cartCtx.items.map((i) => (
          <div className="item">
            <div className="image">
              <img src={i.images[0]} alt="" />
            </div>
            <div className="description">
              <h5 className="title">{i.name}</h5>
              <p className='desc'>{i.desc}</p>
              <span className='price'>${i.price}</span>
            </div>
            <div className="quantity">
              x{i.amount}
            </div>
          </div>

        ))}
      </div>
      <div className='subtotal'>
        <span>Subtotal</span><span>${cartCtx.totalAmount}</span>
      </div>
      <button className='checkoutBtn' onClick={()=> setIsInfo( prev => !prev)}>Book Now</button>
      <button className='resetBtn' onClick={()=> cartCtx.resetCart()}>Reset</button>
    </div>
    :  <PersonalDetails close= {props.close}/>
  }
</div>
  )
}

export default Cart;

