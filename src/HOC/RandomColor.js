import React from 'react'

const RandomColour = (WrappedComponent) => {
    const Colours = ['red','green','yellow','orange','blue','pink','brown']
    const randomColour = Colours[Math.floor(Math.random()*6)] 
    const style = {color:randomColour}
    return (props)=>{
        return (
            <div style={style}>
            <WrappedComponent  {...props}/>
            </div>
        )
}
}
export default RandomColour;