import React from 'react'
import { Link } from "react-router-dom";
import './Category.scss'
const Category = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
        <div className="category">
            <img src={item.img} alt="" />
            <span className="desc">{item.desc}</span>
            <span className="title">{item.title}</span>
        </div>
        
    </Link>
  )
}

export default Category