import React from 'react';

const Logo = (props) => {
  const { url, name, position, className, onHoverIn, onHoverOut } = props;
  return (
    <a href={url} title={name} target="_blank" onMouseEnter={onHoverIn}>
      <i 
        style={position} 
        className={className} 
        alt={name} 
      ></i>
    </a>
  )
}

export default Logo;