import React from 'react'
import './Messages.scss'
import {Link} from "react-router-dom"

const Messages = () => {
const message = "Lorem  commodi? Consectetur accusantium aliquam voluptates quas qui eligendi cumque! Saepe laboriosam quidem exercitationem beatae nihil nemo"
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
          <th>Buyer</th>
          <th>Last Message</th>
          <th>Date</th>
          <th>Action</th>
          </tr>
          <tr className='active '>
            <td>
              Slavik
            </td>
            <td><Link to='/message/123' className='link'>{message}</Link></td>
            <td>{'12.05.2023'}</td>
            
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>
              Slavik
            </td>
            <td><Link to='/message/123' className='link'>{message}</Link></td>
            <td>{'12.05.2023'}</td>
            
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>
              Slavik
            </td>
            <td><Link to='/message/123' className='link'>{message}</Link></td>
            <td>{'12.05.2023'}</td>
            
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
         
          
        </table>
      </div>
    </div>
    )
}

export default Messages