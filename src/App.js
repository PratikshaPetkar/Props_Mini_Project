import Component2 from "./Component2"
// passing lot of component to child component
//recommended way is to use object and spread operator used when elements from array or list should included in list
function App(){ 

 const data = {            // created object with properties have to send this to component2
  name: "Freecodecamp",
  platform:"YouTube",
  subs: 3000
 }



  return(
<Component2   {...data}/>   // data is name of obj and spread operator used to                         
//  name={data.name}
//  platform={data.platform}  ////here properties are passed to comp2 individually
// subs={data.subs} 
  )
}

export default App;