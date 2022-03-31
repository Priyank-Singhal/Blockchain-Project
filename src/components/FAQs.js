import React from 'react'
import './FAQs.css'
import ques from './FAQ_data'

const Content = () => {
  return (
    <div id='faq'>
      <hr />
      <h2>FAQs</h2>
      <br />
      {/* Mapping over the data of FAQs */}
      {ques.map(que => {
        return (
          <div>
            <h3>{que.q}</h3>
            <p>{que.a}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Content