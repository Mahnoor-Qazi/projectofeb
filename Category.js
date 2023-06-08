import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../utils/data';
import './Category.scss'

const Category = () => {
   const param = useParams();
   
   const category = data.filter((c) => (
       c.catId == param.id
   ))
 console.log(category[0].banner)
  //  category.map((c) => console.log(c.rooms[0].images[0]))




  return (
    <div className='rooms'>
        <div className="banner">
            <img src={category[0].banner} alt="" />
        </div>
        <div className="allRooms">
            { category[0].rooms.map((room) => (
              <div className="roomItem">
              <Link to={`/room/${room.id}`} className="image" >
                <img src={room.images[0]} alt="" />
              </Link>
              <p>{room.title}</p>
              <span>Price Per Night ${room.pricePerNight}</span>
          </div>
            ) )}
        </div>

      
    </div>
  )
}

export default Category;
