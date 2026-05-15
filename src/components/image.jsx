import React from 'react'

const image = ({src,alt,className}) => {
  return (
    <div>
      <img className={className} src={src} alt={alt}/>
    </div>
  )
}

export default image