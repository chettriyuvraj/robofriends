import React from 'react';




const Cards = ({ name, id, email }) =>
{
//     const {name,id,email} = props;
return(
     <div className = 'tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
         <img src={`https://robohash.org/${id}?200x200`} alt='roboimage'></img>
        <div>
         <h2>{name}</h2>
        <p>{email}</p>



        </div>
     </div>




);

}

export default Cards;

