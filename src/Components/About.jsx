import React from 'react'


const About = ({Users}) => {
    console.log("About rendering");
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About , (prevProps, nextProps) => {
    return prevProps.Users.id === nextProps.Users.id;
    
   
});
