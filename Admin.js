import React, { useMemo } from 'react';
import { orders } from '../utils/data';
import './Admin.scss';

const Admin = () => {
  let i = 0;

  const memoizedOrders = useMemo(() => {
    return orders.map((order) => {
      return (
        <div className="order" key={order.id}>
          <div className="personalDetails">
            <p>Order# {++i}</p>
            <p>Name: {order.name}</p>
            <p>City: {order.city}</p>
            <p>Street: {order.street}</p>
            <p>ZIP: {order.zip}</p>
            <p>Phone: {order.street}</p>
          </div>
          <div className="rooms">
            {order.rooms.map((room) => (
              <div className="room" key={room.id}>
                <div className="image">
                  <img src={room.images[0]} alt="" />
                </div>
                <p className="item">Title: {room.name}</p>
                <p className="item">Price (One Night): ${room.price}</p>
                <p className="item">Quantity : {room.amount}</p>
              </div>
            ))}
          </div>
          <div className="subtotal">Subtotal: ${order.subtotal}</div>
        </div>
      );
    });
  }, [orders]);

  return (
    <div className="orders">
      <div className="meta">
        <div className="header">Orders Summary</div>
        <div className="totalOrders">Total Orders: {orders.length}</div>
      </div>

      <div className="allOrders">{memoizedOrders}</div>
    </div>
  );
};

export default Admin;


































// import React from 'react';
// import { orders } from '../utils/data';
// import './Admin.scss';

// const Admin = () => {
//   let i = 0;
//   return (
//     <div className='orders'>
//       <div className="meta">
//         <div className="header">Orders Summary</div>
//         <div className="totalOrders">Total Orders: {orders.length}</div>
//         </div>

//       <div className="allOrders">
//         {orders.map((order) => (
//           <div className="order">
//             <div className="personalDetails">
//               <p>Order# {++i}</p>
//               <p>Name: {order.name}</p>
//               <p>City: {order.city}</p>
//               <p>Street: {order.street}</p>
//               <p>ZIP: {order.zip}</p>
//               <p>Phone: {order.street}</p>
//             </div>
//             <div className="rooms">
//               {order.rooms.map(room => (
//                 <div className="room">
//                   <div className="image">
//                     <img src={room.images[0]} alt="" />
//                   </div>
//                   <p className='item'>Title: {room.name}</p>
//                   <p className="item">Price (One Night): ${room.price}</p>
//                   <p className='item'>Quantity : {room.amount}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="subtotal">Subtotal: ${order.subtotal}</div>
//           </div>
          
//         ))}
//       </div>

//     </div>
//   )
// }

// export default Admin
