import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'


const FeedbackItem = ({item}) => {
    

    const handleClick = () =>{
        // setRating((prev) =>{
        //     console.log(prev);
        //    return prev+1;
        // });
    }
  return (
    <Card >
    <div className="num-display">{item.rating}</div>
    <div className="text-display">{item.text}</div>
    {/* <button onClick={handleClick}>Click</button> */}
      
    </Card>
  )
}

FeedbackItem.PropTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
