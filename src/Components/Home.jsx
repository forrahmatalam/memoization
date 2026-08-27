import React from 'react'


const Home = ({Users}) => {
    console.log("Home rendering");
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default React.memo(Home , (prevProps, nextProps) => {
    return prevProps.Users.id === nextProps.Users.id;
    
   
});
