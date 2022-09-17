
import React from 'react'

//on below line calling props in child component and for multiple have to use {}

export default function Component2(data) {

  const {name,platform,subs} = data;
  //here using destructring so instead of data.propertyname just giving property name
  return (
    <>
    <p>Name:{name}</p>    
    <p>Platform:{platform}</p>      
    <p>Subs:{subs}</p>
      
    </>
  )
}
//here wehave used data coz name of object is data but we can use any name