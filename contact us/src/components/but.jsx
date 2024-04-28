import React from 'react'
import { MdMessage } from 'react-icons/md'

const But = (props) => {
    const { isOutline,icon,text,...rest }=props;
    return (
        <button
            {...rest}
             
            style={{
            padding: "18px",
            backgroundColor: isOutline ? 'black' : 'white',
            color: props.isOutline ? 'white' : 'black', // Adjusted the color logic here
            minWidth: "220px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: "center",
            cursor:"pointer"
        }}>
            {icon}
            {text}
        </button>
    )
}

export default But;
