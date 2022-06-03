import React from 'react'
import { PropTypes } from 'prop-types';

const Button = ({ title, btnTitle, variant, disableShadow, disabled, startIcon, endIcon, size, color }) => {
    console.log(variant);
  if (variant === undefined) {
      return (
        <div>
            <div>{title}</div>
            <button className="btn-base">{btnTitle}</button>
        </div>
      )
  } 
  else if (variant === "outline") {
      return (
        <div>
            <div>{title}</div>
            <button className="btn-outline">{btnTitle}</button>
        </div>
      )
  }
  else if (variant === "text") {
    return (
      <div>
          <div>{title}</div>
          <button className="btn-text">{btnTitle}</button>
      </div>
    )
}
}

Button.propType = {
    variant: PropTypes.string,
}

export default Button