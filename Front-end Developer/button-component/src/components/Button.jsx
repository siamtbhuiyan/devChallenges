import React from 'react'
import PropTypes from 'prop-types';
import useIcon from '../hooks';

const Button = ({ title, btnTitle, variant, disableShadow, disabled, startIcon, endIcon, size, color }) => {
    const StartIcon = useIcon(startIcon)
    const EndIcon = useIcon(endIcon)

    return (
    <div>
        <div className='text-xs py-3'>{title}</div>
        <button disabled={disabled} className={`btn-${variant}-${color} btn-${size} ${disableShadow ? "" : "shadow"}`}><StartIcon style={{ fontSize: 20 }}/> {btnTitle} <EndIcon  style={{ fontSize: 20 }}/></button>
    </div>
    )
}

Button.propType = {
    variant: PropTypes.string,
    btnTitle: PropTypes.string,
    disableShadow: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string
}

Button.defaultProps = {
    variant: 'default',
    btnTitle: "Default",
    disableShadow: false,
    disabled: false,
    size: "md",
    color: "default",
    startIcon: "",
    endIcon: ""
}

export default Button