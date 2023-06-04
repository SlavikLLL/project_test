import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query'
import newRequest from '../utils/newReq';

const Card = ({item}) => {
  const { isLoading, error, data,  } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
    newRequest.get(`/users/${item.userId}`).then(res=>{
      return res.data
    })
  })
  return (
    <Link to ={`/gig/${item._id}`} className='link'>
    <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
         {isLoading ? "Loading" : error ? "Something went wrong" : <div className="user">
            <img src={data.img} alt="" />
            <span>{data.username}</span>
          </div>}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="" />
          <div className="price">
          <span>STARTING AT</span>
          <span>{item.price}</span>
          </div>
        </div>
    </div>
    </Link>
    )
}

export default Card