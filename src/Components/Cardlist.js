import React from 'react';
import Cards from './Cards.js';




const Cardlist = ({robots}) =>
{


return(
    <div>{
        
        robots.map((user, i) => {
        return (
            <Cards key={user.id} id={user.id} name={user.name} email={user.email} />
        );
    })}
    
    
    </div>
);




};


export default Cardlist;


