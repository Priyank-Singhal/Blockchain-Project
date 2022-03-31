import React from 'react'
import './Content1.css'

const Content = () => {
  return (
    <div className='background' id='content1'>
      <div className='text'>
        <h1>What is BlockChain?</h1>
        <button
          className="btn btn-dark btn-lg">
          <a className="link" href='../displayCards/0'>Read More </a>
        </button>
      </div>
    </div>
  )
}

export default Content