import React from 'react'
import PropTypes from 'prop-types'


const Card = ({children, reverse}) => {
  return (
    <div className={`card  ${reverse && 'reverse'}`}> {children} </div>
  )
}

Card.defaultProps = {
    reverse: true
}

Card.protoType = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}


export default Card