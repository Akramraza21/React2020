import React from 'react'

const RigidColor = (WrappedComponent) => {
    const Colors = ['red','yellow','blue','green','voilet','orange']
    const RandomColor = Colors[Math.floor(Math.random()*5)]
    const ClassName = RandomColor+'-text'
    console.log(ClassName)
    const style={color:RandomColor}
    return (props) => 
    {
    return ( <div style={style}>    
        <WrappedComponent {...props} />
    </div>)
    }
}
export default RigidColor;