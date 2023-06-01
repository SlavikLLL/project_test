import React, { useState } from 'react'
import './Gigs.scss'
import Card from '../../components/Card';
import { gigs } from '../../data';
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const reSort = (type) =>{
    setSort(type);
    setOpen(false)

  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">SLAVIKLL GRAPHICS & DESIGN</span>
        <h1>AI Artist</h1>
        <p>Explore the boundaries of art and technology with AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text"  placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>Sort by</span>
            <span className='sortType'>{sort === 'sales' ? 'Best selling' : 'Newest'}</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
            { open && <div className="rightMenu">
              { sort == 'sales' ?(
              <span onClick={()=>reSort("createdAt")}>Newest</span>
              ) :(
              <span onClick={()=>reSort("sales")}>Best selling</span> )}
            </div>}

          </div>
        </div>
        <div className="cards">
          {gigs.map(gig=>(
            <Card key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
    )
}

export default Gigs